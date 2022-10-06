import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
							<h1 className='description'>Select one of our collections, or search for tours by city.</h1>
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
						<h2 className="topText">Collections</h2>
						
						<div className='collections'>
							{collections.map(collection => (
								<div key={collection.id} >
									
									
									<div class="uk-card uk-card-small uk-card-default tour">
									<h3  className="cardText">{collection.name}</h3>
										
									</div>
									<button className="uk-button uk-button-default previewButton" type="button" onClick={() => handleSetId(collection.collectionId)} data-uk-toggle="target: #modal-full">Preview</button>
									<div>
									
										
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
