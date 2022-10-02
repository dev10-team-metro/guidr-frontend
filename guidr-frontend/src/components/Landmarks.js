import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Facts from "./Facts"
import "../css/Facts.css"
import bridge1 from "../components/pics/bridge-1.jpg"
import centralpark1 from "../components/pics/centralpark-1.jpg"
import empirestate1 from "../components/pics/empirestate-1.jpg"
import statueofliberty1 from "../components/pics/statueofliberty-1.jpg"
import timessquare1 from "../components/pics/timessquare-1.jpg"

function Landmarks() {
    const [landmarks, setLandmarks] = useState([0]);
    const [currentLandmark, setCurrentLandmark] = useState("");
    const [backgroundImages, setBackgroundImages] = useState([centralpark1,empirestate1,statueofliberty1,bridge1,timessquare1])
    const [backgroundImage, setBackgroundImage] = useState(backgroundImages[0])
    const [currentIndex, setCurrentIndex] = useState(0)


    useEffect(() => {
        fetch("http://localhost:8080/api/guidr/landmark")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setLandmarks(data)
                console.log(data[0])
                setCurrentLandmark(data[0])
            })
            .catch(console.log)
    }, [])

    function handleBackgroundNext(){
        let index = currentIndex
        if(index + 1 < 5){
            setCurrentIndex(index + 1)
            setBackgroundImage(backgroundImages[index + 1])
        } else {
            setCurrentIndex(0)
            setBackgroundImage(backgroundImages[0])
        }
    }

    function handleBackgroundPrevious(){
        let index = currentIndex
        if(index - 1 >= 0){
            setCurrentIndex(index - 1)
            setBackgroundImage(backgroundImages[index - 1])
        } else {
            setCurrentIndex(4)
            setBackgroundImage(backgroundImages[4])
        }
    }




    return (
        <>
        <Facts landmark={currentLandmark}/>
            <div data-uk-slideshow="animation: push" className="landmarkshow">
                <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="0" uk-slideshow="max-height: 833;">
                    <ul className="uk-slideshow-items">
                        {landmarks.map(landmark => (
                            <li data-uk-slideshow-item={landmark.landmarkId - 1}>
                            <img src={backgroundImage} alt={landmark.name} data-uk-cover/>
                        </li>
                        ))}
                    </ul>

                    <a className="uk-position-center-left uk-position-small uk-hidden-hover uk-slidenav-large" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous" 
                    onClick={handleBackgroundPrevious}></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover uk-slidenav-large" href="#" data-uk-slidenav-next data-uk-slideshow-item="next" 
                    onClick={handleBackgroundNext}></a>

                </div>

                <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

            </div>
        </>
    )
}

export default Landmarks