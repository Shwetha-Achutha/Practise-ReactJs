import ProductCart from "../../components/productcart/Productcart";
import styles from "./style.module.css"

function Home(){
    const data=[
        {
            name:"shirt",
            offer:12,
            price:2,
            quantity:1,
            image:"/shirt.jpg"
        },
        {
            name:"pant",
            offer:15,
            price:3,
            quantity:1,
            image:"/pant.jpg"
        },
        {
            name:"salwar",
            offer:19,
            price:9,
            quantity:1,
            image:"/salwar.jpg"
        },

    ]


    return(<>
    <h1>className={styles.header}welcome to home page</h1>
    <a href="/contact">Contact</a><br />
    <a href="/about">About</a>
    {
        data.map((details)=>(<ProductCart name={details.name} offer={details.offer} price={details.price} quantity={details.quantity} image={details.image}></ProductCart>))
       
    }
    
    </>
    )
}
export default Home;