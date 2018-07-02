import React from 'react';

import Container from '../container/container.component';
import backgroundImageController from '../backgroundImageViewer/backgrundImage.controller';


import NavigationItem from './navigationItem.component';


import styles from './navigation.less';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {};

	}
  
      render() {
        
		return (
			<div className={styles.navigationWrapper}>
				<Container>
					<div className={styles.textContent}>
						<h1 styleName={styles.pageTitle}>Hi!</h1>
						<h3>I’m Tina Blunt, a swedish UX-design-developer</h3>
						<h3><span>and this is</span> what I </h3>
					</div>
					
					<div className={styles.navigation}>
						{backgroundImageController.navigationItems.map((navItem)=>{
							return (<NavigationItem 	
								title={navItem.title}
								color={navItem.color} />);
						})}
						
					</div>
					
				</Container>
				
			</div>
		);
	}
}

    
export default Navigation;
