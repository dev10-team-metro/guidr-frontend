import { useState, useEffect, useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import "../css/CollectionModal.css"
import AuthContext from '../AuthContext';

export default function ReviewModal({collection}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState("");
    const [errors, setErrors] = useState([]);
    const { id } = useParams();
    const auth = useContext(AuthContext);

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:8080/api/guidr/review/${id}`)
                .then(response => {
                    if (response.status === 200) {
                        return response.json()
                    } else {
                        return Promise.reject(`Unexpected status code: ${response.status}`)
                    }
                })
                .then(data => setReview(data))
                .catch(console.log)
        }
    }, [id])

    const history = useHistory();

    const handleChange = (event) => {
        const newReview = { ...review }

        newReview[event.target.name] = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        console.log(newReview);
        setReview(newReview);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addReview();
    }

const addReview = () => {
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth.user.token}`
        },
        body: JSON.stringify(review)
    }

    fetch(`http://localhost:8080/api/guidr/review`, init)
        .then(response => {
            if (response.status === 201 || response.status === 400) {
                return response.json()
            }
            else {
                return Promise.reject.apply(`Unexpected status code: ${response.status}`)
            }
        })
        .then(data => {
            if (data.reviewId) {
                history.push("/review")
            } else {
                setErrors(data);
            }
        })
        .catch(console.log);
}

    return (
        <>
            <button  className="uk-button uk-button-default endbutton" type="button" data-uk-toggle="target: #collectionmodal">End Tour</button>
                <div id="collectionmodal" className="uk-flex-top" data-uk-modal>
                    <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical ">
                        <div className="uk-grid-collapse uk-child-width-2-2@s uk-flex-middle modalbox" uk-grid>
                            <h1 className='title'>Thanks for touring {collection.name}!</h1>
                            <form onSubmit={handleSubmit}>
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
                                        <textarea className="textbox" type="text" placeholder="Leave a comment" onChange={handleChange}></textarea>
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