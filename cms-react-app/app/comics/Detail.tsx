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
		<ul>
			<li data-testid="issue"><strong>Issue: </strong>{issue}</li>
			<li data-testid="publishDate"><strong>Published: </strong>{publishDate}</li>
			<li data-testid="creators"><strong>Creators: </strong>
				{creators
					//.filter((creator) => { return creator.role === 'writer' || creator.role === 'editor'})
					.map((creator) => {return creator.name.split(' ').slice(-1)})
					.join(', ')}
			</li>
		</ul>
	);
}