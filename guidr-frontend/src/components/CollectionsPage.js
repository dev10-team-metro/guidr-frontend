import React, { useEffect, useState } from 'react';
import './CollectionsPage.css';
import Modal from './Modal.js'


function CollectionsPage() {
	const [collections, setCollections] = useState([]);
	const [passCollectionsId, setPassCollectionsId] = useState(0);


	useEffect(() => {
		fetch(`http://localhost:8080/api/guidr/collection`)
			.then(response => response.json())
			.then(data => {
				console.log(data)
				setCollections(data)
			})
			.catch(console.log)
	}, [])

	const handleSetId = (collectionId)=> {
		setPassCollectionsId(collectionId);
	}

	return (
		<React.Fragment>

			<Modal id={passCollectionsId}/>
			<div className="collectionsContainer">
				<div className="uk-background cover">
					<div className="top">
							<h2 className='description'>Select one of our collections, or search for tours by city.</h2>
						<form class="uk-search uk-search-large">
							<span uk-search-icon></span>
							<input class="uk-search-input" type="search" placeholder="Search by city..." />
						</form>
						<h1 className="topText">Collections</h1>
						<div className='collections'>
							{collections.map(collection => (
								<div key={collection.id}>
									<div class="uk-card uk-card-default uk-card-body tour">
										<h3 className="cardText">{collection.name}</h3>
									</div>
									<div>
										<button className="uk-button uk-button-default previewButton" type="button" onClick={() => handleSetId(collection.collectionId)} data-uk-toggle="target: #modal-full">Preview</button>
									</div>

								</div>
							))}





						</div>
					</div>


				</div>

			</div>



			{/*}
			<div class="uk container uk-container-expand uk-margin-top uk-margin-large-bottom">
				<div class="background-center">
				<div class="uk-margin-center">
					<form class="uk-search uk-search-large">
						<span uk-search-icon></span>
						<input class="uk-search-input" type="search" placeholder="Search" />
					</form>
				</div>
				<div class="uk-grid" data-uk-grid-margin>
					<div class="uk-width-1-1 uk-row-first">
						<h2 class="uk-heading-medium">Tour collections</h2>
						<p class="uk-text-center">
							Please Choose from one of our collections
						</p>
					</div>
				</div>

				<div class="uk-flex uk-flex-center">
					<div class="uk-card uk-card-default uk-card-body" onclick="/collection/artdeco">Collection 1: <br /> Art Deco</div>
					<div class="uk-card uk-card-default uk-card-body uk-margin-left">Collection 2: <br /> 1800's</div>
					<div class="uk-card uk-card-default uk-card-body uk-margin-left">Collection 3: <br /> Modern Art</div>
				</div>

				</div>


	</div>



	*/}

	{/*state 
function 
fedd function
*/}



		</React.Fragment>
	)
}

export default CollectionsPage