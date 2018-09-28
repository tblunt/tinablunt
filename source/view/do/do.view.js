import React from 'react';

import Container from '../../component/container/container.component';
import Spinner from '../../component/spinner/spinner.component';

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
					<div className={styles.spinnerWrapper}>
						<Spinner />
						<p>Tina is typing</p>
					</div>
				</Container>
				
			</div>
		);
	}
}


export default DoView;
