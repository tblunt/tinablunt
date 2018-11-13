import React from 'react';
import * as _ from "underscore";

import Container from '../../component/container/container.component';
import Paragraph from '../../component/paragraph/paragraph.component';

import Pie from './component/pie.component';

import styles from './know.view.less';


class KnowView extends React.Component {
	
	constructor(props) {
		super(props);

		this.developmentChartData = [];
		this.designChartData = [];
		this.leadershipChartData = [];
		
		this.state = {
			selectedGraph: 0,
			chartData: []
		}

		this.changeGraph = this.changeGraph.bind(this);

	}

	componentWillMount() {
		this.initData();
	}

	initData() {
		this.tags = {
			development: {
				react: 'ReactJS',
				js: 'Javascript',
				htmlcss: 'html/css',
				angular: 'Angular',
				angularJS: "AngularJS",
				typescript: "Typescript",
				reactNative: "React native",
				git: "GIT",
				tfs: "TFS",
				d3: "d3.js",
				webgl: "WebGL",
				less: "less",
				unity: "Unity3D",
				ar: "AR",
				sass: "sass",
				mobileApp: "App development",
				web: "Web development"
			},
			design: {
				userTest: "User tests",
				workshop: "Workshop",
				invision: "InVision",
				ui: "UI design",
				adobexd: "Adobe XD",
				abobecs: "Adobe CS",
				sketch: "Sketch",
				visualization: "Visualization",
				noodl: "Noodl",
				ux: "UX-design",
				conceptDesign: "Concept design",
				userReaserch: "User research",
				prototyping: "Prototyping"
			},
			leadership: {
				techPM: "Technical project manager",
				scrumMaster: "Scrum master",
				agile: "Agile development",
				facilitate: "Facilitate",
				frontendLead: "Front-end lead",
				uxLead: "UX lead",
				requirementAnalysis: "Requirement analysis"
			}
		};

		let dev = this.tags.development;
		let d = this.tags.design;
		let lead = this.tags.leadership;

		this.projects = [
			{
				title: 'Siemens',
				role: 'UX-designer',
				date: 'april 2018 - ongoing',
				tags: [d.ux, lead.requirementAnalysis, d.userTest, d.userReaserch, d.sketch, d.prototyping, d.conceptDesign, d.ui, dev.web, dev.angular, dev.htmlcss, dev.sass, dev.typescript, dev.tfs]
			},
			{
				title: 'Finderoo',
				role: 'Interaction designer and front-end app and web developer',
				date: 'january 2017 - mars 2018',
				tags: [lead.frontendLead, dev.mobileApp, dev.web, dev.reactNative, dev.react, d.ux, d.prototyping, d.conceptDesign, lead.requirementAnalysis, d.ui, dev.git]
			},
			{
				title: 'DIPS',
				role: 'Interaction designer and prototype developer',
				date: 'january 2017 - april 2017',
				tags: [d.noodl, d.prototyping, d.ui, dev.js, d.adobexd]
			},
			{
				title: 'Swedish correctional service (Kriminalvården)',
				role: 'Concept and UX-designer',
				date: 'february 2016 - december 2016',
				tags: [lead.uxLead, d.ux, d.prototyping, d.invision, d.conceptDesign, d.ui, d.userReaserch, d.workshop, lead.facilitate]
			},
			{
				title: 'East sweden business cluster (Östsvenska handelskammaren)',
				role: 'Technical project manager and scrum master',
				date: 'january 2016 - december 2016',
				tags: [lead.scrumMaster, lead.techPM, dev.web]
			},
			{
				title: 'BillerudKorsnäs',
				role: 'Interaction designer and front-end developer',
				date: 'august 2015 - december 2016',
				tags: [lead.uxLead, d.ui, d.abobecs, d.userTest, dev.web, dev.angular, dev.angularJS, dev.less, dev.htmlcss, dev.d3]
			},
			{
				title: 'Wide ideas',
				role: 'Concept and interaction designer',
				date: 'january 2016 - may 2016',
				tags: [d.conceptDesign, d.ui, d.abobecs, d.visualization]
			},
			{
				title: 'Åre Destination',
				role: 'Front end developer',
				date: 'january 2015 - july 2015',
				tags: [dev.typescript, dev.mobileApp, dev.web, dev.angularJS, dev.htmlcss, dev.less, dev.tfs, dev.d3]
			},
			{
				title: 'SAAB',
				role: 'Interaction designer and front-end developer',
				date: 'august 2014 - february 2015',
				tags: [d.ui, dev.mobileApp, lead.uxLead, d.invision, d.abobecs, dev.typescript, dev.angularJS, dev.htmlcss]
			},
			{
				title: 'Channelsoft',
				role: 'Front-end developer',
				date: 'mars 2013 - november 2013',
				tags: [dev.less, dev.web, dev.htmlcss, d.ui, dev.tfs]
			},
			{
				title: 'Schneider electric',
				role: 'Front-end developer',
				date: 'august 2012 - january 2013',
				tags: [dev.js, dev.mobileApp, dev.unity, dev.ar, dev.tfs]
			},
			{
				title: 'Kronoberg county',
				role: 'Front-end developer',
				date: 'june 2012 - september 2012',
				tags: [dev.htmlcss, dev.js, dev.web, dev.tfs]
			},
			{
				title: 'Scania',
				role: 'Front-end developer',
				date: 'mars 2012 - june 2012',
				tags: [dev.htmlcss, dev.js, dev.web, dev.tfs]
			}
		];

		_.each(this.projects, (project, i)=> {
			if(project.tags.length > 0) {
				this.buildChartData(project.tags, project.title);
			}

			if(i == this.projects.length-1) {
				this.changeGraph(0);
			}
		});

		
	}

