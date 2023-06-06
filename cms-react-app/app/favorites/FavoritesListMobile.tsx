import { useContext } from 'react'
import { FavsContext } from '../hooks/useFavorites'
import { FavoriteCard } from './FavoriteCard'

export const FavoritesList = () => {
	const context = useContext(FavsContext);
	const { favorites, removeFromFavorites } = context;

	return (
		<div className='favsList'>
			<h3>Favorites</h3>
			{favorites &&
			favorites
			.map((comic) => {
				return <FavoriteCard key={comic.id} comic={comic} removeFromFavorites={removeFromFavorites}/>
			})}
		</div>
	)
}