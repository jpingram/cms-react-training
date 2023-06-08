import { useContext } from 'react'
import { FavsContext } from '../hooks/useFavorites'
import { MobileContext } from '../hooks/useIsMobile'
import Image from 'next/image'
import { BoltIcon } from '../assets/BoltIcon'
import styles from '../styles.module.css'

export const Nav = () => {
	const { favorites } = useContext(FavsContext);
	const { isMobile } = useContext(MobileContext);

	return isMobile ? (
		<div className={styles.headerNavMobile}>
			<Image
				src={"./logo.svg"}
				width={75}
				height={75}
				alt={"Comic Closet Logo"}
			/>
			<nav className={styles.mobile}>
				<ul>
					<li><a href="#"><BoltIcon/>{" (" + favorites.length + ")"}</a></li>
					<li><button className='menuToggle'>&#9776;</button></li>
				</ul>
			</nav>
		</div>
	) : (
		<div className={styles.headerNav}>
			<Image
				src={"./logo.svg"}
				width={106}
				height={106}
				alt={"Comic Closet Logo"}
			/>
			<nav className={styles.desktop}>
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">Shop</a></li>
					<li><a href="#"><BoltIcon/>{" My Favorites (" + favorites.length + ")"}</a></li>
				</ul>
			</nav>
		</div>
	)
}