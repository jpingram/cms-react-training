import { useContext } from "react"
import { MobileContext } from "../hooks/useIsMobile"
import styles from '../styles.module.css'

type BlurbProps = {
	tag?: string,
	title?: string,
	description?: string,
}

export const Blurb = ({ tag, title, description }: BlurbProps) => {
	const { isMobile } = useContext(MobileContext);

	return (
		<div className={isMobile ? styles.blurbMobile : styles.blurb}>
			{tag &&
			<div className={isMobile ? styles.blurbTagMobile : styles.blurbTag}>
				{tag}
			</div>
			}
			{title &&
			<div className={isMobile ? styles.blurbTitleMobile : styles.blurbTitle}>
				{title}
			</div>
			}
			{description &&
			<div className={isMobile ? styles.blurbDescriptionMobile : styles.blurbDescription}>
				<p>{description}</p>
			</div>
			}
		</div>
	)
}