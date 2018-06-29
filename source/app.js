import React from 'react';
import { observer } from "mobx-react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import scrollHelper from './component/navigation/scrollHelper.js';
import Navigation from './component/navigation/navigation.js';
import StartView from './view/start/start.view.js';

import styles from './app.less';


const App = observer(class App_ extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {};
	}

	render() {

		return (
			<div>
				<Navigation></Navigation>
				<Router>
					<Route path='/' 
						component={StartView}
					/>
				</Router>
			</div>
		);
	}
});


export default App;
