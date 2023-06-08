//import PropTypes from "prop-types"
import { useState } from "react"
import Image from 'next/image'
import { Detail } from './Detail'
import { Button } from './Button'
import styles from '../page.module.css'

export function Comic({ comic }) {
	const [favorited, setFavorited] = useState(false);

	return (
		<li className={styles.comic}>
			<Image
				src={comic.thumbnail}
				width={275}
				height={425}
				alt={"Cover of " + comic.title}
			/>
			<Button favorited={favorited} setFavorited={setFavorited}/>
			<h3 className={styles.title}>{comic.title}</h3>
			<Detail issue={comic.issueNumber} publishDate={comic.publishDate} creators={comic.creators}/>
		</li>
	)
}

// Comic.propTypes = {
// 	comic: PropTypes.shape({
// 		id: PropTypes.number.isRequired,
// 		title: PropTypes.string.isRequired,
// 		issueNumber: PropTypes.number.isRequired,
// 		publishDate: PropTypes.instanceOf(Date).isRequired,
// 		creators: PropTypes.shape({
// 			resourceURI: PropTypes.string,
// 			name: PropTypes.string.isRequired,
// 			role: PropTypes.string.isRequired,
// 		}),
// 		thumbnail: PropTypes.string.isRequired
// 	})
// }