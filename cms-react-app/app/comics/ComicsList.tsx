import React, { useState, useEffect } from "react"
import { ComicCard } from "./ComicCard"
import { Status, Comic, fetchComics } from "../hooks/useData"
import styles from '../page.module.css'

export function ComicsList() {
	const [comics, setComics] = useState<Comic[]>([]);
	const [apiStatus, setApiStatus] = useState<Status>('waiting');

	useEffect(() => {
		fetchComics({setApiStatus, setComics});
	}, [])

	return (
		<div className={styles.grid}>
			{apiStatus === 'loading' && 
				<h3>Loading comics!</h3>
			}
			{apiStatus === 'success' && comics
			.map((comic) => (
				<ComicCard key={comic.id} comic={comic} />
			))}
			{apiStatus === 'error' &&
				<div>
					<h3>Sorry, there was an error processing your request.</h3>
					<h4>Please try again.</h4>
				</div>
			}
		</div>
	)
}