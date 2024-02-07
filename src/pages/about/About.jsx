import design from "./about.module.css";
import Topcart from "../../components/topcart/Topcart";
import Person from "../../components/leaderboard/Person";
import { useState } from "react";
function About()
{
    const[a,setA]=useState(0);
    let b=0;
    return(<>
    
    <h1>This is an About page</h1>
    <a href="/contact">Contact</a><br />
    
    <div className={design.java}>

    click to add 1:-{a}
    <button onClick={()=>{setA(a+1)}}/>
    </div>
    <div className={design.java}>
    click to add 2:-{b}
    <button onClick={()=>{b=b+1}}/>
    </div>
    <Topcart></Topcart>
    <Person></Person>
    </>)
}
export default About;