import { useState } from "react"

 const   Bookmark=({data,setData})=> {
const[test,setTest]=useState({})
   const addBookMark=()=>{
    setTest({'word ':data[0]})
   }
  console.log(test)
//  setData(oldmark=>({...oldmark,word:def}))
   
 return <button onClick={ addBookMark}>bookmark</button>
 
 }
export default Bookmark;