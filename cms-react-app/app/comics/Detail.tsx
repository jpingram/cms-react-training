type DetailProps = {
	issue: number,
	publishDate: string,
	creators: {
		resourceURL?: string,
		name: string,
		role: string
	}[]
}

export function Detail({ issue, publishDate, creators }: DetailProps) {
	return (
		<div>
			<li><strong>Issue: </strong>{issue}</li>
			<li><strong>Published: </strong>{publishDate}</li>
			<li><strong>Creators: </strong>
				{creators
					.filter((creator) => { return creator.role === 'writer' || creator.role === 'editor'})
					.map((creator) => {return creator.name.split(' ')[1]})
					.join(', ')}
			</li>
		</div>
	);
}