import React from 'react';

import Container from '../../component/container/container.component';
import Paragraph from '../../component/paragraph/paragraph.component';

import styles from './know.view.less';


class KnowView extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {};

	
	}
	
	
	render() {
		
		return (
			<div className={styles.knowView}>
				<Container>
					<Paragraph>
						<h3>Siemens <span>april 2018 - ongoing</span></h3>
						<p>UX-designer</p>
					</Paragraph>
					<Paragraph>
						<h3>Finderoo <span>january 2017 - mars 2018</span></h3>
						<p>Interaction designer and front-end app and web developer</p>
					</Paragraph>
					<Paragraph>
						<h3>DIPS <span>january 2017 - april 2017</span></h3>
						<p>Interaction designer and prototype developer</p>
					</Paragraph>
					<Paragraph>
						<h3>Swedish correctional service (Kriminalvården) <br></br><span>february 2016 - december 2016</span></h3>
						<p>Concept and UX-designer</p>
					</Paragraph>
					<Paragraph>
						<h3>East sweden business cluster (Östsvenska handelskammaren) <br></br><span>january 2016 - december 2016</span></h3>
						<p>Technical project manager and scrum master</p>
					</Paragraph>
					<Paragraph>
						<h3>BillerudKorsnäs <span>august 2015 - december 2016</span></h3>
						<p>Interaction designer and front-end developer</p>
					</Paragraph>
					<Paragraph>
						<h3>Wide ideas <span>january 2016 - may 2016</span></h3>
						<p>Concept and interaction designer</p>
					</Paragraph>
					<Paragraph>
						<h3>Åre Destination <span>january 2015 - july 2015</span></h3>
						<p>Front end developer</p>
					</Paragraph>
					<Paragraph>
						<h3>SAAB <span>august 2014 - february 2015</span></h3>
						<p>Interaction designer and front-end developer</p>
					</Paragraph>
					<Paragraph>
						<h3>Channelsoft <span>mars 2013 - november 2013</span></h3>
						<p>Front-end developer</p>
					</Paragraph>
					<Paragraph>
						<h3>Schneider electric <span>august 2012 - january 2013</span></h3>
						<p>Front-end developer</p>
					</Paragraph>
					<Paragraph>
						<h3>Kronoberg county <span>june 2012 - september 2012</span></h3>
						<p>Front-end developer</p>
					</Paragraph>
					<Paragraph>
						<h3>Scania <span>mars 2012 - june 2012</span></h3>
						<p>Front-end developer</p>
					</Paragraph>
				</Container>
				
			</div>
		);
	}
}


export default KnowView;
