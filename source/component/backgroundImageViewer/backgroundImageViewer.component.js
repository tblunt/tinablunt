import React from 'react';
import { observer } from "mobx-react";

import backgroundImageController from './backgrundImage.controller';
import AmImage from './amImage.component';
import KnowImage from './knowImage.component';

import styles from './backgroundImageViewer.component.less';


const BackgroundImageViewer = observer(class BackgroundImageViewer extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {};

  }
  
    render() {
      let renderType = backgroundImageController.hoveredItem.title;
      if(renderType == 'am') {
        return (
          <AmImage />
        );
      }
      else if(renderType == 'know') {
        return (
          <KnowImage />
        );
      }

      return (
        <div></div>
      )
     
    }s
});

    
export default BackgroundImageViewer;
