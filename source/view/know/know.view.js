import React from 'react';

import Container from '../../component/container/container.component';

import styles from './know.view.less';


class KnowView extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {};

	}
	
	
	render() {
		
		return (
			<div>
				<Container>
					<h1>Know</h1>
				</Container>
				
			</div>
		);
	}
}


export default KnowView;
