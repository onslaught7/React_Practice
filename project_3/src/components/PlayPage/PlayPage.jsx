import styles from './PlayPage.module.css'
import Button from '../Button/Button'

const PlayPage = () => {
  const btnNums = [1, 2, 3, 4, 5, 6];

  return (
    <div className={`${styles.playpage_container} container`}>
      <div className={styles.top}>
        <div className={styles.score}>
          <h1>0</h1>
          <p>Total Score</p>
        </div>

        <div className={styles.num_select}>
          <div className={styles.select_btns}>
            {btnNums.map(number => (
              <button key={number}>{number}</button>
            ))}
          </div>
          <p>Select Number</p>
        </div>
      </div>

      <div className={styles.play_area}>
            <img src="/images/dice_1.png"/>
            <p>Click on Dice to roll</p>
            <div className={styles.btns}>
              <Button
                isBtn2 ={false}
                text="Reset Score" 
              />
              <Button
                isBtn2={true}
                text="Show Rules"
              />
            </div>
      </div>
    </div>
  );
};

export default PlayPage;