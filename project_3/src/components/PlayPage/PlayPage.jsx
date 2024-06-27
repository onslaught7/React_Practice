import styles from './PlayPage.module.css'
import Button from '../Button/Button'
import { useState } from 'react'

const PlayPage = () => {
  const btnNums = [1, 2, 3, 4, 5, 6];
  let num = 7
  // Stores and updates the number that the user selects
  const [numSelect, handleNumSelect] = useState(0)

  // Updates the state of the page based on whether the user clicked show rules
  const [showRules, handleShowRules] = useState(false)

  // Dynamically switch the image paths when the image is clickked
  const [imgPath, setImgPath] = useState('/images/dice_1.png')

  function updateImagePath () {
      num = Math.floor(Math.random()*6) + 1

      setImgPath(`/images/dice_${num}.png`)

      console.log(imgPath)
  }

  return (
    <div className={`${styles.playpage_container} container`}>
      <div className={styles.top}>
        <div className={styles.score}>
          <h1>0</h1>
          <p>Total Score</p>
        </div>

        <div className={styles.num_select}>
          <p className={styles.error_msg}>You have not selected any number</p>
          <div className={styles.select_btns}>
            {btnNums.map(number => (
              <button 
              key={number} 
              onClick={() => {
                handleNumSelect(number)
                }}
              >                
                {number}
              </button>
            ))}
          </div>
          <p>Select Number</p>
        </div>
      </div>

      <div className={styles.play_area}>
            <img onClick={updateImagePath} src={imgPath}/>
            <p>Click on Dice to roll</p>
            <div className={styles.btns}>
              <Button
                
                isBtn2 ={true}
                text="Reset Score" 
              />
              <Button
                onClick={() => handleShowRules(!showRules)}
                text="Show Rules"
              />
            </div>

            {
              showRules ?  (
                <div className={styles.rules}>
                  <h3>How to play dice game</h3>
                  <p>Select any number</p>
                  <p>Click on dice image</p>
                  <p>after click on  dice  if selected number is equal to dice number you will get same point as dice after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                  <p>if you get wrong guess then  2 point will be dedcuted</p>
                </div> ) : (
                  <div></div>
                )
            }
      </div>
    </div>
  );
};

export default PlayPage;