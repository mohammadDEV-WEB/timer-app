import ItemTime from "./item"
import "./index.css";
import { useContext } from "react";
import  TestContext from "./testContext"; 
 
const SaveItem =()=>{
    const context=useContext(TestContext)
    return(
        <div className="main-item-list">
            {context.saveTime.map((c)=>(
                <ItemTime>{c}</ItemTime>
            ))}
        </div>
    )
}

export default SaveItem