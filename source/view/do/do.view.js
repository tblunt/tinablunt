import React from 'react';
var images = require.context('../../../asset/image', true);

import T from '../../service/translation.service';

import Container from '../../component/container/container.component';
import Paragraph from '../../component/paragraph/paragraph.component';

import styles from './do.view.less';


class DoView extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			selectedFilter:0
		};

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
					<div onClick={()=>this.filterImages(0)} className={(this.state.selectedFilter == 0 ? styles.active: '')}>{T.t("Painting")}</div>
					<div onClick={()=>this.filterImages(1)} className={(this.state.selectedFilter == 1 ? styles.active: '')}>{T.t("Sewing")}</div>
					<div onClick={()=>this.filterImages(2)} className={(this.state.selectedFilter == 2 ? styles.active: '')}>{T.t("Photo")}</div>
				</div>
				<Container>
					<div className={styles.imagesWrapper}>
						<div>
							<img src={images(`./problem.png`)} />
							<div>1</div>
						</div>
						<div>
							<img src={images(`./money.png`)} />
							<div>2</div>
						</div>
						<div>
							<img src={images(`./solution.png`)} />
							<div>3</div>
						</div>
					</div>
					<div></div>
					<Paragraph>
						<p>{T.t("1. People have problems.")}</p>
						<p>{T.t("2. People are willing to pay money to eliminate their problems.")}</p>
						<p>{T.t("3. Other people can therefore make money on solving people's problems.")}</p>
						<br />
						<p>{T.t("Not really rocket science! This only explains the foundation to very many business opportunities.")} </p>
					</Paragraph>
					<Paragraph>
						<p>{T.t("On the other hand, what really is rocket science is how this super simple pattern gets forgotten and lost, especially in the tech industry. By some weird coincidence, people tend to forget their payed mission of solving someone else’s problem, and the focus is put on technics, solution and market strategy. It’s not the craziest focus, but entirely irrelevant if you don’t have control over the foundation of your business case: people and their problems.")}</p>
					</Paragraph>
					<Paragraph>
						<p>{T.t("I am really passionate about solving problems. The passion mostly lies in that I like to do successful things. It gives me a lot more pleasure than doing the unsuccessful ones. As a developer I quickly realized how much more than sharp code skills that is required for a team or an organization to produce relevant problem solving solutions. The thing that separates the failed projects from the successful ones always always always lies in the use and the users. I have seen and done to many “solutions” that end up with no one using it. That's not problem solving. That's wasting time.")}</p>
					</Paragraph>

					<Paragraph>
						<h3>{T.t('But how?')}</h3>
						<p>{T.t('I believe the success process is divided into three stages: problem definition, design and implementation. Together they build up the application layer by layer to strengthen it from the core.')}</p>
					</Paragraph>
					
					<div className={styles.designImages}>
						<div className={styles.designStep}>
							<img className={styles.designImage} src={images(`./design1.png`)} />
							<div className={styles.label}>Problem information</div>
						</div>
						<div className={styles.designStep}>
							<img className={styles.designImage} src={images(`./design2.png`)} />
							<div className={styles.label}>Analyze and find patterns</div>
						</div>
						<div className={styles.designStep}>
							<img className={styles.designImage} src={images(`./design3.png`)} />
							<div className={styles.label}>Brainstorm solutions</div>
						</div>
						<div className={styles.designStep}>
							<img className={styles.designImage} src={images(`./design4.png`)} />
							<div className={styles.label}>One concrete solution</div>
						</div>
						<div className={styles.designStep}>
							<img className={styles.designImage} src={images(`./design5.png`)} />
							<div className={styles.label}>Implement</div>
						</div>
						
					</div>

					<div className={styles.layers}>
						<h2>Application layers</h2>
						<div className={styles.layer}>
							<p>Code</p>
						</div>
						<div className={styles.layer}>
							<p>Graphic design</p>
						</div>
						<div className={styles.layer}>
							<p>Interaction design</p>
						</div>
						<div className={styles.layer}>
							<p>Functional requirements</p>
						</div>
						<div className={styles.layer}>
							<p>Concept design</p>
						</div>
						<div className={styles.layer}>
							<p>Impact goals</p>
						</div>
						<div className={styles.layer}>
							<p>Problem understanding</p>
						</div>
					</div>

					<Paragraph>
						<h3>{T.t('The problem stage')}</h3>
						<p>{T.t('Understanding the current situation and the problems the user face is the foundation of solving them. To be able to keep an open mind in collecting information about the problem (and not trying to solve it right away), the better adapted the solution will be. ')}</p>
						
						<p className={styles.subTitle}>{T.t('Understanding the problem')}</p>
						<p>{T.t('Interview, observe and learn from the people who are right in the heart of the problem. Find their pain points and the situations they feel frustrated and lost. ')}</p>

						<p className={styles.subTitle}>{T.t('Analyze and find patterns')}</p>
						<p>{T.t('Filter out key quotes and try to find themes and patterns in the gathered problem information bulk. Create visualizations, discuss and vote for which is the main problem that will give the most gain versus effort.  ')}</p>
					</Paragraph>

					<Paragraph>
						<h3>{T.t('The design stage')}</h3>
						<p>{T.t('The goal is to reach a solution concept to the main problem. Keep the user in focus but take other factors into account: business strategy, technical and financial limitations. If the concept design is impossible to implement it’s not a possible solution.')}</p>
						
						<p className={styles.subTitle}>{T.t('Concept design')}</p>
						<p>{T.t('Allow the collective creativity to go bananas. Brainstorm, focus in private, work in groups, do something completely different, have focused and unfocused discussions, use the hands, the body, Boost each other’s crazy ideas and spin off on them. Do everything to squeeze out all possible ideas and end up with one.')}</p>

						<p className={styles.subTitle}>{T.t('One concrete solution')}</p>
						<p>{T.t('Sketch, design, create prototypes, user test and involve the develop team to produce a design specification that the developers use as base for the implementation.')}</p>
					</Paragraph>


					<Paragraph>
						<h3>{T.t('The implementation stage')}</h3>
						<p>{T.t('Agile work methodology lays the foundation for design iteration and involves user feedback throughout the implementation stage. If established work and release methology is lacking, the UX-work will be extremely difficult to execute well.')}</p>
						
						<p className={styles.subTitle}>{T.t('Code')}</p>
						<p>{T.t('Code, code, code. Re-evaluate the solutions and adjust the design. Code, code, code. An unpredicted obstacle appears, adjust the design. Code, code, code. Technical limitations appear, adjust the design. Eat, sleep, repeat.')}</p>

						<p className={styles.subTitle}>{T.t('Test')}</p>
						<p>{T.t('Sit next to the user. Give them tasks or watch them try to solve a real problem. Listen to their thoughts and concerns. Gather user statistics and click heat maps. Everything to ensure the quality of the design.')}</p>

						<p className={styles.subTitle}>{T.t('Improve')}</p>
						<p>{T.t('Learn from the users and categorize the feedback into critical and non critical alterations or which parts that has to be evaluated from the beginning of the process and be defined from the problem perspective. ')}</p>
					</Paragraph>
				</Container>
		
			</div>
		);
	}
}


export default DoView;
