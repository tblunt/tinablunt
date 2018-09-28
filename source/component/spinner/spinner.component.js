import React from 'react';

import styles from './spinner.component.less';

class Spinner extends React.Component {
  
    render() {
        
		return (
			<div className={styles.spinner}><div></div><div></div><div></div><div></div></div>
		);
	}
}

    
export default Spinner;
