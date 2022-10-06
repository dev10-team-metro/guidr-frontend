import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Facts from './Facts';
import '../css/Facts.css';
import ReviewModal from './ReviewModal';
import MapDisplay from './MapDisplay';

function Landmarks() {
	const [landmarks, setLandmarks] = useState([0]);
	const [currentLandmark, setCurrentLandmark] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);
	const { id } = useParams();
	const [showModal, setShowModal] = useState(false);
	const [collection, setCollection] = useState('');

	useEffect(() => {
		if (id) {
			fetch(`http://localhost:8080/api/guidr/collection/${id}`)
				.then((response) => {
					if (response.status === 200) {
						return response.json();
					} else {
						return Promise.reject(
							`Unexpected status code: ${response.status}`
						);
					}
				})
				.then((data) => {
					setLandmarks(data.landmarks);
					setCurrentLandmark(data.landmarks[currentIndex]);
					setCollection(data);
				})
				.catch(console.log);
		}
	}, [id, currentIndex]);

	const handleNextCurrentLandmark = () => {
		let index = currentIndex;

		if (index + 1 === landmarks.length - 1) {
			setShowModal(true);
		}

		if (index + 1 < landmarks.length) {
			index++;
			setCurrentLandmark(landmarks[index]);
			setCurrentIndex(index);

			if (index === landmarks.length) {
				setShowModal(true);
			}
		} else {
			setCurrentLandmark(landmarks[0]);
			setCurrentIndex(0);
		}
	};

	const handlePreviousCurrentLandmark = () => {
		let index = currentIndex;
		if (index - 1 >= 0) {
			index--;
			setCurrentLandmark(landmarks[index]);
			setCurrentIndex(index);
		} else {
			setCurrentLandmark(landmarks[landmarks.length - 1]);
			setCurrentIndex(landmarks.length - 1);
		}
	};

	const renderSlideshow = () => {
		if (landmarks.length > 0) {
			return (
				<>
					{showModal ? (
						<ReviewModal collection={collection} />
					) : (
						<></>
					)}

					<MapDisplay places={landmarks} isMiniMap={true} />
					<Facts landmark={currentLandmark} />

					<div
						data-uk-slideshow="animation: push"
						className="landmarkshow"
					>
						<div
							className="uk-position-relative uk-visible-toggle uk-light"
							tabIndex="0"
							uk-slideshow="max-height: 833;"
						>
							<ul className="uk-slideshow-items">
								{landmarks &&
									landmarks.map((landmark, index) => (
										<li
											data-uk-slideshow-item={index}
											key={index}
										>
											<img
												src={landmark.image}
												alt={landmark.name}
												data-uk-cover
											/>
										</li>
									))}
							</ul>

							<button
								className="uk-position-center-left uk-position-small uk-hidden-hover uk-slidenav-large"
								href="#"
								data-uk-slidenav-previous
								data-uk-slideshow-item="previous"
								onClick={handlePreviousCurrentLandmark}
							></button>
							<button
								className="uk-position-center-right uk-position-small uk-hidden-hover uk-slidenav-large"
								href="#"
								data-uk-slidenav-next
								data-uk-slideshow-item="next"
								onClick={handleNextCurrentLandmark}
							></button>
						</div>

						<ul className="landmarknav uk-slideshow-nav uk-dotnav uk-margin uk-position-bottom-center"></ul>
					</div>
				</>
			);
		}
	};

	return renderSlideshow();
}

export default Landmarks;