	changeGraph(graphIndex) {
		
		if(graphIndex == 0) {
			this.setState({
				selectedGraph:0,
				chartData: _.shuffle(this.developmentChartData)
			});
		}
		else if(graphIndex == 1) {
			this.setState({
				selectedGraph:1,
				chartData: _.shuffle(this.designChartData)
			});
		}
		else if(graphIndex == 2) {
			this.setState({
				selectedGraph:2,
				chartData: _.shuffle(this.leadershipChartData)
			});
		}
	}

	buildChartData(tagsArray, title) {
		let isDev, isLead, isDesign;
	
		_.each(tagsArray, (tag)=> {
			if(!tag) {
				console.log("The tag doesn't exist in" + title);
				return
			}
			isDev = _.find(_.values(this.tags.development), (devTag) => {return devTag == tag.toString()});
			isDesign = _.find(_.values(this.tags.design), (designTag) => {return designTag == tag.toString()});
			isLead = _.find(_.values(this.tags.leadership), (leadTag) => {return leadTag == tag.toString()});
			
			if(isDev) {
				this.addToChartData(this.developmentChartData, tag);
				this.developmentChartData = _.shuffle(this.developmentChartData);
			}
			else if(isDesign) {
				this.addToChartData(this.designChartData, tag);
				this.designChartData = _.shuffle(this.designChartData);
			}
			else if(isLead) {
				this.addToChartData(this.leadershipChartData, tag);
				this.leadershipChartData = _.shuffle(this.leadershipChartData);
			}
		});
	}

	addToChartData(chartArray, tag) {

		if(chartArray.length == 0) {
			chartArray.push({
				index: chartArray.length,
				label: tag,
				value: 1
			});
			return;
		}
	
		let foundData = _.find(chartArray, (chartData)=> {return chartData.label == tag});
	
		if(foundData) {
			foundData.value++;
		}
		else {
			chartArray.push({
				index: chartArray.length,
				label: tag,
				value: 1
			});
		}

	}

	renderTags(tagsArray, isRight) {
		let rightStyle = isRight ? styles.right: '';

		return (<div className={styles.tagWrapper + ' ' + rightStyle}>
			{
				tagsArray.map((tag)=>{
					return (
						<div className={styles.tag}>{tag}</div>
					)
				})}
		</div>);
		
	}
	
	render() {

		return (
			<div className={styles.knowView}>
				<div className={styles.buttonGroup}>
					<div onClick={()=>this.changeGraph(0)} className={(this.state.selectedGraph == 0 ? styles.active: '')}>Development</div>
					<div onClick={()=>this.changeGraph(1)} className={(this.state.selectedGraph == 1 ? styles.active: '')}>Design</div>
					<div onClick={()=>this.changeGraph(2)} className={(this.state.selectedGraph == 2 ? styles.active: '')}>Leadership</div>
				</div>
				{this.state.chartData.length > 0 && <Pie data={this.state.chartData} />}
				<Container>
					<h2>Projects</h2>
					<div></div>
					{
						this.projects.map((project, i)=> {
							let isRight = i%2 != 0;
							let rightStyle = isRight ? styles.right : '';
							return (
								<Paragraph>
									<h3>{project.title} <br></br><span>{project.date}</span></h3>
									<p>{project.role}</p>
									<div className={styles.tagWrapper + ' ' + rightStyle}>
										{
											project.tags.map((tag)=>{
												return (
													<div className={styles.tag}>{tag}</div>
												)
											})}
									</div>
								</Paragraph>
							)
						})
					}
					<h2 className={styles.paddingtop}>Employments</h2>
					<Paragraph>
						<h3>Usify <br></br><span>january 2017 - ongoing</span></h3>
						<p>UX-designer and front-end developer</p>
					</Paragraph>
					<Paragraph>
						<h3>Gaia <br></br><span>mars 2013 - december 2016</span></h3>
						<p>UX-designer and front-end developer</p>
					</Paragraph>
					<Paragraph>
						<h3>Leon <br></br><span>mars 2012 - mars 2013</span></h3>
						<p>Front-end developer</p>
					</Paragraph>
					<Paragraph>
						<h3>Twingly <br></br><span>august 2011 - mars 2012</span></h3>
						<p>Tech support</p>
					</Paragraph>
				</Container>
				
			</div>
		);
	}
}


export default KnowView;
