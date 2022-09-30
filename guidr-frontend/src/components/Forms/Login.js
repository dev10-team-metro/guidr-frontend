import { Link, useHistory } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import AuthContext from '../../AuthContext';
import ErrorsDisplay from './ErrorsDisplay';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);

	const history = useHistory();

	const auth = useContext(AuthContext);

	const url = 'http://localhost:8080/api/guidr/authenticate';

	const handleSubmit = (e) => {
		e.preventDefault();

		const authAttempt = {
			username,
			password,
		};

		const init = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(authAttempt),
		};

		fetch(url, init)
			.then((response) => {
				if (response.status === 200) {
					return response.json();
				} else if (response.status === 403) {
					return null;
				} else {
					return Promise.reject(
						`Unexpected status code: ${response.status}`
					);
				}
			})
			.then((data) => {
				if (data) {
					auth.login(data.jwt_token);
					history.push('/collections');
				} else {
					setErrors([
						'Login Failed. Invalid Username and/or Password',
					]);
				}
			})
			.catch(console.log);
	};

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	return (
		<>
			<div className="uk-container uk-container-expand uk-text-center uk-margin">
				<h2>Login</h2>
			</div>
			<div className="uk-margin uk-flex uk-flex-center">
				<ErrorsDisplay errors={errors} />
			</div>
			<div className="uk-margin uk-margin-top-medium uk-flex uk-flex-center">
				<form
					className="uk-form-vertical uk-margin-large"
					onSubmit={handleSubmit}
				>
					<div className="uk-margin">
						<label className="uk-form-label" htmlFor="username">
							Username:
						</label>
						<div className="uk-form-controls">
							<div className="uk-inline">
								<span
									className="uk-form-icon uk-form-icon-flip"
									uk-icon="icon: user"
								></span>
								<input
									className="uk-input uk-form-width-large"
									id="username"
									type="text"
									onChange={handleUsernameChange}
									value={username}
								/>
							</div>
						</div>
					</div>
					<div className="uk-margin">
						<label className="uk-form-label" htmlFor="password">
							Password:
						</label>
						<div className="uk-form-controls">
							<div className="uk-inline">
								<span
									className="uk-form-icon uk-form-icon-flip"
									uk-icon="icon: lock"
								></span>
								<input
									className="uk-input uk-form-width-large"
									id="password"
									type="password"
									value={password}
									onChange={handlePasswordChange}
								/>
							</div>
						</div>
					</div>
					<div className="uk-margin uk-margin-top-medium uk-flex uk-flex-center">
						<button className="uk-button uk-button-default">
							Login
						</button>
					</div>

					<div className="uk-margin uk-margin-top-medium uk-flex uk-flex-center">
						<Link className="" to="/register">
							Don't have an account?
						</Link>
					</div>
				</form>
			</div>
		</>
	);
}

export default Login;
