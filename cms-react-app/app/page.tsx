'use client';

import styles from './page.module.css'
import { ComicsList } from './comics/ComicsList'

export default function Home() {
	return (
		<main className={styles.main}>
			<ComicsList />
		</main>
	)
}