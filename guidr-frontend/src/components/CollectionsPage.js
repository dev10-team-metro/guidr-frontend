import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CollectionsPage.css';
import Modal from './Modal.js';

function CollectionsPage() {
	const [collections, setCollections] = useState([]);
	const [passCollectionsId, setPassCollectionsId] = useState(0);

	useEffect(() => {
		fetch(`http://localhost:8080/api/guidr/collection`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setCollections(data);
			})
			.catch(console.log);
	}, []);

	const handleSetId = (collectionId) => {
		setPassCollectionsId(collectionId);
	};

	return (
		<React.Fragment>
			<Modal id={passCollectionsId} />
			<div className="collectionsContainer">
				<div className="uk-background cover">
					<div className="top">
						{/*}
						<form class="uk-search uk-search-large searchBar">
							<span uk-search-icon></span>
							<input
								class="uk-search-input"
								type="search"
								placeholder="Search by city..."
							/>
						</form>
	*/}

						<div className="topText">
							<h1>
								Collections<span>Select a tour!</span>
							</h1>
						</div>

						<div className="collections" data-uk-grid>
							{collections.map((collection) => (
								<div
									key={collection.id}
									className="uk-flex uk-flex-column uk-flex-center uk-flex-middle collection"
								>
									<div className="cardTitle">
										<h3>{collection.name}</h3>
									</div>

									<div
										class="uk-card uk-card-small uk-card-default tour"
										style={{
											background: `url(${collection.landmarks[0].image})`,
											backgroundSize: 'cover',
										}}
									>
										<button
											className="uk-button uk-button-default previewButton"
											type="button"
											onClick={() =>
												handleSetId(
													collection.collectionId
												)
											}
											data-uk-toggle="target: #modal-full"
										>
											Preview
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default CollectionsPage;
