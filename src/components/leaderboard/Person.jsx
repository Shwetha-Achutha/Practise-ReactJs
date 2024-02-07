import styles from "./person.module.css";
function Person() {
  return (
    <>
    <h1>name of the person: shwetha</h1>
    <h2>90% scored</h2>
    <div className={styles.main}>
        
        <div className={styles.outertext}>
        <p>Leaderboard-Quiz1</p>
        <div className={styles.innertext}>
        <p>1st</p>
        </div>
        <div>
            <p>You</p>
            <p>90% Scored</p>
        </div>
        <div className={styles.name}></div>
        <p>Name of the person</p>
        <p>90% Scored</p>
        </div>
        </div>
        </>
  
)}


  
export default Person;
