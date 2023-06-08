import { useState, useEffect, useContext } from "react"
import { ITEM_LIMIT, Status, Comic, fetchComics, defaultBlurb } from "../hooks/useData"
import { MobileContext } from "../hooks/useIsMobile"
import { ComicsList } from '../comics/ComicsList'
import { FavoritesList } from '../favorites/FavoritesList'
import { Banner } from "../banner/Banner"
import { Pager } from "../comics/Pager"
import { Blurb } from "./Blurb"
import styles from '../styles.module.css'

export const ComicLayout = () => {
	const [comics, setComics] = useState<Comic[]>([]);
	const [apiStatus, setApiStatus] = useState<Status>('waiting');
	const [characterId, setCharacterId] = useState(0); //0 = none selected
	const [creatorId, setCreatorId] = useState(0); //0 = none selected

	const [offset, setOffset] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	const { isMobile } = useContext(MobileContext);

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
	}, [offset, characterId, creatorId]);

	return (
		<div>
			<Blurb tag={defaultBlurb.tag} title={defaultBlurb.title} description={defaultBlurb.description}/>
			<div className={isMobile ? styles.fullLayoutMobile : styles.fullLayout}>
				<div className='main'>
					<Banner setCharacterId={setCharacterId} setCreatorId={setCreatorId} setOffset={setOffset}/>
					<ComicsList comics={comics} apiStatus={apiStatus}/>
					<Pager offset={offset} numItems={comics.length} totalItems={totalItems} prevPage={prevPage} nextPage={nextPage}/>
				</div>
				{!isMobile && <FavoritesList />}
			</div>
		</div>
		
	)
}