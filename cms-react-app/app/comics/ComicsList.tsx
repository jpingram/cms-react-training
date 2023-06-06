import { ComicCard } from "./ComicCard"
import { Status, Comic } from "../hooks/useData"

type ComicsListProps = {
	comics: Comic[],
	apiStatus: Status,
}

export function ComicsList({ comics, apiStatus }: ComicsListProps) {
	return (
		<div className='comicsList'>
			<div className='grid'>
				{apiStatus === 'loading' && 
					<h3>Loading comics!</h3>
				}
				{apiStatus === 'success' && (comics
				.map((comic) => (
					<ComicCard key={comic.id} comic={comic} />
				)))}
				{apiStatus === 'error' &&
					<div>
						<h3>Sorry, there was an error processing your request.</h3>
						<h4>Please try again.</h4>
					</div>
				}
			</div>
		</div>
		
	)
}