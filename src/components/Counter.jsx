
import { useState } from "react";

export default function counterApp(){

    const [counter,setcounter ] = useState(0);

    const increment = ()=>{
        setcounter(prevcount => prevcount+=1)
       
    }

    const decrement = ()=> {
        setcounter(prevcount => prevcount-=1)
    }

    return (
        <>
        
        <h1 className="heading">Counter App</h1>
        <button onClick={increment} className="Secondary_btn">+</button>
        <button  className="btn">{ counter}</button>

            
            <button onClick={decrement} className="Secondary_btn">-</button>
        
        
        </>
    )
}

