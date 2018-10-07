import React from 'react';

import styles from './paragraph.component.less';

class Paragraph extends React.Component {
  
    render() {
        
		return (
			<div className={styles.paragraph}>
                {this.props.children}
			</div>
		);
	}
}

    
export default Paragraph;
