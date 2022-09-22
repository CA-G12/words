import {  useState } from "react"

 const   Bookmark=({data,setData})=> {
    const[wordList,setWordList]=useState([])
    const[bool,setBool] = useState(true)


   const addBookMark=()=>{ 
    setWordList([...wordList, data[0].word])
   }


  
   
 return    <div>
          <button onClick={ addBookMark}>bookmark</button>   
          


          <button onClick={() => setBool(!bool)}>{bool ? 'show' : 'hide'}</button>  
          {bool === false ? <ul> {wordList.map((ele) => <li> {ele}</li>)}</ul> : ''} 


        </div> 

 
 }
export default Bookmark;