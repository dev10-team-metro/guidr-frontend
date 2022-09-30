import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Collections from "./components/Collections";
import Home from "./components/Home";
import Landmarks from "./components/Landmarks";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact>
						<Home/>
					</Route>
					<Route path="/Collections" exact>
						<Collections/>
					</Route>
					<Route path="/Landmarks" exact>
						<Landmarks/>
					</Route>
				</Switch>
			</Router>	
		</div>
	);
}

export default App;
