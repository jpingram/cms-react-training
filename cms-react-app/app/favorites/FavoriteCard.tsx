import Image from 'next/image'
import { Comic } from '../hooks/useData'
import styles from '../styles.module.css'

type FavoriteProps = {
	comic: Comic,
	removeFromFavorites: ({id}) => void,
}

export const FavoriteCard = ({ comic, removeFromFavorites }: FavoriteProps) => {
	return (
		<div className={styles.favoriteCard}>
			<span className={styles.leftCol}>
				<button className={'removeButton'} onClick={() => removeFromFavorites({id: comic.id})}>x</button>
				<Image
					src={comic.thumbnail}
					width={50} //maintains 11:17 aspect ratio
					height={75}
					alt={"Cover of " + comic.title}
				/>
			</span>
			<span className={styles.rightCol}>
				<strong>{comic.title}</strong>
				<p>Issue: {comic.issueNumber}</p>
			</span>
		</div>
	);
}