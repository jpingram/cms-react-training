import React, { useState, useEffect } from "react"
import { ComicCard } from "./ComicCard"
import { Filter } from "../banner/Filter"
import { Pager } from "./Pager"
import { ITEM_LIMIT, Status, Comic, fetchComics } from "../hooks/useData"

export function ComicsList() {
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
		<div className='comicsList'>
			<Filter setCharacterId={setCharacterId} setCreatorId={setCreatorId} setOffset={setOffset}/>
			<div className='grid'>
				{apiStatus === 'loading' && 
					<h3>Loading comics!</h3>
				}
				{apiStatus === 'success' && (comics
				.map((comic) => (
					<ComicCard key={comic.id} comic={comic} />
				)))}
				{apiStatus === 'error' &&
					<div>
						<h3>Sorry, there was an error processing your request.</h3>
						<h4>Please try again.</h4>
					</div>
				}
			</div>
			<Pager offset={offset} numItems={comics.length} totalItems={totalItems} prevPage={prevPage} nextPage={nextPage}/>
		</div>
		
	)
}