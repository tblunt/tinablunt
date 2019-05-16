import React from 'react';

import T from '../../../service/translation.service';

import styles from './moreInfo.component.less';


class MoreInfo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
     isOpen: false
    }
  }

  

  render() {
    let isOpenStyle = this.state.isOpen ? styles.isOpen: "";
    let currentState = this.state.isOpen;

    return (
        <div className={styles.moreInfoWrapper + ' ' +isOpenStyle}>
            {T.getLocale() == 'en' && <p className={styles.infoText + ' ' +styles.warning}>The english desciption is coming soon :)</p>}
            {this.props.descriptionTexts.map((descriptionText)=> {
                return  (<p className={styles.infoText}>{T.t(descriptionText)}</p>);
            })}
            <a className={styles.toggler} onClick={()=>this.setState({isOpen: !currentState})}>{(!this.state.isOpen) ? T.t("Read more..."): T.t("Read less...")}</a>
        </div>
    );
  }

}

    
export default MoreInfo;


