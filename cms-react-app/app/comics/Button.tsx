import { BoltIcon } from "../assets/BoltIcon"
import styles from "../styles.module.css"

type ButtonProps = {
	favorited: boolean,
	addToFavorites: () => void,
	removeFromFavorites: () => void,
	isMaxedOut: () => boolean,
}

export function Button({ favorited, addToFavorites, removeFromFavorites, isMaxedOut }: ButtonProps) {
	return (
		<div className={styles.buttonContainer}>
			{favorited ? 
			<button className={styles.favButtonActive} onClick={() => removeFromFavorites()}>
				<BoltIcon />
			</button>
			:
			<button className={styles.favButton} disabled={isMaxedOut() ? true : false} onClick={() => addToFavorites()}>
				<BoltIcon />
			</button>
			}
		</div>
	)
}