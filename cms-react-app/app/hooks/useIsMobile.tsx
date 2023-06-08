import { useState, useEffect, createContext, ReactNode } from "react"

const initialState: {
	isMobile: boolean,
} = {
	isMobile: false,
};

export const MobileContext = createContext(initialState);

type WrapperProps = {
	children: ReactNode,
}
export const MobileWrapper = ({ children }: WrapperProps) => {
	const [width, setWidth] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		setWidth(window.innerWidth);

		return () => {
			window.removeEventListener('resize', handleResize);
		}
	}, []);
	
	useEffect(() => {
		if (window.innerWidth < 1000) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, [width]);

	return (
		<MobileContext.Provider
			value={{
				isMobile: isMobile,
			}}
			>
			{children}
		</MobileContext.Provider>
	)
}