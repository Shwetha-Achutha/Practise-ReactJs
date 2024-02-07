import { useState, useEffect } from "react";
import styles from "./Productcart.module.css";
function ProductCart(props) {
  const [quantity, setQuantity] = useState();
  function handleSubtraction() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      alert("quantity cannot be <1");
    }
  }

  useEffect(() => {
    if (quantity > 1) {
      localStorage.setItem(props.name, quantity);
    } else {
      setQuantity(1);
    }
  }, [quantity]);
  useEffect(() => {
    const data = parseInt(localStorage.getItem(props.name));
    console.log("data", data);
    if (data > 1) {
      setQuantity(data);
    }
  }, []);
  return (
    <>
      <div className={styles.cardouter}>
        <div className={styles.cardimage}>
          <img
            src={props.image}
            style={{ width: "100%", height: "fit-content" }}
          ></img>
        </div>
        <div className={styles.contentparent}>
          <div className={styles.content1}>
            <p>{props.offer}%</p>
          </div>
          <div className={styles.content2}>
            <p className={styles.discountprice}>
              ${props.price - (props.offer / 100) * props.price}
            </p>{" "}
            <p className={styles.actualprice}>${props.price}</p>
          </div>
        </div>
        <div className={styles.outertext}>
          <p>{props.name}</p>
        </div>
        <div className={styles.outertext1}>
          <p>Wear your superpower with personalised t-shirt</p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button1} onClick={handleSubtraction}>
            -
          </button>
          <p>{quantity}</p>
          <button
            className={styles.button1}
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
export default ProductCart;
