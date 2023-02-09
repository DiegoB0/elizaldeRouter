import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import dwight from './images/dwight.jpeg';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<h1>Home</h1>
					</Route>

					<Route path="/nombre">
						<h1>Diego Elizalde</h1>
					</Route>

					<Route path="/utd">
						<h1>Universidad Tecnologica de Durango</h1>
					</Route>

					<Route path="/carrera">
						<h1>Desarrollo de Software Multiplataforma</h1>
					</Route>

					<Route path="/logo">
						<img
							src="https://i0.wp.com/utd.edu.mx/wp-content/uploads/2022/06/LOGO-UTD-NUEVO-2022_solo-01.png?fit=1024%2C387&ssl=1"
							alt=""
						/>
					</Route>

					<Route path="/foto">
						<img src={dwight} alt="" />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
