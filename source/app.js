import React from 'react';
import { observer } from "mobx-react";
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import scrollHelper from './component/navigation/scrollHelper.js';
import Navigation from './component/navigation/navigation.js';
import StartView from './view/start/start.view.js';

import styles from './app.less';


const App = observer(class App_ extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {};
	}


	onViewChange() {
		scrollHelper.scrollable.scrollTo(0, 0);
		this.setState({ currentLocation:browserHistory.getCurrentLocation().pathname });
	}
	
	
	render() {
		const routes = (
			<div>
				{/* Main views */}
				<Route path='/' 
					component={StartView}
					history={browserHistory} 
				/>

			</div>
		);
		

		return (
			<Navigation 
				history={browserHistory}
				activeViewPath={this.state.currentLocation}
			>
				<Router 
					history={browserHistory}
					onUpdate={() => this.onViewChange()}
					routes={routes}
				>
				</Router>

			</Navigation>
		);
	}
});


export default App;
