import { style, thresholdScott } from 'd3';
import React from 'react';
var images = require.context('../../../../asset/image', true);

import Paragraph from '../../../component/paragraph/paragraph.component';
import styles from './imagesGrid.less';

class ImagesGrid extends React.Component {
	constructor(props) {
		super(props);

        this.imgBaseUrl = "/asset/image/do/";
        this.state = {
            focusedImg : ""
        };
	}

    renderImages() {
        var src = "";
        var images = [];
        for(var i = this.props.imageSource.startsAt; i <= this.props.imageSource.endsAt; i++) {
            src = this.imgBaseUrl + this.props.imageSource.folderName + "/"+ this.props.imageSource.imagePrefix + i + ".jpg";
            images.push(this.renderImage(src));
        }
        return images;
    }

    renderImage(src) {
        return ( 
            <div className={styles.imageContainer+ ' ' + (this.state.focusedImg == src ? styles.focused:"")} onClick={()=>this.setFocused(src)}>
                <img src={src} />
            </div>
        );
    }

    setFocused(src) {
        if(src != this.state.focusedImg) {
            this.setState({focusedImg: src});
        }
        else {
            this.setState({focusedImg:""})
        }
    }

	render() {
		
		return (
			<Paragraph>
                <div className={styles.imagesGrid}>
                    {this.renderImages()}
                </div>
            </Paragraph>
		);
	}
}


export default ImagesGrid;
