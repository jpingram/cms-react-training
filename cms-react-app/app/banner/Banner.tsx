import { useState, useContext } from "react"
import { MobileContext } from '../hooks/useIsMobile'
import { Filter } from "./Filter"
import { FavoritesList } from "../favorites/FavoritesList"
import styles from '../styles.module.css'

type BannerProps = {
	setCharacterId: (number) => void,
	setCreatorId: (number) => void,
	setOffset: (number) => void,
}

export const Banner = ({ setCharacterId, setCreatorId, setOffset }: BannerProps) => {
	const [filterOpen, setFilterOpen] = useState(false);
	const [favsOpen, setFavsOpen] = useState(false);

	const { isMobile } = useContext(MobileContext);

	return isMobile ? (
		<div className=''>
			<div className={styles.bannerMobile}>
			{filterOpen 
			? 	<button onClick={() => setFilterOpen(false)}>Hide Filter</button>
			: 	<button onClick={() => {setFilterOpen(true); setFavsOpen(false);}}>Filter</button>
			}
			{favsOpen 
			? <button onClick={() => setFavsOpen(false)}>Hide Favorites</button>
			: <button onClick={() => {setFilterOpen(false); setFavsOpen(true);}}>Show Favorites</button>
			}
			</div>
			{filterOpen &&
			<div className={styles.overlayLeft}>
				<Filter setCharacterId={setCharacterId} setCreatorId={setCreatorId} setOffset={setOffset}/>
			</div>
			}
			{favsOpen &&
			<div className={styles.overlayRight}>
				<FavoritesList />
			</div>
			}
		</div>
		
	) : (
		<div className={styles.banner}>
			<Filter setCharacterId={setCharacterId} setCreatorId={setCreatorId} setOffset={setOffset}/>
		</div>
	);
}