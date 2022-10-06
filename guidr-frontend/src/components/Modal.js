import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
function Modal({id}) {
    const[collection, setCollection] = useState([]);
    const[reviews, setReviews]=useState([]);
    

    useEffect(() => {

        if(id){
        fetch(`http://localhost:8080/api/guidr/collection/${id}`)
            .then(response => {
                if(response.status === 200){
                    return response.json()
                }else{
                    return Promise.reject(`Unexpecter status code: ${response.status}`)
                }
            })
            .then(data=> setCollection(data))
            .catch(console.log)
        }
    }, [id])



    return (
        <>
            

            <div id="modal-full" class="uk-modal-full" data-uk-modal>
                <div class="uk-modal-dialog">
                    <button class="uk-modal-full uk-close-large" type="button" uk-close></button>
                    <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                        <div class="uk-padding-large">
                            <div>
                            
                                
                                <>
                                <h1>{collection.name}</h1>
                                <p>{collection.description}</p>
                                <br/>
                                <p></p>
                                <Link className="uk-button uk-button-primary homebutton" to={`/Landmarks/${collection.collectionId}`}>Begin the tour</Link>
                                <Link className="uk-button uk-button-danger homebutton" to="/CollectionsPage">Go back</Link>
                                </>
                            
                            
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;
