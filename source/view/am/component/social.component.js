import React from 'react';
var images = require.context('../../../../asset/image', true);

import styles from './social.component.less';

import 'whatwg-fetch';


class Social extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			imageData: null
		};

		fetch('https://api.instagram.com/v1/users/33200675/media/recent/?access_token=33200675.054f33d.4d1b7684b9e8404eac2ad2f309d2c77d&count=20', {
			method: 'GET',
			data: {'client_id': '054f33dac6504612a2c40581c0fa2daf'},
			dataType: 'jsonp',
		})
		.then((response) => response.json())
		.then((imageData)=>{
			this.setState({
                imageData: imageData.data
            })
		}).catch((error) => {
			console.log("social fetch error ", error);
		});
	}

	formatDate(dateSek) {
		let date = new Date(dateSek*1000);
		let months = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
		return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
	}

	
	render() {
		
		return (
            <div className={styles.socialWrapper}>
                <h3>@tinablunt:</h3>
                <div className={styles.imagesWrapper}>
                    {this.state.imageData && this.state.imageData.map((img)=>{
                        return (
                            <div className={styles.imageWrapper}>
                                <img src={img.images.standard_resolution.url} />
								<div className={styles.caption}>
								<p className={styles.date}>{this.formatDate(img.created_time)}</p>
								{
									img.caption && <p>{img.caption.text}</p>
								}
								</div>
								
                            </div>
                        );
                    })}
                </div>
            </div>
		);
	}
}


export default Social;
