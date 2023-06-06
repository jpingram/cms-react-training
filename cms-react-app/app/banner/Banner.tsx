import { Filter } from "./Filter";

type BannerProps = {
	isMobile: boolean,
}

export const Banner = ({ isMobile }: BannerProps) {
	return isMobile ? (
		<div>
		</div>
	) : (
		<div>
		</div>
	);
}