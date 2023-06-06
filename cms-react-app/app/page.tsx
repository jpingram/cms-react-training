'use client';

//import { useState, useEffect } from 'react'
import { useState, useEffect } from "react";
import { ITEM_LIMIT, Status, Comic, fetchComics } from "./hooks/useData";
import { ComicsList } from './comics/ComicsList';
import { FavoritesList } from './favorites/FavoritesList';
import { FavsWrapper } from './hooks/useFavorites';
import { Banner } from "./banner/Banner"
import { Pager } from "./comics/Pager"

export default function Home() {
	const [comics, setComics] = useState<Comic[]>([]);
	const [apiStatus, setApiStatus] = useState<Status>('waiting');
	const [characterId, setCharacterId] = useState(0); //0 = none selected
	const [creatorId, setCreatorId] = useState(0); //0 = none selected

	const [offset, setOffset] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	const prevPage = () => {
		if (offset > 0) {
			if (offset < ITEM_LIMIT) {
				setOffset(0);
			} else {
				setOffset(offset - ITEM_LIMIT);
			}
		}
	}

	const nextPage = () => {
		if (offset + ITEM_LIMIT < totalItems) {
			setOffset(offset + ITEM_LIMIT);
		}
	}

	useEffect(() => {
		fetchComics({setApiStatus, setComics, offset, setTotalItems, characterId, creatorId});
	}, [offset, characterId, creatorId])

	return (
		<FavsWrapper>
			<main className='fullApp'>
				<div className='main'>
					<Banner isMobile={false} setCharacterId={setCharacterId} setCreatorId={setCreatorId} setOffset={setOffset}/>
					<ComicsList comics={comics} apiStatus={apiStatus}/>
					<Pager offset={offset} numItems={comics.length} totalItems={totalItems} prevPage={prevPage} nextPage={nextPage}/>
				</div>
				<FavoritesList />
			</main>
		</FavsWrapper>
	)
}

// new idea, add favorites functionality in a context custom hook so the functionality is ther and the functions are accessible in a bunch of locations
// look into context provider video in custom hooks LUT