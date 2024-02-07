import styles from "./place.module.css"
function Place()
{
    /*useEffect(() => {
        if (place > 1) {
          localStorage.setItem(props.name, place);
        } else {
          setPlace(1);
        }
      }, [place]);
      */
    return(<>
    <div className={styles.placeacquired}>
        <p>1st</p>
    </div>
    <div className={styles.names}>
        <p>Name of the person</p>
        <p>90% Scored</p>
    </div>
    </>)
}
export default Place;