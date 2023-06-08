'use client';

import { FavsWrapper } from './hooks/useFavorites'
import { MobileWrapper } from './hooks/useIsMobile'
import { Header } from './header/Header'
import { ComicLayout } from './layout/ComicLayout'

export default function Home() {
	return (
		<MobileWrapper>
			<FavsWrapper>
				<main className={''}>
					<Header/>
					<ComicLayout/>
				</main>
			</FavsWrapper>
		</MobileWrapper>
	)
}