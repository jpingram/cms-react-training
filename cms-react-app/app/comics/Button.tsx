import styles from '../page.module.css'

type ButtonProps = {
	favorited: boolean,
	setFavorited: (boolean) => void,
}

export function Button({ favorited, setFavorited }: ButtonProps) {
	function BoltIcon() {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="white" className={styles.bolt}><path d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"/></svg>
		)
	}

	return (
		<div className={styles.buttonContainer}>
			<button className={favorited === true ? styles.favButtonActive : styles.favButton} onClick={() => setFavorited(!favorited)}>
				<BoltIcon />
			</button>
		</div>
	)
}