import styles from "./quiz1.module.css";
function Quiz1() {
  const chapter = [
    {
      Task: "Quiz1",
      score: "90% scored",
      place: "1st in 300 people",
    },
    {
      Task: "Quiz2",
      score: "90% scored",
      place: "1st in 300 people",
    },
    {
      Task: "Assignment",
      score: "90% scored",
      place: "1st in 300 people",
    },
  ];

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
          <hr />
          <div className={styles.inner}>
            <p>Quiz 2</p>
          </div>
          <div className={styles.score}>
            <p>90% Scored</p>
            <p>1st in 300 people</p>
          </div>
          <button className={styles.button}>View Leaderboard</button>
          <hr />

          <div className={styles.inner}>
            <p>Assignment</p>
          </div>
          <div className={styles.score}>
            <p>90% Scored</p>
            <p>1st in 300 people</p>
          </div>
          <button className={styles.button}>View Leaderboard</button>
          <hr />
        </div>
      </div>
      {chapter.map((values, index) => {
        return (
          <div className={styles.repeat} key={index}>
            <p>{values.Task}</p>
            <p>{values.score}</p>
            <p>{values.place}</p>
          </div>
        );
      })}
    </>
  );
}
export default Quiz1;
