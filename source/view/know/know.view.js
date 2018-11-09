import React from 'react';
import * as _ from "underscore";

import Container from '../../component/container/container.component';
import Paragraph from '../../component/paragraph/paragraph.component';

import Pie from './component/pie.component';

import styles from './know.view.less';


class KnowView extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			selectedGraph: 0,
			chartData: this.getDevelopmentData()
		}
	}

	changeGraph(graphIndex) {
		if(graphIndex == 0) {
			this.setState({
				selectedGraph:0,
				chartData: this.getDevelopmentData()
			});
		}
		else if(graphIndex == 1) {
			this.setState({
				selectedGraph:1,
				chartData: this.getDesignData()
			});
		}
		else if(graphIndex == 2) {
			this.setState({
				selectedGraph:2,
				chartData: this.getLeadershipData()
			});
		}
	}

	getDevelopmentData() {
		return  [
			{
				index:0,
				label: "React",
				value: 3
			},
			{
				index:1,
			  label: "javascript",
			  value: 3
			},
			{
				index:2,
			  label: "html/css",
			  value: 3
			},
			{
				index:3,
			  label: "Angular",
			  value: 3
			},
			{
				index:4,
			  label: "AngularJS",
			  value: 3
			},
			{
				index:5,
			  label: "GIT",
			  value: 3
			},
			{
				index:6,
			  label: "TFS",
			  value: 3
			},
			{
				index:7,
			  label: "d3.js",
			  value: 3
			},
			{
				index:8,
			  label: "WebGL",
			  value: 3
			},
			{
				index:9,
			  label: "Typescript",
			  value: 3
			},
			{
				index:10,
			  label: "React native",
			  value: 3
			},
			{
				index:11,
			  label: "less",
			  value: 3
			},
			{
				index:12,
			  label: "Unity3D",
			  value: 3
			},
			{
				index:13,
				label: "AR",
				value: 3
			  },
			{
				index:14,
			  label: "sass",
			  value: 3
			}
		  ];
	}

	getDesignData() {
		return  [
			{
				index:0,
			  label: "User tests",
			  value: 3
			},
			{
				index:1,
			  label: "Workshop",
			  value: 3
			},
			{
				index:2,
			  label: "InVision",
			  value: 3
			},
			{
				index:3,
			  label: "Interaction design",
			  value: 3
			},
			{
				index:4,
			  label: "Adobe XD",
			  value: 3
			},
			{
				index:5,
			  label: "Sketch",
			  value: 3
			},
			{
				index:6,
			  label: "Visualization",
			  value: 3
			},
			{
				index:7,
			  label: "UX-design",
			  value: 3
			},
			{
				index:8,
			  label: "Concept design",
			  value: 3
			},
			{
				index:9,
			  label: "User research",
			  value: 3
			},
			{
				index:10,
				label: "Prototyping",
				value: 3
			}
		  ];
	}

	getLeadershipData() {
		return  [
			{
				index:0,
				label: "Technical project manager",
				value: 3
			},
			{
				index:1,
				label: "Scrum",
				value: 3
			},
			{
				index:2,
				label: "Scrum master",
				value: 3
			},
			{
				index:3,
				label: "Agile development",
				value: 3
			},
			{
				index:4,
				label: "Front-end lead",
				value: 3
			},
			{
				index:5,
				label: "UX lead",
				value: 3
			}
		  ];
	}

	
	render() {
		
		return (
			<div className={styles.knowView}>
				<div className={styles.buttonGroup}>
					<div onClick={()=>this.changeGraph(0)} className={(this.state.selectedGraph == 0 ? styles.active: '')}>Development</div>
					<div onClick={()=>this.changeGraph(1)} className={(this.state.selectedGraph == 1 ? styles.active: '')}>Design</div>
					<div onClick={()=>this.changeGraph(2)} className={(this.state.selectedGraph == 2 ? styles.active: '')}>Leadership</div>
				</div>
				<Pie data={this.state.chartData} />
				<Container>
					<Paragraph>
						<h3>Siemens <br></br><span>april 2018 - ongoing</span></h3>
						<p>UX-designer</p>
					</Paragraph>
					<Paragraph>
						<h3>Finderoo <br></br><span>january 2017 - mars 2018</span></h3>
						<p>Interaction designer and front-end app and web developer</p>
					</Paragraph>
					<Paragraph>
						<h3>DIPS <br></br><span>january 2017 - april 2017</span></h3>
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
						<h3>BillerudKorsnäs <br></br><span>august 2015 - december 2016</span></h3>
						<p>Interaction designer and front-end developer</p>
					</Paragraph>
					<Paragraph>
						<h3>Wide ideas <br></br><span>january 2016 - may 2016</span></h3>
						<p>Concept and interaction designer</p>
					</Paragraph>
					<Paragraph>
						<h3>Åre Destination <br></br><span>january 2015 - july 2015</span></h3>
						<p>Front end developer</p>
					</Paragraph>
					<Paragraph>
						<h3>SAAB <br></br><span>august 2014 - february 2015</span></h3>
						<p>Interaction designer and front-end developer</p>
					</Paragraph>
					<Paragraph>
						<h3>Channelsoft <br></br><span>mars 2013 - november 2013</span></h3>
						<p>Front-end developer</p>
					</Paragraph>
					<Paragraph>
						<h3>Schneider electric <br></br><span>august 2012 - january 2013</span></h3>
						<p>Front-end developer</p>
					</Paragraph>
					<Paragraph>
						<h3>Kronoberg county <br></br><span>june 2012 - september 2012</span></h3>
						<p>Front-end developer</p>
					</Paragraph>
					<Paragraph>
						<h3>Scania <br></br><span>mars 2012 - june 2012</span></h3>
						<p>Front-end developer</p>
					</Paragraph>
				</Container>
				
			</div>
		);
	}
}


export default KnowView;
