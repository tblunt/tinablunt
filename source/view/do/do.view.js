import React from 'react';

import Container from '../../component/container/container.component';

import styles from './do.view.less';


class DoView extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {};

	}
	
	
	render() {
		
		return (
			<div>
				<Container>
					<h1>Do</h1>
				</Container>
				
			</div>
		);
	}
}


export default DoView;
