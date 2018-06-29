import React from 'react';

import Container from '../../component/container/container.component';

import styles from './start.view.less';


class StartView extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {};

	}
	
	
	render() {
		
		return (
			<Container>
				<h5>start view</h5>
			</Container>
		);
	}
}


export default StartView;
