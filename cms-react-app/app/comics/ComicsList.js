import React, { useState, useEffect } from "react"
import { Comic } from "./Comic"
import { fetchComics } from "../hooks/useData"
import styles from '../page.module.css'

export function ComicsList() {
	const [comics, setComics] = useState([]);
	const [apiStatus, setApiStatus] = useState(false);

	useEffect(() => {
		fetchComics(setApiStatus, setComics);
	}, [])

	return (
		<div className={styles.grid}>
			{apiStatus === 'loading' && 
				<h3>Loading comics!</h3>
			}
			{apiStatus === 'success' && comics
			.map((comic) => (
				<Comic key={comic.id} comic={comic} />
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