import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import Facts from "./Facts"
import "../css/Facts.css"

function Landmarks() {
    const [landmarks, setLandmarks] = useState([0]);
    const [currentLandmark, setCurrentLandmark] = useState("");
    const { id } = useParams();


    useEffect(() => {
        // if (id) {
        // fetch(`http://localhost:8080/api/guidr/collection/${id}`)
        fetch(`http://localhost:8080/api/guidr/landmark`)
            .then(response => {
                // if (response.status === 200) {
                    return response.json()
                // } else {
                //     return Promise.reject(`Unexpected status code: ${response.status}`)
                    
                // }
            })
            .then(data => {
                console.log(data)
                setLandmarks(data)
                setCurrentLandmark(data[0])
                // setLandmarks(data.landmarks)
                // console.log(data.landmarks[0])
                // setCurrentLandmark(data.landmarks[0])
            })
            .catch(console.log)
            },[])
    

    const renderSlideshow = () => {
        if (landmarks.length > 0) {
            return (
                <>
                <Facts landmark={currentLandmark}/>
                    <div data-uk-slideshow="animation: push" className="landmarkshow">
                        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="0" uk-slideshow="max-height: 833;">
                            <ul className="uk-slideshow-items">
                                {landmarks && (landmarks.map((landmark, index) => (
                                    // console.log(index)
                                    <li data-uk-slideshow-item={index}>
                                    <img src={landmark.image} alt={landmark.name} data-uk-cover/>
                                </li>
                                )))}
                            </ul>
        
                            <a className="uk-position-center-left uk-position-small uk-hidden-hover uk-slidenav-large" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
                            <a className="uk-position-center-right uk-position-small uk-hidden-hover uk-slidenav-large" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>
        
                        </div>
        
                        <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
        
                    </div>
                </>
            )
        }
    }
    

    return renderSlideshow()
}

export default Landmarks