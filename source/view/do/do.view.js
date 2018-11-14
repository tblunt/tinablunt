import React from 'react';
var images = require.context('../../../asset/image', true);

import T from '../../service/translation.service';

import Container from '../../component/container/container.component';
import Paragraph from '../../component/paragraph/paragraph.component';

import styles from './do.view.less';


class DoView extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {};

	}
	
	
	render() {
		
		return (
			<div>
				
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
				</Container>
		
			</div>
		);
	}
}


export default DoView;
