export default function ErrorsDisplay({ errors }) {
	if (!errors || errors.length === 0) {
		return null;
	}

	return (
		<div className="uk-alert uk-alert-danger">
			<p>The following errors were found:</p>
			<ul>
				{errors.map((error) => (
					<li key={error}>{error}</li>
				))}
			</ul>
		</div>
	);
}
