import { useContext } from 'react'
import { MobileContext } from '../hooks/useIsMobile'
import Image from 'next/image'
import { Nav } from './Nav'
import styles from '../styles.module.css'

export const Header = () => {
	const { isMobile } = useContext(MobileContext);

	return (
		<div className={isMobile ? styles.headerMobile : 'header'}>
			<Nav/>
			{isMobile ?
			<Image
				src={"/hero-photo.png"}
				width={1000}
				height={450}
				alt={"Comic Closet Header Background Image"}
			/>
			:
			<Image
				src={"/hero-photo.png"}
				width={1440}
				height={650}
				alt={"Comic Closet Header Background Image"}
			/>
			}
			{isMobile ?
			<div className={styles.halftoneContainerMobile}>
				<Image
					src={"/halftone.png"}
					width={1000}
					height={92}
					alt={"Comic Closet Header Background Image"}
				/>
			</div>
			:
			<div className={styles.halftoneContainer}>
				<Image
					src={"/halftone.png"}
					width={1440}
					height={176}
					alt={"Comic Closet Header Background Image"}
				/>
			</div>
			}
			<div className={isMobile ? styles.headerTitleRectMobile : styles.headerTitleRect}>
				<h1 className={isMobile ? styles.headerTitleMobile : styles.headerTitle}>Comic Closet</h1>
			</div>
		</div>
	)
}