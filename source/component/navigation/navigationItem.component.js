import React from 'react';
import { observer } from "mobx-react";

import backgroundImageController from '../backgroundImageViewer/backgrundImage.controller';
import T from '../../service/translation.service';

import styles from './navigationItem.component.less';

const NavigationItem = observer(class NavigationItem extends React.Component {

    setColor() {
        switch(this.props.navItem.color){
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
        backgroundImageController.setSelected(this.props.navItem);
    }
  
    render() {
        let locale = T.locale.code;
        let colorStyle = this.setColor();
        let selectedStyle = (backgroundImageController.highlightedItem.selected && backgroundImageController.highlightedItem.selected.title == this.props.navItem.title) ? styles.active: '';

        let isAnyActive = backgroundImageController.highlightedItem.selected != null;
		let minimized = isAnyActive ? styles.minimized : '';
       
		return (
            <div 
                className={styles.menuItem + ' ' + colorStyle + ' '+ selectedStyle + ' ' + minimized} 
                onClick={()=>this.handleClick()}
                onMouseEnter={()=>backgroundImageController.setHovered(this.props.navItem)} 
                onMouseLeave={()=>backgroundImageController.setHovered(null)} >
                <h3 className={styles.title}>{T.t(this.props.navItem.title)}</h3>
                <div className={styles.lineWrapper}>
                    <div className={styles.menuItemCircle}></div>
                    <div className={styles.menuItemHoverCircle}></div>
                    <div className={styles.line}></div>
                </div>
            </div>
		);
	}
})

    
export default NavigationItem;
