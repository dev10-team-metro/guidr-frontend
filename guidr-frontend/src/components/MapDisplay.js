/*global google*/
import {
	useLoadScript,
	GoogleMap,
	MarkerF,
	Polyline,
} from '@react-google-maps/api';
import { useCallback, useEffect, useRef, useState } from 'react';
import mapStyles from './MapStyles';

const libraries = ['places'];
const mapContainerStyle = {
	width: '100%',
	height: '100%',
};
const mapOptions = {
	styles: mapStyles,
	disableDefaultUI: true,
};

const polylineOptions = {
	geodesic: true,
	strokeColor: '#000000',
	strokeOpacity: 1.0,
	strokeWeight: 4,
	zIndex: 1,
};

export default function MapDisplay({ places, isMiniMap }) {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY,
		libraries,
	});
	const [markers, setMarkers] = useState([]);

	const mapRef = useRef();

	const onMapLoad = useCallback(
		(map) => {
			if (map && markers.length > 0) {
				var bounds = new google.maps.LatLngBounds();
				if (markers[0].lat !== null) {
					for (let i = 0; i < markers.length; i++) {
						bounds.extend(
							new window.google.maps.LatLng(
								markers[i].lat,
								markers[i].lng
							)
						);
					}
				}
				map.fitBounds(bounds);
				mapRef.current = map;
			}
		},
		[markers]
	);

	useEffect(() => {
		let newMarkers;

		if (places && places.length > 0) {
			newMarkers = places.map((place) => ({
				lat:
					place.address !== undefined ? place.address.latitude : null,
				lng:
					place.address !== undefined
						? place.address.longitude
						: null,
			}));
			setMarkers(newMarkers);
		}
	}, [places]);

	if (loadError) return 'Error Loading Maps';
	if (!isLoaded) return 'Loading';

	return (
		<div className={isMiniMap ? 'mini-map' : 'modal-map'}>
			<GoogleMap
				ref={mapRef}
				mapContainerStyle={mapContainerStyle}
				zoom={13}
				center={{ lat: 40.743118, lng: -73.9917 }}
				// center={markers[0]}
				options={mapOptions}
				// onLoad={onMapLoad}
			>
				{markers.length > 0 &&
					markers.map((marker, index) => (
						<MarkerF
							key={index}
							position={{ lat: marker.lat, lng: marker.lng }}
						/>
					))}
				{markers.length > 0 && (
					<Polyline
						path={markers.sort(
							(marker1, marker2) => marker1.lat > marker2.lat
						)}
						options={polylineOptions}
					/>
				)}
			</GoogleMap>
		</div>
	);
}
