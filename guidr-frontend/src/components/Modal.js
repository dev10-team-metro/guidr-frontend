import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import MapDisplay from './MapDisplay';
import "../css/PreviewModal.css"

function Modal({ id }) {
    const [collection, setCollection] = useState([]);
    const [review, setReview] = useState([]);
    const [landmarks, setLandmarks] = useState([0]);
    const [collections, setCollections] = useState([]);


    useEffect(() => {

        if (id) {
            fetch(`http://localhost:8080/api/guidr/collection/${id}`)
                .then(response => {
                    if (response.status === 200) {
                        return response.json()
                    } else {
                        return Promise.reject(`Unexpecter status code: ${response.status}`)
                    }
                })

                .then(data => {
                    console.log(data)
                    setCollection(data)
                })
                .catch(console.log)
        }
    }, [id])



    return (
        <>
            <div id="modal-full" class="uk-modal-full previewmodal" data-uk-modal>
                <div class="uk-modal-dialog">
                    <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" data-uk-grid>
                        <div class="uk-padding-large">
                            <div>

                                <>
                                    <h1>{collection.name}</h1>
                                    <p>{collection.description}</p>
                                    
                                    {/* {collection && collection.reviews.map(review => (
                                        <div key={review.reviewId}>
                                            <p>Hiiiii</p>
                                    </div>
                                    ))} */}

                                    {collections.map(collection => (
                                        <div key={review.reviewId}>
                                           <div class="uk-card uk-card-default uk-card-body tour">
										<h3 className="cardText">{collection.reviews}
                                        {review.description}</h3>
									</div>
                                    </div> 
                                    ))}

                           
                                    
                                    
                                    <div className='previewbuttons'>
                                    <Link className="uk-button uk-button-primary begin" to={`/Landmarks/${collection.collectionId}`}>Begin the tour</Link>
                                    <Link className="uk-button uk-button-danger goback" to="/CollectionsPage">Go back</Link>
                                </div>
                                </>

                            </div>
                        </div>
                        {collection === undefined ? <></> : (<div>
                            <MapDisplay places={collection.landmarks} />
                        </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;
