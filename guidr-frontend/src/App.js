import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Register from './components/Forms/Register';
import NavBar from './components/NavBar';
import Login from './components/Forms/Login';
import DisplayMap from './components/Map';
import AuthContext from './AuthContext';

function App() {
	const [user, setUser] = useState(null);

	const login = (token) => {
		const decodedToken = jwt_decode(token);

		const roles = decodedToken.authorities.split(',');

		const userToLogin = {
			username: decodedToken.sub,
			roles,
			token,
			hasRole(role) {
				return this.roles.includes(role);
			},
		};
		setUser(userToLogin);
	};

	const logout = () => {
		setUser(null);
	};

	const auth = {
		user,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={auth}>
			<Router>
				<NavBar />
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/testmap">
						<DisplayMap />
					</Route>
				</Switch>
			</Router>
		</AuthContext.Provider>
	);
}

export default App;
