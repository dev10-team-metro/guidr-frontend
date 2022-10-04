import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/CollectionModal.css"

export default function ReviewModal({collection}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const StarRating = () => {
       
    }

    return (
        <>
            <button  className="uk-button uk-button-default endbutton" type="button" data-uk-toggle="target: #collectionmodal">End Tour</button>
                <div id="collectionmodal" className="uk-flex-top" data-uk-modal>
                    <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical ">
                        <div className="uk-grid-collapse uk-child-width-2-2@s uk-flex-middle modalbox" uk-grid>
                            <h1 className='title'>Thanks for touring {collection.name}!</h1>
                            <form>
                                <p className='ratingtext'>Please rate this tour:</p>

                                <div className="star-rating">
                                    {[...Array(5)].map((star, index) => {
                                        index += 1;
                                        return (
                                            <button
                                            type="button"
                                                key={index}
                                                className={index <= ((rating && hover) || rating) ? "on" : "off"}
                                                onClick={() => setRating(index)}
                                                onMouseEnter={() => setHover(index)}
                                                onMouseLeave={() => setHover(rating)}
                                                >
                                                <span className="star">&#9733;</span>
                                            </button>
                                        );
                                    })}
                                </div>
                                    <br></br>
                                    <div>
                                        <textarea className="textbox" type="text" placeholder="Leave a comment"></textarea>
                                    </div>
                            </form>
                            <br></br>
                            <div className='modalbuttons'>
                            <Link className="uk-button uk-button-default submit" to="/CollectionsPage">Submit</Link>
                            <Link className="uk-button uk-button-default cancel">Nevermind</Link>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}