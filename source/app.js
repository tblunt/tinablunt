import React, {ReactDOM} from 'react';
import { observer } from "mobx-react";
import ReactGA from 'react-ga'; 

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

		this.state = {
            isScrollOnTop: true,
			isScrollOnBottom: false
		}
		
		ReactGA.initialize('UA-43724495-1');
		ReactGA.pageview(window.location.pathname);

        this.setScrollableContentEvents = this.setScrollableContentEvents.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
		
	}

	componentDidUpdate() {
		let selectedTitle = backgroundImageController.highlightedItem.selected ? backgroundImageController.highlightedItem.selected.title : null;
		let isViewChanged = selectedTitle && selectedTitle != this.previousViewTitle;
		
        if(isViewChanged) {
			this.scrollableElement.scrollTop = 0; 
		}

		this.previousViewTitle = selectedTitle;
    }

	setScrollableContentEvents(elem) {
        this.scrollableElement = elem;
        elem.addEventListener('scroll', this.handleScroll);
	}
	
	handleScroll(event) {
       
        if(event && event.target) {
            let visibleThreshold = 30;
            let scrollPos = event.target.scrollTop;
            let elemHeight = event.target.clientHeight;
            let scrollContentHeight = event.target.scrollHeight;
            let maxScrollDistance = scrollContentHeight - elemHeight;

            this.setState({
                isScrollOnTop: scrollPos < visibleThreshold,
                isScrollOnBottom: scrollPos > (maxScrollDistance - visibleThreshold)
            });
        }
        
	}
	
	componentWillUnmount() {
        this.scrollableElement.removeEventListener('scroll', this.handleScroll);
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
		let topBorder = this.state.isScrollOnTop ? ' ': styles.topBorder;

		return (
			<div className={styles.app}>
				<Navigation></Navigation>
				{!this.state.isScrollOnTop && <div className={styles.topFader}></div>}
				<div ref={this.setScrollableContentEvents} className={styles.routerWrapper + ' ' + visible + ' ' + topBorder}>
					{backgroundImageController.highlightedItem.selected && this.renderView()}
				</div>
				<BackgroundImageViewer />
			</div>
		);
	}
});


export default App;
