import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CollectionsPage.css';

function CollectionsPage() {
	const [collections, setCollections] = useState([]);

	useEffect(() => {
		fetch('http://localhost8080/api/guidr/collection')
			.then((response) => response.json())
			.then((data) => setCollections(data))
			.catch(console.log);
	}, []);

	return (
		<React.Fragment>
			<div className="collectionsContainer">
				<div className="uk-background cover">
					<div className="top">
						<h1 className="topText">Collections</h1>
						<div className="description">
							<p>
								Select one of our collections, or search for
								tours by city.
							</p>
						</div>
						<form class="uk-search uk-search-large">
							<span uk-search-icon></span>
							<input
								class="uk-search-input"
								type="search"
								placeholder="Search by city..."
							/>
						</form>
						<div className="collections">
							<div class="uk-card uk-card-default uk-card-body">
								Collection 1: <br />
								<Link
									className="uk-button uk-button-default"
									to="/collection"
								>
									Get Started
								</Link>
							</div>
							<div class="uk-card uk-card-default uk-card-body uk-margin-left">
								Collection 2: <br /> 1800's
							</div>
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
		</React.Fragment>
	);
}

export default CollectionsPage;
