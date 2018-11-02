import React from 'react';
import { observer } from "mobx-react";

import backgroundImageController from './backgrundImage.controller';
import AmImage from './amImage.component';
import KnowImage from './knowImage.component';
import DoImage from './doImage.component';

import styles from './backgroundImageViewer.component.less';


const BackgroundImageViewer = observer(class BackgroundImageViewer extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {};

  }

  getRenderType() {
    if(!backgroundImageController.highlightedItem.selected) {
      return backgroundImageController.highlightedItem.hovered;
    }

    return backgroundImageController.highlightedItem.selected;
  }
  
  render() {
    let renderType = this.getRenderType();

    let isAnyActive = backgroundImageController.highlightedItem.selected != null;
		let minimized = isAnyActive ? styles.minimized : '';
    
    if(renderType && renderType.title == 'am') {
      return (
        <div className={styles.backgroundWrapper + ' ' +minimized}>
          <div className={styles.faded}>
            <AmImage faded={true}/>
          </div>
          <div className={styles.colored}>
            <AmImage/>
          </div>
        </div>
      );
    }
    else if(renderType && renderType.title == 'know') {
      return (
        <div className={styles.backgroundWrapper + ' ' +minimized}>
         <div className={styles.faded}>
          <KnowImage faded={true} />
         </div>
         <div className={styles.colored}>
          <KnowImage />
         </div>
         
        </div>
      );
    }
    else if(renderType && renderType.title == 'do') {
      return (
        <div className={styles.backgroundWrapper + ' ' +minimized}>
         
          <div className={styles.faded}>
          <DoImage faded={true} />
         </div>
         <div className={styles.colored}>
          <DoImage />
         </div>
        </div>
      );
    }

    return (
      <div></div>
    )
  
  }
});

    
export default BackgroundImageViewer;
