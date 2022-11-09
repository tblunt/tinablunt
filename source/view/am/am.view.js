import React from 'react';
var images = require.context('../../../asset/image', true);

import Container from '../../component/container/container.component';
import Paragraph from '../../component/paragraph/paragraph.component';
import LanguageChanger from '../../component/languageChanger/languageChanger.component';
import BackgroundImageViewer from '../../component/backgroundImageViewer/backgrundImage.controller';

import T from '../../service/translation.service';

import Social from './component/social.component';

import styles from './am.view.less';



class AmView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			imgPath: null,
		};

		this.randomizer = 1;
		let img1 = images(`./tinaCircle2.png`);
		let img2 = images(`./tinaCircle3.png`);
		
		this.images = [img1, img2];

		this.setRandomizer = this.setRandomizer.bind(this);

	}

	setRandomizer() {
		this.randomizer = Math.floor(Math.random() * this.images.length);
		
		this.setState({
			imgPath : this.images[this.randomizer]
		});
	}

	goToDo() {
		BackgroundImageViewer.setSelected({
			title: 'do',
			color: 'green'
		});
	}

	
	render() {
		
		return (
			<div>
				<Container color={this.props.color}>
					<div className={styles.imagesWrapper} onMouseEnter={()=>this.setRandomizer()}>
						<img src={"/asset/image/tinaCircle.png"} />	
						<img className={styles.hoverImage} src={this.state.imgPath} />	
					</div>
					<div className={styles.centered}>
						<a href="mailto:tinablunt@gmail.com">tinablunt@gmail.com</a>
						<LanguageChanger></LanguageChanger>
					</div>
					<Paragraph>
						<h3>{T.t('I am')}</h3>
						<p>{T.t('an outgoing and driven lady in my thirties. I am born and raised in Stockholm, but my current home is in Norrköping (and has been for more than ten years now).')}</p>
					</Paragraph>
					<Paragraph>
						<h3>{T.t("I grew up")}</h3>
						<p>{T.t("in a basketball family and ended up dedicating 12 years and a LOT of time to the game (until I injured my knee for the last time). I think my basketball career built the ground I stand on today. Mostly because it didn't go as I planned. My own mind and the team dynamics came in the way of victory so many times. It taught me a lot. ")}</p>
					</Paragraph>
					<Paragraph>
						<h3>{T.t('I studied')}</h3>
						<p>{T.t('master of science in media technology where my main focus was software development, design and information visualization.')}</p>
					</Paragraph>
					<Paragraph>
						<h3>{T.t('I started working')}</h3>
						<p>{T.t('in the advertising industry as a front-end devoloper with business to business compaign sites and apps. After that I became an IT consultant and started working on a lot more business critical systems and realized the power and importans of great UX and all its processes and tools.')}</p>
					</Paragraph>
					<Paragraph>
                        <h3>{T.t('After a while I')}</h3>
                        <p>{T.t('started working as a technical UX-designer. Mainly with interaction design and prototype development, but I have a tendency to demand that projects apply a broader spectrum of the design process')} <span className={styles.dolink} onClick={()=>this.goToDo()}>{T.t('(read more), ')}</span> {T.t('which often lands on my table to execute. This forced me to learn and apply tools and processes earlier in the product development lifetime, as well as integrating them into the agile process.')} </p>
                    </Paragraph>
 					<Paragraph>
                        <h3>{T.t('I now work')}</h3>
                        <p>{T.t("as UX-lead at an IT consultant company in Norrköping. I'm still getting my UX-hands dirty in customer projects but my main mission is to build the UX-strategy, UX-processes and the team behind it.")}</p>
                    </Paragraph>
					<Paragraph>
						<h3>{T.t("When I don't work")}</h3>
						<p>{T.t("I spend a lot of time sewing clothes, watching series, rock climbing and drinking beer with my friends and family.")}</p>
					</Paragraph>
				
				</Container>
				
				{/* <Social></Social> */}
			</div>
		);
	}
}


export default AmView;
