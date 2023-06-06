import { useContext } from "react"
import Image from 'next/image'
import { Detail } from './Detail'
import { Button } from './Button'
import { Comic } from '../hooks/useData'
import { FavsContext } from "../hooks/useFavorites"

type CardProps = {
	comic: Comic
}

export function ComicCard({ comic }: CardProps) {
	const context = useContext(FavsContext);
	const { addToFavorites, removeFromFavorites, isMaxedOut, isFavorited } = context;

	const add = () => {
		addToFavorites({ comic });
	}
	const remove = () => {
		removeFromFavorites({id: comic.id});
	}
	const favorited = isFavorited({id: comic.id});

	return (
		<li className='comic'>
			<Image
				src={comic.thumbnail}
				width={275}
				height={425}
				alt={"Cover of " + comic.title}
			/>
			<Button favorited={favorited} addToFavorites={add} removeFromFavorites={remove} isMaxedOut={isMaxedOut}/>
			<h3 className="title" data-testid="title">{comic.title}</h3>
			<Detail issue={comic.issueNumber} publishDate={comic.publishDate} creators={comic.creators}/>
		</li>
	)
}