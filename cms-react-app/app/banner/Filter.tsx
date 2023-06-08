import { useContext } from 'react'
import { MobileContext } from '../hooks/useIsMobile'
import styles from '../styles.module.css'

type FilterProps = {
	setCharacterId: (number) => void,
	setCreatorId: (number) => void,
	setOffset: (number) => void,
}

export const Filter = ({ setCharacterId, setCreatorId, setOffset }: FilterProps) => {
	const { isMobile } = useContext(MobileContext); 

	return (
		<div className={isMobile ? styles.filterMobile : styles.filter}>
			<strong>Filter by: </strong>
			<div className={styles.filterInputs}>
				<select
					name=""
					id="characterFilter"
					defaultValue={0}
					onChange={e => {setCharacterId(e.target.value); setOffset(0);}}
				>
					<option value={0}>Character</option>
					<option value={1009368}>Iron Man</option>
					<option value={1009220}>Captain America</option>
					<option value={1009664}>Thor</option>
					<option value={1009268}>Deadpool</option>
					<option value={1009562}>Scarlet Witch</option>
					<option value={1009189}>Black Widow</option>
					<option value={1009707}>Wasp</option>
					<option value={1010763}>Gamora</option>
				</select>
				<select
					name=""
					id="creatorFilter"
					defaultValue={0}
					onChange={e => {setCreatorId(e.target.value); setOffset(0);}}
				>
					<option value={0}>Creator</option>
					<option value={12787}>Kate Leth</option>
					<option value={24}>Brian Michael Bendis</option>
					<option value={30}>Stan Lee</option>
					<option value={32}>Steve Ditko</option>
					<option value={196}>Jack Kirby</option>
				</select>
			</div>
		</div>
	);
}