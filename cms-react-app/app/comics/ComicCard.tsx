import { useContext } from "react"
import { MobileContext } from '../hooks/useIsMobile'
import { FavsContext } from "../hooks/useFavorites"
import Image from 'next/image'
import { Detail } from './Detail'
import { Button } from './Button'
import { Comic } from '../hooks/useData'
import styles from '../styles.module.css'

type CardProps = {
	comic: Comic,
}

export function ComicCard({ comic }: CardProps) {
	const { addToFavorites, removeFromFavorites, isMaxedOut, isFavorited } = useContext(FavsContext);
	const { isMobile } = useContext(MobileContext);

	const add = () => {
		addToFavorites({ comic });
	}
	const remove = () => {
		removeFromFavorites({id: comic.id});
	}
	const favorited = isFavorited({id: comic.id});

	return (
		(!isMobile ?
			<li className={styles.comic}>
				<Image
					src={comic.thumbnail}
					width={275}
					height={425}
					alt={"Cover of " + comic.title}
				/>
				<Button favorited={favorited} addToFavorites={add} removeFromFavorites={remove} isMaxedOut={isMaxedOut}/>
				<h3 className={styles.title} data-testid="title">{comic.title}</h3>
				<Detail issue={comic.issueNumber} publishDate={comic.publishDate} creators={comic.creators}/>
			</li>
			:
			<li className={styles.comicMobile}>
				<div className={styles.leftCol}>
					<h3 className={styles.title} data-testid="title">{comic.title}</h3>
					<Detail issue={comic.issueNumber} publishDate={comic.publishDate} creators={comic.creators}/>
				</div>
				<div className={styles.rightCol}>
					<Button favorited={favorited} addToFavorites={add} removeFromFavorites={remove} isMaxedOut={isMaxedOut}/>
					<Image
						src={comic.thumbnail}
						width={125}
						height={188}
						alt={"Cover of " + comic.title}
					/>
				</div>
			</li>
		)
		
	)
}