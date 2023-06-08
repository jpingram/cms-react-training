import React, { useState, useEffect } from "react"
import { Comic } from "./Comic"
import { Data } from "../Data"
import styles from '../page.module.css'

export function ComicsList() {
	const [comics, setComics] = useState([]);

	const getComics = () => {
		setComics(Data());
	}

	useEffect(() => {
		getComics();
	}, [])


	return (
		<div className={styles.grid}>
			{comics
			.map((comic) => (
				<Comic key={comic.id} comic={comic} />
			))}
		</div>
	)
}