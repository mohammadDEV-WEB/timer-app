import { useContext } from "react"
import TestContext from "./testContext"


const ItemTime=(props)=>{
    const context =useContext(TestContext)

    const handelDeleteTime=(e)=>{
        const target = e.target.innerHTML
        context.setSaveTime(context.saveTime.filter(t => t !== target))
    }
    

    return(
        <div onClick={handelDeleteTime} className="item-list">
            {props.children}
        </div>
    )
}



export default ItemTime