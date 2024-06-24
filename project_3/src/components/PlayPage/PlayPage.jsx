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
          {btnNums.map(number => (
            <button key={number}>{number}</button>
          ))}
        </div>
      </div>

      <div className={styles.play_area}>

      </div>
    </div>
  );
};

export default PlayPage;