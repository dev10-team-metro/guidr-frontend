import { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function MapDisplay() {
	const mapContainer = useRef(null);
	const map = useRef(null);

	const [lng, setLng] = useState(-70.9);
	const [lat, setLat] = useState(42.35);
	const [zoom, setZoom] = useState(9);
	const [landmarks, setLandmarks] = useState([]);

	useEffect(() => {
		if (map.current) return;
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lng, lat],
			zoom: zoom,
		});
	});

	useEffect(() => {
		fetch('http://localhost:8080/api/guidr/landmark/1')
			.then((response) => response.json())
			.then((data) => setLandmarks(data))
			.catch(console.log);
	}, []);

	return (
		<>
			<div
				ref={mapContainer}
				className="map-container"
				style={{ height: '400px' }}
			/>
		</>
	);
}
