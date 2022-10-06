import { useState, useEffect } from 'react';
import '../css/Facts.css';

function Facts({ landmark }) {
	const [facts, setFacts] = useState([]);

	useEffect(() => {
		console.log(landmark);
		setFacts(landmark['facts']);
	});

	return (
		<>
			<div
				data-uk-slideshow="animation: fade"
				className="factslideshow overlay"
			>
				<div className="uk-position-relative">
					<div
						className="uk-card uk-card-default uk-card-body uk-position-relative uk-visible-toggle"
						tabIndex="0"
					>
						<ul className="uk-slideshow-items">
							{facts &&
								facts.map((fact, index) => (
									<li
										data-uk-slideshow-item={index}
										key={index}
									>
										<h1>Fun Facts</h1>
										{fact.description}
									</li>
								))}
						</ul>
						<button
							className="uk-position-center-left uk-position-small uk-hidden-hover factslider"
							href="#"
							data-uk-slidenav-previous
							data-uk-slideshow-item="previous"
						></button>
						<button
							className="uk-position-center-right uk-position-small uk-hidden-hover factslider"
							href="#"
							data-uk-slidenav-next
							data-uk-slideshow-item="next"
						></button>

						<div>
							<ul className="uk-slideshow-nav uk-dotnav uk-position-bottom-center uk-margin factnav"></ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Facts;
