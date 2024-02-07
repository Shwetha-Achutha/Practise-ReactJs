import styles from "./chapter.module.css";
function Chapter() {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.inner}>
        <div>
          <p>chapter1</p>
        </div>
        <div>
            90% Scored
        </div>

        </div>
        
      </div>
    </>
  );
}
export default Chapter;
