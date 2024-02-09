import Headers from "../../components/header/Headers";
import styles from "./academics.module.css"
import Quiz1 from "../../components/quiz1/Quiz1";
function Academics()
{
    return(
    <>
    <div className={styles.main}>
    <Headers></Headers>
    <Quiz1></Quiz1>
    </div>
    
    </>
    )
    

}
export default Academics;