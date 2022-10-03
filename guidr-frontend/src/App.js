import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Home from "./components/Home";
import Landmarks from "./components/Landmarks";
import Register from './components/Forms/Register';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import Login from './components/Forms/Login';
import DisplayMap from './components/Map';
import AuthContext from './AuthContext';
import CollectionsPage from './components/CollectionsPage';
import Modal from './components/Modal';

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
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/CollectionsPage" exact>
              <CollectionsPage/>
            </Route>
            <Route path="/Landmarks/:id" exact>
              <Landmarks/>
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/testmap" exact>
              <DisplayMap />
            </Route>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route>
              <NotFound />
            <Route path="/collection" exact>
              <Modal/>
            </Route>
          </Switch>
        </Router>	
      </div>
    </AuthContext.Provider>
	);
}

export default App;
