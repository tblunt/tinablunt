import React from 'react';

import Container from '../container/container.component';

import NavigationItem from './navigationItem.component';

import styles from './navigation.less';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {};

	}
  
      render() {
        
		return (
			<Container>
				<h1 styleName={styles.pageTitle}>Hi!</h1>
				<p>I’m Tina Blunt, a swedish UX-design-developer</p>
				<p><span>and this is</span> what I </p>
				<div className={styles.navigation}>
					<NavigationItem 	
						title="am"
						color="yellow" />
					<NavigationItem 
						title="know"
						color="red" />
					<NavigationItem 
						title="do"
						color="green" />
				</div>
				
			</Container>
		);
	}
}

    
export default Navigation;
