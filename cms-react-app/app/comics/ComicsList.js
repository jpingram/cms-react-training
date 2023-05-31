import React, { useState, useEffect } from "react"
import { Comic } from "./Comic"
import { Data } from "../Data"

export function ComicsList() {
	const [comics, setComics] = useState([]);

	const getComics = () => {
		setComics(Data());
	}

	useEffect(() => {
		getComics();
	}, [])


	return (
		<div className='grid'>
			{comics
			.map((comic) => (
				<Comic key={comic.id} comic={comic} />
			))}
		</div>
	)
}