import React from 'react';
var images = require.context('../../../asset/image', true);

import T from '../../service/translation.service';

import styles from './LanguageChanger.component.less';

class LanguageChanger extends React.Component {
  
    constructor(props) {
		super(props);

		this.localeImageSwedish = images(`./swedish.png`);
		this.localeImageEnglish = images(`./english.png`);
		
		this.state = {
			localeImage: T.getLocale() == 'en' ? this.localeImageSwedish: this.localeImageEnglish
		};

		this.changeLanguage = this.changeLanguage.bind(this);
	}


	changeLanguage() {
		if(T.getLocale() == 'en') {
			T.setLocale('sv');
			this.setState({
				localeImage: this.localeImageEnglish
			});
		}
		else {
			T.setLocale('en');
			this.setState({
				localeImage: this.localeImageSwedish
			});
		}
    }
    
    render() {
        
		return (
            <a onClick={()=>this.changeLanguage()} className={styles.language}>
                <img src={this.state.localeImage} />	
                <p>{T.t('På svenska?')}</p>
            </a>
		);
	}
}

    
export default LanguageChanger;
