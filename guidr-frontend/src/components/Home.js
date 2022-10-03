import "../css/Home.css"
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div className="container">
                <div className="uk-background-cover">
                    <div className="center">
                        <h1 className="hometext">Tour the world from the comfort of your home</h1>
                        <Link className="uk-button uk-button-default homebutton" to="/CollectionsPage">Get Started</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;