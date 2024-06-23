import React from 'react';
import styles from './LandingPage.module.css'

const LandingPage = () => {
  return (
    <div className={`${styles.conainer_LandingPage} container`}>
        <div className={styles.img_dice}>
            <img src="/images/dices 1.png"/>
        </div>

        <div className={styles.text_dice}>
            <p>DICE GAME</p>
        </div>
    </div>
  );
};

export default LandingPage;