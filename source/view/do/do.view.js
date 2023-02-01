import React from 'react';
var images = require.context('../../../asset/image', true);

import T from '../../service/translation.service';

import Container from '../../component/container/container.component';
import Paragraph from '../../component/paragraph/paragraph.component';

import ImagesGrid from './component/imagesGrid';
import styles from './do.view.less';

class DoView extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			selectedFilter:0
		};

		this.imageSources = {
			painting: {
				folderName: "painting",
				imagePrefix: "do",
				startsAt: 1,
				endsAt: 38 
			},
			sewing: {
				folderName: "sewing",
				imagePrefix: "s",
				startsAt: 1,
				endsAt:  36
			},
			photo: {
				folderName: "photo",
				imagePrefix: "p",
				startsAt: 0,
				endsAt: 43
			},
			work: {
				folderName: "work",
				imagePrefix: "w",
				startsAt: 1,
				endsAt: 8
			}
		}

	}

	filterImages(index) {
		this.setState({
			selectedFilter:index
		});
	}
	
	
	render() {
		
		return (
			<div className={styles.doView}>
				<div className={styles.buttonGroup}>
					<div onClick={()=>this.filterImages(0)} className={(this.state.selectedFilter == 0 ? styles.active: '')}>{T.t("Paint")}</div>
					<div onClick={()=>this.filterImages(1)} className={(this.state.selectedFilter == 1 ? styles.active: '')}>{T.t("Sew")}</div>
					<div onClick={()=>this.filterImages(2)} className={(this.state.selectedFilter == 2 ? styles.active: '')}>{T.t("Photo")}</div>
					<div onClick={()=>this.filterImages(3)} className={(this.state.selectedFilter == 3 ? styles.active: '')}>{T.t("Work")}</div>
				</div>
				<Container>
					{
						this.state.selectedFilter === 0 && <ImagesGrid imageSource={this.imageSources.painting}></ImagesGrid>
						|| this.state.selectedFilter === 1 && <ImagesGrid imageSource={this.imageSources.sewing}></ImagesGrid> 
						|| this.state.selectedFilter === 2 && <ImagesGrid imageSource={this.imageSources.photo}></ImagesGrid>
						|| this.state.selectedFilter === 3 && <ImagesGrid imageSource={this.imageSources.work}></ImagesGrid>
					}
				</Container>
		
			</div>
		);
	}
}


export default DoView;
