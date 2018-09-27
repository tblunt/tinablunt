import React from 'react';
import { observer } from "mobx-react";

import Navigation from './component/navigation/navigation.js';
import BackgroundImageViewer from './component/backgroundImageViewer/backgroundImageViewer.component';
import backgroundImageController from './component/backgroundImageViewer/backgrundImage.controller';

import AmView from './view/am/am.view.js';
import KnowView from './view/know/know.view.js';
import DoView from './view/do/do.view.js';

import styles from './app.less';


const App = observer(class App_ extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {};
	}

	renderView() {
		let selectedColor = backgroundImageController.highlightedItem.selected.color;
		
		if(backgroundImageController.highlightedItem.selected.title == 'know') {
			return (<KnowView color={selectedColor} />);
		}
		else if(backgroundImageController.highlightedItem.selected.title == 'do') {
			return (<DoView color={selectedColor}/>);
		}
		
		return (<AmView color={selectedColor} />);
		 
	}

	render() {
		let isAnyActive = backgroundImageController.highlightedItem.selected != null;
		let visible = isAnyActive ? styles.visible : '';
	
		return (
			<div className={styles.app}>
				<Navigation></Navigation>
				<div className={styles.routerWrapper + ' ' + visible}>
					{backgroundImageController.highlightedItem.selected && this.renderView()}
				</div>
				<BackgroundImageViewer />
			</div>
		);
	}
});


export default App;
