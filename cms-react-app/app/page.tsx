'use client';

//import { useState, useEffect } from 'react'
import styles from './page.module.css'
import { ComicsList } from './comics/ComicsList'
import { FavoritesList } from './favorites/FavoritesList'
//import { Comic } from './hooks/useData'
import { FavsWrapper } from './hooks/useFavorites';

export default function Home() {
	return (
		<FavsWrapper>
			<main className='main'>
				<ComicsList />
				<FavoritesList />
			</main>
		</FavsWrapper>
	)
}

// new idea, add favorites functionality in a context custom hook so the functionality is ther and the functions are accessible in a bunch of locations
// look into context provider video in custom hooks LUT