import {useState} from "react"
import getWordData from "../utils/getWordData"
const Header =()=> {
const[search,setSearch]=useState("")
const handelChange=(e)=>{
    setSearch(e.target.value)
    
}
return(
    <div>
<input type="text" onChange={handelChange}/>
<button onClick={()=>getWordData(search)}>search</button>
</div>
)
}
export default Header