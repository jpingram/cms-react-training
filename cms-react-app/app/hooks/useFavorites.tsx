import { useEffect, useReducer, createContext, ReactNode } from "react";
import { Comic } from "./useData"

//set up constants
type AddProps = {
	comic: Comic,
}
type RemoveProps = {
	id: number;
}
type IsFavoritedProps = {
	id: number;
}
type Action = {
	type: 'add' | 'remove' | 'load',
	value: any,
}

const initialFavsValue = [];

export const initialState: {
	favorites: Comic[],
	addToFavorites: ({comic}: AddProps) => void,
	removeFromFavorites: ({id}: RemoveProps) => void,
	isMaxedOut: () => boolean,
	isFavorited: ({id}: IsFavoritedProps) => boolean,
} = { 
	favorites: initialFavsValue,
	addToFavorites: () => {},
	removeFromFavorites: () => {},
	isMaxedOut: () => { return false },
	isFavorited: () => { return false },
};

const MAX_FAVORITES = 10;

//set up reducer
function reducer(state: Comic[], action: Action) {
	switch (action.type) {
		case 'add':
			window.localStorage.setItem("marvel-favorites", JSON.stringify([...state, action.value]));
			return [...state, action.value];
		case 'remove':
			window.localStorage.setItem("marvel-favorites", JSON.stringify(state.filter((favorite) => {return favorite.id !== action.value;})));
			return state.filter((favorite) => {return favorite.id !== action.value;});
		case 'load': 
			return action.value ?? initialFavsValue;
		default:
			throw new Error();
	}
}

export const FavsContext = createContext(initialState);

type WrapperProps = {
	children: ReactNode,
}
export const FavsWrapper = ({ children }: WrapperProps) => {
	//set up variables and state
	const [state, dispatch] = useReducer(reducer, initialFavsValue);

	//load favorites from localStorage
	useEffect(() => {
		var loadedValue = window.localStorage.getItem("marvel-favorites");
		if (loadedValue) {
			loadedValue = JSON.parse(loadedValue);
		}
		dispatch({ type: 'load', value: loadedValue });
	}, [])

	//add to favorites function
	const addToFavorites = ({ comic }: AddProps) => {
		dispatch({ type: 'add', value: comic });
	}

	//remove from favorites 
	const removeFromFavorites = ({ id }: RemoveProps) => {
		dispatch({ type: 'remove', value: id });
	}

	//checks if total number of favorites equals or exceeds limit
	const isMaxedOut = (): boolean => {
		return state.length >= MAX_FAVORITES;
	}

	//returns true if comic with given id is in the list of favorites
	const isFavorited = ({ id }: IsFavoritedProps): boolean => {
		return state.filter((favorite) => {return favorite.id === id;}).length > 0;
	}

	return (
		<FavsContext.Provider
			value={{
				favorites: state,
				addToFavorites,
				removeFromFavorites,
				isMaxedOut,
				isFavorited,
			}}
			>
			{children}
		</FavsContext.Provider>
	)
}