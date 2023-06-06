import Image from 'next/image'
import { Comic } from '../hooks/useData'

type FavoriteProps = {
	comic: Comic,
	removeFromFavorites: ({id}) => void,
}

export const FavoriteCard = ({ comic, removeFromFavorites }: FavoriteProps) => {


	return (
		<div className='favoriteCard'>
			<span className='leftCol'>
				<button className={'removeButton'} onClick={() => removeFromFavorites({id: comic.id})}>x</button>
				<Image
					src={comic.thumbnail}
					width={33} //maintains 11:17 aspect ratio
					height={51}
					alt={"Cover of " + comic.title}
				/>
			</span>
			<span className='rightCol'>
				<strong>{comic.title}</strong>
				<p>Issue: {comic.issueNumber}</p>
			</span>
		</div>
	);
}