import React from 'react';
import * as _ from "underscore";

import Container from '../../component/container/container.component';
import Paragraph from '../../component/paragraph/paragraph.component';

import T from '../../service/translation.service';

import Pie from './component/pie.component';
import MoreInfo from './component/moreInfo.component';

import styles from './know.view.less';


class KnowView extends React.Component {
	
	constructor(props) {
		super(props);

		this.developmentChartData = [];
		this.designChartData = [];
		this.leadershipChartData = [];
		
		this.state = {
			selectedGraph: 0,
			chartData: [],
			selectedTagString: null
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
				script: 'Script',
				angular: 'Angular',
				angularJS: "AngularJS",
				typescript: "Typescript",
				reactNative: "React native",
				git: "GIT/TFS",
				d3: "d3.js",
				webgl: "WebGL",
				unity: "Unity3D",
				sassless: "sass/less",
				mobileApp: "App developing",
				web: "Web developing",
				mobx: "mobx/rxjs/redux",
				blazor: "Blazor",
				csharpdotnet: "c#/.net"
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
				title: 'Returpack',
				role: 'UX- and front-end lead',
				date: 'jan 2020 - ',
				tags: [d.ui, d.ux, lead.uxLead, lead.frontendLead, dev.blazor, dev.web, dev.sassless, dev.git, dev.csharpdotnet],
				descriptionTexts: ["Efter att ha definierat behov och motivatorer hos Returpack designades en rad lösningsförslag på anpassade lösningar för olika processdelar och roller där behovet var som störst. Jag drev sedan arbetet för att konkretisera dessa lösningar, både koncept och utvecklingsmässigt. Bland annat skapades en webbapplikation för att hantera kundrelationer samt ett verktyg för att administrera pantmaterial."]
			},
			{
				title: 'Tekniska verken',
				role: 'UX-designer and front-end developer',
				date: 'april 2019 - february 2020',
				tags: [dev.react, dev.mobx, dev.web, d.ui, lead.uxLead, d.adobexd, d.workshop, dev.git],
				descriptionTexts: ["Tekniska verken utvecklar en IoT-plattform för att hantera digitala tvillingar och sensorer med tillhörande data och egenskaper. Plattformen ligger till grund för en app-flora av samhällstillämpningar, däribland gatubelysningsstyrning, bevattningsövervakning och lokalmiljömätning. Jag arbetade både med analys av användarbehov, gränssnittsdesign och front-end-utveckling."]
			},
			{
				title: 'Returpack',
				role: 'Corporate service designer',
				date: 'may 2019 - december 2019',
				tags: [d.conceptDesign, d.userReaserch, d.ux, d.workshop, lead.facilitate, lead.uxLead],
				descriptionTexts: ["Drev och utförde en behovsanalys, enligt design thinking och double diamond, med operativa verksamheten och ledning för att utforma framtida strategin för Returpacks pantsystem."]
			},
			{
				title: 'Rejmes',
				role: 'UX-designer',
				date: 'january 2019 - april 2019',
				tags: [d.ux, d.adobexd, d.ui, d.invision],
				descriptionTexts: ["Jag var UX-designer i utvecklingen av ett webbaserat arbetsverktyg för att Rejmes internt ska hantera och effektivisera inbytesprocessen för en begagnad bil."]
			},
			{
				title: 'Sectra',
				role: 'UX-designer',
				date: 'january 2019 - june 2019',
				tags: [d.ux, d.sketch, d.ui, dev.web, dev.sassless, dev.git],
				descriptionTexts: ["Jag var UX-designer i utvecklingen av det webbaserade nätverket av Sectras externa företagssidor. Jag var även involverad i webbutvecklingen av multisitelösningen. "]
			},
			{
				title: 'Siemens',
				role: 'UX-designer',
				date: 'april 2018 - april 2019',
				tags: [d.ux, lead.requirementAnalysis, d.userTest, d.userReaserch, d.sketch, d.prototyping, d.conceptDesign, d.ui, dev.web, dev.angular, dev.typescript, dev.git, dev.mobx],
				descriptionTexts: ["Jag ledde UX-teamet på digitaliseringsavdelningen för service av Siemens turbiner. Totalt handlade det om ansvar över användarupplevelsen för fyra webbaserade applikationer samt att ingå i vardera utvecklingsteam för dem. "]
			},
			{
				title: 'Finderoo',
				role: 'Interaction designer and front-end app and web developer',
				date: 'january 2017 - mars 2018',
				tags: [lead.frontendLead, dev.mobileApp, dev.web, dev.reactNative, dev.react, d.ux, d.prototyping, d.conceptDesign, lead.requirementAnalysis, d.ui, dev.git, dev.mobx],
				descriptionTexts: ["Arbetet med den nya tjänsten Finderoo började i att jag lade grund för UX-och konceptdesign för den helt nya produkten. Jag fortsatte som ansvarig utvecklare för front-end-klienterna som bestod av både en webbaserad e-handel men även en ios-och en androidapp."]
			},
			{
				title: 'DIPS',
				role: 'Interaction designer and prototype developer',
				date: 'january 2017 - april 2017',
				tags: [d.noodl, d.prototyping, d.ui, d.adobexd, dev.script],
				descriptionTexts: ["Jag ingick i teamet som hade i uppdrag att utveckla mobila gränssnitt mot DIPS journalsystem. Arbetet bestod i att ta fram högupplösta prototyper av appar förattbland annat hjälpa sjukhusbesökare, underlätta läkares patienthanteringoch förbättra dokumentation av tvångsvård inom psykiatrin.  "] 
			},
			{
				title: 'Swedish correctional service (Kriminalvården)',
				role: 'Concept and UX-designer',
				date: 'february 2016 - december 2016',
				tags: [lead.uxLead, d.ux, d.prototyping, d.invision, d.conceptDesign, d.ui, d.userReaserch, d.workshop, lead.facilitate],
				descriptionTexts: ["Jag arbetade med att, genom användarstudier och behovskartläggning, ta fram konceptdesign och en prototyp på en app för att hjälpa personer inom frivården att inte återfalla i brått. "]
			},
			{
				title: 'East sweden business cluster (Östsvenska handelskammaren)',
				role: 'Technical project manager and scrum master',
				date: 'january 2016 - december 2016',
				tags: [lead.scrumMaster, lead.techPM, dev.web],
				descriptionTexts: ["Handelskammaren ville ha en levande plats på webben vars syfte var att locka nya medlemmar samt vara en mötesplats för befintliga. Jag hade ansvar för kartläggning av behov, övergripande designen och drev sedan utvecklingen av den."]
			},
			{
				title: 'BillerudKorsnäs',
				role: 'Interaction designer and front-end developer',
				date: 'august 2015 - december 2016',
				tags: [lead.uxLead, d.ui, d.abobecs, d.userTest, dev.web, dev.angular, dev.angularJS, dev.sassless, dev.d3, dev.mobx],
				descriptionTexts: ["Jag var ansvarig UX-designer för webbaserade kundportaler kopplade till BillerudKorsnäs två största affärsområden med syfte att digitalisera orderläggningsprocessen av papper. Jag deltog även till stor del i front-end-utvecklingen. "]
			},
			{
				title: 'Wide ideas',
				role: 'Concept and interaction designer',
				date: 'january 2016 - may 2016',
				tags: [d.conceptDesign, d.ui, d.abobecs, d.visualization],
				descriptionTexts: ["Jag utvecklade ett koncept för hur Wide ideas idébank skulle kunna utnyttjas i större format. Tanken var att bygga ett beslutsstöd för stora skärmar som ska ersätta den traditionella white boarden med ett digitalt alternativ. "]
			},
			{
				title: 'Åre Destination',
				role: 'Front end developer',
				date: 'january 2015 - july 2015',
				tags: [dev.typescript, dev.mobileApp, dev.web, dev.angularJS, dev.sassless, dev.git, dev.d3],
				descriptionTexts: ["Projektet bestod av att bygga en webbaserad 3D-karta över leder och pister på och kring Åreskutan med omnejd."]
			},
			{
				title: 'SAAB',
				role: 'Interaction designer and front-end developer',
				date: 'august 2014 - february 2015',
				tags: [d.ui, dev.mobileApp, lead.uxLead, d.invision, d.abobecs, dev.typescript, dev.angularJS],
				descriptionTexts: ["Jag var ansvarig UX-designer och utvecklare för en mobil klient till SAABs säkerhetssystem som administrerar och kommunicerar med vakter, sjukvårdspersonal och funktionärer under bland annat skid-VM i Falun. Lösningen bestod av en webbapp där personalen kunde rapportera fel, få uppdrag och inräkna åskådare på området."]
			},
			{
				title: 'Gaia Places',
				role: 'Front-end developer',
				date: 'august 2013 - december 2016',
				tags: [dev.angularJS, d.invision, d.abobecs,, d.ui],
				descriptionTexts: ["Jag deltog i design och utveckling av tjänster kopplade till att digitalisera fysiska platser, däribland skyltsystem för fastigheter och hänvisningssystem."]
			},
			{
				title: 'Channelsoft',
				role: 'Front-end developer',
				date: 'mars 2013 - november 2013',
				tags: [dev.sassless, dev.web, d.ui, dev.git],
				descriptionTexts: ["Jag arbetade med att förbättra UX och utformning i en befintlig webbaserad lösning för att underlätta för telemarketingbolag. "]
			},
			{
				title: 'Schneider electric',
				role: 'Front-end developer',
				date: 'august 2012 - january 2013',
				tags: [dev.script, dev.mobileApp, dev.unity, dev.git],
				descriptionTexts: ["Schneider electric ville skapa en app som med hjälp av AR projicerade en 3D- modell av strömbrytaren på användarens vägg. Jag var med i app-utvecklingen och deltog även i 3D-modelleringen av strömbrytarna."]
			},
			{
				title: 'Kronoberg county',
				role: 'Front-end developer',
				date: 'june 2012 - september 2012',
				tags: [ dev.web, dev.git],
				descriptionTexts: ["Jag var utvecklare för en kampanjwebb kopplat till en stor miljösatsning för hela länet."]
			},
			{
				title: 'Moistguard',
				role: 'Front-end developer',
				date: 'june 2012 - august 2012',
				tags: [dev.web, dev.git],
				descriptionTexts: ["Jag var med och utvecklade Moistguards hemsida."]
			},
			{
				title: 'Scania',
				role: 'Front-end developer',
				date: 'mars 2012 - june 2012',
				tags: [dev.web, dev.git],
				descriptionTexts: ["Scania hade i samband med en stor lansering av en ny lastbil en stor kampanj. Jag ansvarade för delen av kampanjwebben som var kopplat till release-eventet, med tillhörande livestream och twitterflöde."]
			},
			
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
	

	onSliceClicked(str) {
		this.setState({
			selectedTagString: str
		});
	}

	render() {

		return (
			<div className={styles.knowView}>
				<div className={styles.buttonGroup}>
					<div onClick={()=>this.changeGraph(0)} className={(this.state.selectedGraph == 0 ? styles.active: '')}>{T.t("Development")}</div>
					<div onClick={()=>this.changeGraph(1)} className={(this.state.selectedGraph == 1 ? styles.active: '')}>{T.t("Design")}</div>
					<div onClick={()=>this.changeGraph(2)} className={(this.state.selectedGraph == 2 ? styles.active: '')}>{T.t("Leadership")}</div>
				</div>
				{this.state.chartData.length > 0 && <Pie data={this.state.chartData} onSliceClick={(str)=>this.onSliceClicked(str)} selectedTagString={this.state.selectedTagString} />}
				<Container>
					<h2>{T.t("Projects")}</h2>
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
												let isHighlightedStyle = tag == this.state.selectedTagString ? styles.highlighted : "";
												return (
													<div className={styles.tag+ " " + isHighlightedStyle} onClick={()=>this.onSliceClicked(tag)}>{tag}</div>
												)
											})}
									</div>
									{project.descriptionTexts && <MoreInfo descriptionTexts={project.descriptionTexts}></MoreInfo>}
									
								</Paragraph>
							)
						})
					}
					<h2 className={styles.paddingtop}>Employments</h2>
					<div></div>
					<Paragraph>
						<h3>Gaia <br></br><span>january 2019 - ongoing</span></h3>
						<p>UX-lead</p>
					</Paragraph>
					<Paragraph>
						<h3>Usify <br></br><span>january 2017 - december 2018</span></h3>
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
