import React from 'react';

import Container from '../container/container.component';
import backgroundImageController from '../backgroundImageViewer/backgrundImage.controller';

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

    handleClick() {
        backgroundImageController.setSelected(this.props.title);
    }
  
    render() {
        let colorStyle = this.setColor();
        let selectedStyle = (backgroundImageController.highlightedItem.selected == this.props.title)? styles.active: '';

        let isAnyActive = backgroundImageController.highlightedItem.selected != null;
		let minimized = isAnyActive ? styles.minimized : '';
       
		return (
            <div 
                className={styles.menuItem + ' ' + colorStyle + ' '+ selectedStyle + ' ' + minimized} 
                onClick={()=>this.handleClick()}
                onMouseEnter={()=>backgroundImageController.setHovered(this.props.title)} 
                onMouseLeave={()=>backgroundImageController.setHovered(null)} >

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
