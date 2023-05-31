export function Detail({ issue, publishDate, creators }) {
	var dateString = new Date(publishDate);
	dateString = dateString.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

	return (
		<div>
			<li><strong>Issue: </strong>{issue}</li>
			<li><strong>Published: </strong>{dateString}</li>
			<li><strong>Creators: </strong>
				{creators
					.filter((creator) => { return creator.role === 'writer' || creator.role === 'editor'})
					.map((creator) => {return creator.name.split(' ')[1]})
					.join(', ')}
			</li>
		</div>
	);
}