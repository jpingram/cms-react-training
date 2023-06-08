import { useContext } from 'react'
import { MobileContext } from '../hooks/useIsMobile'
import { ComicCard } from "./ComicCard"
import { Status, Comic } from "../hooks/useData"
import styles from '../styles.module.css'

type ComicsListProps = {
	comics: Comic[],
	apiStatus: Status,
}

export function ComicsList({ comics, apiStatus }: ComicsListProps) {
	const { isMobile } = useContext(MobileContext);

	return (
		<div className={styles.comicsList}>
			<div className={isMobile ? styles.gridMobile : styles.grid}>
				{apiStatus === 'loading' && 
					<h3>Loading comics!</h3>
				}
				{apiStatus === 'success' && (comics
				.map((comic) => (
					<ComicCard key={comic.id} comic={comic}/>
				)))}
				{apiStatus === 'error' &&
					<div>
						<h3>Sorry, there was an error processing your request.</h3>
						<h4>Please try again.</h4>
					</div>
				}
			</div>
		</div>
	)
}