import React from 'react';

import Container from '../container/container.component';

import styles from './navigationItem.component.less';

class NavigationItem extends React.Component {

    setColor() {
        switch(this.props.color ){
            case 'yellow':
                return styles.yellow;
                break;
            case 'red':
                return styles.red;
                break;
            case 'green':
                return styles.green;
                break;
        }

        return styles.yellow;
    }
  
    render() {
        let colorStyle = this.setColor();
       
		return (
			<div className={styles.menuItem + ' ' + colorStyle}>
                <h3 className={styles.title}>{this.props.title}</h3>
                <div className={styles.lineWrapper}>
                    <div className={styles.menuItemCircle}></div>
                    <div className={styles.menuItemHoverCircle}></div>
                    <div className={styles.line}></div>
                </div>
            </div>
		);
	}
}

    
export default NavigationItem;
