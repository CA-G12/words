import React, {  useState } from "react"

//  const   Bookmark=({data,setData})=> {
//     const[wordList,setWordList]=useState([])
//     const[bool,setBool] = useState(true)


//    const addBookMark=()=>{ 
//     setWordList([...wordList, data[0].word])
//    }


  
   
//  return    <div>
//           <button onClick={ addBookMark}>bookmark</button>   
          


//           <button onClick={() => setBool(!bool)}>{bool ? 'show' : 'hide'}</button>  
//           {bool === false ? <ul> {wordList.map((ele) => <li> {ele}</li>)}</ul> : ''} 


//         </div> 

 
//  }


class Bookmark extends React.Component{
  constructor({data,setData}){
    super();

    this.data = data;
    this.setData = setData;
    this.state= {
      wordList :[],
      bool :true,
    };
  }

addBookMark=()=>{ 
    // setState([...wordList, data[0].word])

    this.setState((oldState) => {
      return {wordList : [...this.state.wordList, this.data[0].word ] }
    })
   }


   changeBool=()=>{ 

    this.setState((oldState) => {
      return {bool : !oldState.bool }
    })
   }



  render(){
    return    <div>
            <button onClick={this.addBookMark}>bookmark</button>   
            <button onClick={this.changeBool}>{this.bool ? 'show' : 'hide'}</button>  
            {this.state.bool === false ? <ul> {this.wordList.map((ele) => <li> {ele}</li>)}</ul> : ''} 


          </div> 
    
  }

}


export default Bookmark;