import React from 'react';
import styles from './LandingPage.module.css'
import Button from '../Button/Button'
import { BsDice1 } from "react-icons/bs";

const LandingPage = () => {
  function handleClick() {
    
  }

  return (
    <div className={`${styles.conainer_LandingPage} container`}>
        <div className={styles.img_dice}>
            <img src="/images/dices 1.png"/>
        </div>

        <div className={styles.text_dice}>
            <p>DICE GAME</p>
            <Button
              onClick={handleClick}
              icon={<BsDice1 fontSize="20px"/>}
              text="PLAY NOW"
            />
        </div>
    </div>
  );
};

export default LandingPage;