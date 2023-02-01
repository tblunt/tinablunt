import React from 'react';
import * as _ from "underscore";

import styles from './knowImage.component.less';
import knowtags from '../../view/know/knowtags';


class KnowImage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        const tags = knowtags;
        let faded = this.props.faded ? styles.faded : '';
        
        return (
            <div className={styles.svg + ' '+ faded}>
                {_.keys(tags).map((tagGroup, i) => {
                    return (
                        <div className={styles.tagGroup}>
                            <div className={styles.tag +' '+ styles.fullWidth +' '+ styles.fadeInAnimation +' '+styles.anim0}>{tagGroup}</div>
                            {_.keys(tags[tagGroup]).map((tag, j) => {
                                const groupClassName = 'anim'+(i+1);
                                j = j > 11 ? 11 : j;
                                const animClass = styles[groupClassName + (j+1)];
                                return (
                                    <div className={`${styles.tag} ${styles.fadeInAnimation} ${animClass}`}>{tags[tagGroup][tag]}</div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
};


export default KnowImage;
