import React from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import './App.css';

const App = (props) => (
	<Router>
		<div>
			<Route
				path='/:page'
				render={({match}) => (
					<h1>
						PAGE: {match.params.page || 'Home'}
					</h1>
				)}
			/>
		</div>
	</Router>
);

export default App;