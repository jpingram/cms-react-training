import { useContext } from 'react'
import { FavsContext } from '../hooks/useFavorites'
import { FavoriteCard } from './FavoriteCard'
import styles from '../styles.module.css'

export const FavoritesList = () => {
	const context = useContext(FavsContext);
	const { favorites, removeFromFavorites } = context;

	return (
		<div className={styles.favsList}>
			<p className={styles.favsTitle}><strong>Favorites</strong></p>
			{favorites &&
			favorites
			.map((comic) => {
				return <FavoriteCard key={comic.id} comic={comic} removeFromFavorites={removeFromFavorites}/>
			})}
		</div>
	)
}