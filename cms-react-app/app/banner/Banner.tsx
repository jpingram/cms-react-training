import { Filter } from "./Filter";

type BannerProps = {
	isMobile: boolean,
	setCharacterId: (number) => void,
	setCreatorId: (number) => void,
	setOffset: (number) => void,
}

export const Banner = ({ isMobile = false, setCharacterId, setCreatorId, setOffset }: BannerProps) => {
	return isMobile ? (
		<div>
		</div>
	) : (
		<Filter setCharacterId={setCharacterId} setCreatorId={setCreatorId} setOffset={setOffset}/>
	);
}