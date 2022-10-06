import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../AuthContext';
import GuidrLogo2 from '../components/pics/GuidrLogo2.PNG'
import "../css/Navbar.css"

function Navbar() {
	const auth = useContext(AuthContext);

	return (
		<div className="uk-navbar-container">
			<nav className="uk-navbar">
				<div className="uk-navbar-left uk-margin-medium-left">
					<Link className="uk-navbar-item uk-logo guidrlogo" to="/">
						<img src={GuidrLogo2}></img>
					</Link>
				</div>
				<div
					className="uk-navbar-right uk-margin-medium-right"
					data-uk-navbar="mode: click"
				>
					<ul className="uk-navbar-nav">
						<li>
							<Link className="" to="/">
								Home
							</Link>
						</li>
						<li>
							<Link className="" to="/collectionsPage">
								Collections
							</Link>
						</li>
						<li>
							{auth.user && (
								<>
									<Link to="">
										<button className="uk-button-default uk-padding-small">
											<span uk-icon="icon: user"></span>
										</button>
									</Link>
									<div className="uk-navbar-dropdown">
										<ul className="uk-nav uk-navbar-dropdown-nav">
											<li className="uk-margin">
												Hello, {auth.user.username}
											</li>
											<li>
												<button
													className="uk-button uk-button-default uk-button-small
													"
													onClick={() =>
														auth.logout()
													}
												>
													Logout
												</button>
											</li>
										</ul>
									</div>
								</>
							)}
							{!auth.user && (
								<Link className="" to="/login">
									<button className="uk-button uk-button-default">
										Login
									</button>
								</Link>
							)}
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
