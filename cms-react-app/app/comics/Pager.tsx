import { ITEM_LIMIT } from "../hooks/useData"
import styles from "../styles.module.css"

type PagerProps = {
	offset: number,
	numItems: number,
	totalItems: number,
	prevPage: () => void,
	nextPage: () => void,
}

export function Pager({
			offset = 0, 
			numItems = 0, 
			totalItems = 0,
			prevPage,
			nextPage,
		}: PagerProps) {
	return (
		<div className={styles.pager}>
			<button disabled={(offset-ITEM_LIMIT < 0) ? true : false} onClick={() => prevPage()}>&lt;</button>
			&nbsp;{offset+1}-{offset+numItems} of {totalItems}&nbsp;
			<button disabled={(offset+ITEM_LIMIT >= totalItems) ? true : false} onClick={() => nextPage()}>&gt;</button>
		</div>
		
	)
}