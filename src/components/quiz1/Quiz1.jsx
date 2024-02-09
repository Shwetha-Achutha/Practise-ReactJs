import styles from "./quiz1.module.css";
function Quiz1() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.box}>
          <div className={styles.text}>
            <p>Chapter1</p>
            <p>
              <b>90% Scored</b>
            </p>
          </div>
          <div className={styles.inner}>
            <p>Quiz 1</p>
          </div>
          <div className={styles.score}>
            <p>90% Scored</p>
            <p>1st in 300 people</p>
          </div>
          <button className={styles.button}>View Leaderboard</button>
        </div>
        <hr />
       
        <div className={styles.box}>
      
          <div className={styles.inner}>
            <p>Quiz 2</p>
          </div>
          <div className={styles.score}>
            <p>90% Scored</p>
            <p>1st in 300 people</p>
          </div>
          <button className={styles.button}>View Leaderboard</button>
        </div>
      </div>

      
    </>
  );
}
export default Quiz1;
