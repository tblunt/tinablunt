import React from 'react';

import Container from '../../component/container/container.component';
import Paragraph from '../../component/paragraph/paragraph.component';

import styles from './am.view.less';


class AmView extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {};

	}
	
	
	render() {
		
		return (
			<div>
				<Container color={this.props.color}>
					<Paragraph>
						<h3>I am</h3>
						<p>an outgoing and driven lady in my thirties. I am born and raised in Stockholm, but my current home is in Norrköping (and has been for more than ten years now).</p>
					</Paragraph>
					<Paragraph>
						<h3>I studied</h3>
						<p>master of science in media technology where my main focus was software development, design and information visualization.</p>
					</Paragraph>
					<Paragraph>
						<h3>I started working</h3>
						<p>in the advertising industry as a front-end devoloper in mainly web applications, with business to business compaign sites and apps. After that I became an IT consultant and started working on a lot more business critical systems and realized the power and importans of great UX and all its processes and tools.</p>
					</Paragraph>
					<Paragraph>
						<h3>I now work</h3>
						<p>as a technical UX-designer. Mainly with interaction design, but I have a tendancy to demand that projects apply a broader spectrum of the design process. Which often lands on my table to execute. I haven't left the coding world, but now I only deliver specific Angular or React components (especially because I love coding graphs) or provide front-end architectural support.</p>
					</Paragraph>
					<Paragraph>
						<h3>When I don't work</h3>
						<p>I spend a lot of time sewing clothes, watching series, rock climbing and drinking beer with my friends and family.</p>
					</Paragraph>
					<Paragraph>
						<h3>I grew up</h3>
						<p>in a basketball family and ended up dedicating 12 years and a LOT of time to the game (until I injured my knee for the last time). I think my basketball career built the ground I stand on today. Mostly because it went to hell. Nothing went as I planned. My own mind and the team dynamics came in the way of victory so many times. It taught me a lot. </p>
					</Paragraph>
					
				</Container>
				
			</div>
		);
	}
}


export default AmView;
