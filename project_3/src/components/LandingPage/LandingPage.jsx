import React from 'react';
import styles from './LandingPage.module.css'
import Button from '../Button/Button'

const LandingPage = () => {
  return (
    <div className={`${styles.conainer_LandingPage} container`}>
        <div className={styles.img_dice}>
            <img src="/images/dices 1.png"/>
        </div>

        <div className={styles.text_dice}>
            <p>DICE GAME</p>
            <Button
              text="Play Now"
            />
        </div>
    </div>
  );
};

export default LandingPage;