import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Modal() {
	const [collections, setCollections] = useState([]);

	useEffect(() => {
		fetch('http://localhost8080/api/guidr/collection')
			.then((response) => response.json())
			.then((data) => setCollections(data))
			.catch(console.log);
	}, []);

	return (
		<>
			<div id="modal-full" class="uk-modal-full" data-uk-modal>
				<div class="uk-modal-dialog">
					<button
						class="uk-modal-full uk-close-large"
						type="button"
						uk-close
					></button>
					<div
						class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle"
						uk-grid
					>
						<div class="uk-padding-large">
							<h1>Headline</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</p>
							<Link
								className="uk-button uk-button-default homebutton"
								to="/collection"
							>
								Begin the tour
							</Link>
							<Link
								className="uk-button uk-button-default homebutton"
								to="/CollectionsPage"
							>
								Go back
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Modal;
