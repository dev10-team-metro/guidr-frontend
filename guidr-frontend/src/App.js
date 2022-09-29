import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Collections from "./components/Collections";
import Home from "./components/Home";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact>
						<Home/>
					</Route>
					<Route path="/" exact>
						<Collections/>
					</Route>
				</Switch>
			</Router>	
		</div>
	);
}

export default App;
