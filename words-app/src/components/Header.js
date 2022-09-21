
import { useState } from "react"
const Header = ({search,setSearch}) => {
const[input,setInput]=useState("")

  const handelChange = (e) => {

 setInput(e.target.value)
  }
  const handelClick=(e)=>{
 setSearch(input)
  }
  
  return (
    <div>
      <input type="text"  value={input} onChange={handelChange} />
      <button onClick={handelClick }>search</button>
    </div>
  )
}
export default Header
