import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorsDisplay from './ErrorsDisplay';

function Register() {
	const [errors, setErrors] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();

		setErrors(['Registrations are closed right now. Try again later.']);
	};

	return (
		<>
			<div className="uk-container uk-container-expand uk-text-center uk-margin">
				<h2>Register</h2>
			</div>
			<div className="uk-margin uk-flex uk-flex-center">
				<ErrorsDisplay errors={errors} />
			</div>
			<div className="uk-margin uk-margin-top-medium uk-flex uk-flex-center">
				<form
					className="uk-form uk-margin-large uk-grid-medium"
					onSubmit={handleSubmit}
				>
					<div className="uk-grid">
						<div className="uk-width-1-2@s">
							<label
								className="uk-form-label"
								htmlFor="firstName"
							>
								First Name:
							</label>
							<div>
								<input
									className="uk-input"
									id="firstName"
									type="text"
								/>
							</div>
						</div>
						<div className="uk-width-1-2@s">
							<label className="uk-form-label" htmlFor="lastName">
								Last Name:
							</label>
							<div>
								<input
									className="uk-input"
									id="lastName"
									type="text"
								/>
							</div>
						</div>
					</div>
					<div className="uk-margin">
						<label className="uk-form-label" htmlFor="username">
							Username:
						</label>
						<div className="uk-form-controls">
							<input
								className="uk-input uk-form-width-large"
								id="username"
								type="text"
							/>
						</div>
					</div>
					<div className="uk-margin">
						<label className="uk-form-label" htmlFor="email">
							Email:
						</label>
						<div className="uk-form-controls">
							<input
								className="uk-input uk-form-width-large"
								id="email"
								type="email"
								placeholder="example@someemail.com"
							/>
						</div>
					</div>
					<div className="uk-margin">
						<label className="uk-form-label" htmlFor="password">
							Password:
						</label>
						<div className="uk-form-controls">
							<input
								className="uk-input uk-form-width-large"
								id="password"
								type="password"
							/>
						</div>
					</div>
					<div className="uk-margin">
						<label
							className="uk-form-label"
							htmlFor="confirmPassword"
						>
							Confirm Password:
						</label>
						<div className="uk-form-controls">
							<input
								className="uk-input uk-form-width-large"
								id="confirmPassword"
								type="password"
							/>
						</div>
					</div>
					<div className="uk-margin uk-margin-top-medium uk-flex uk-flex-center">
						<button className="uk-button uk-button-default">
							Register
						</button>
					</div>

					<div className="uk-margin uk-margin-top-medium uk-flex uk-flex-center">
						<Link className="" to="/login">
							Already have an account?
						</Link>
					</div>
				</form>
			</div>
		</>
	);
}

export default Register;
