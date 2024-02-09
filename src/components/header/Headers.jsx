import styles from "./headers.module.css";
function Headers()
{
    return(
        <>
        <div className={styles.outer}>
        <div className={styles.icon}>
            <img src="/icon.jpg"></img> 
        </div>
        <div className={styles.header}>
            <p> You were scored 90% in academics.You have placed 1st 3 times</p>
            <div className={styles.header2}>
            <p> View Leaderboard</p> 

            </div>
        
        </div>
        </div>
       
    
        </>
    )
}
export default Headers;
