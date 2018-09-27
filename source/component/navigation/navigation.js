import React from 'react';
import { observer } from "mobx-react";

import Container from '../container/container.component';
import backgroundImageController from '../backgroundImageViewer/backgrundImage.controller';

import NavigationItem from './navigationItem.component';


import styles from './navigation.less';

const Navigation = observer(class Navigation extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {};

	}
  
      render() {
		let isAnyActive = backgroundImageController.highlightedItem.selected != null;
		let minimized = isAnyActive ? styles.minimized : '';
        
		return (
			<div className={styles.navigationWrapper + ' ' + minimized}>
				<div className={styles.textContent}>
					<h1 styleName={styles.pageTitle}>Hi!</h1>
					<h3>I’m Tina Blunt, a swedish UX-design-developer</h3>
					<h3><span>and this is</span> what I </h3>
				</div>
				
				<div className={styles.navigation}>
					{backgroundImageController.navigationItems.map((navItem)=>{
						return (
							<NavigationItem 	
								navItem={navItem} />
						);
					})}
					
				</div>
			</div>
		);
	}
});

    
export default Navigation;
