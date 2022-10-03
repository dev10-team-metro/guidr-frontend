import {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
function Modal() {
    const[collections, setCollections] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        if(id)
        fetch("http://localhost8080/api/guidr/collection")
        .then(response => response.json())
        .then(data => setCollections(data))
        .catch(console.log)
    }, [])

    return (
        <>
            <button className="uk-button uk-button-default uk-button-large-center" type="button" data-uk-toggle="target: #modal-full">Collection 1</button>

            <div id="modal-full" class="uk-modal-full" data-uk-modal>
                <div class="uk-modal-dialog">
                    <button class="uk-modal-full uk-close-large" type="button" uk-close></button>
                    <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                        <h1>Collection</h1>
                        <p>descritpiemdsdfsdf</p>
                        <br/>
                        <p className="review">Reviev
                        <br/>
                        rating
                        </p>

                        <div class="uk-padding-large">
                            {collections.map(collection => (
                                <>
                                <h1>{collection.description}</h1>
                                <p>{collection.description}</p>
                                <br/>
                                <p>{collection.review}</p>
                                <p>{collection.rating}</p>
                                </>
                            
                            ))}
                            
                            <Link className="uk-button uk-button-primary homebutton" to="/Lanmark">Begin the tour</Link>
                            <Link className="uk-button uk-button-danger homebutton" to="/CollectionsPage">Go back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;