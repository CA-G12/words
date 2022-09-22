
import React from "react"

// const Header = ({search,setSearch}) => {
// const[input,setInput]=useState("")

//   const handelChange = (e) => {

//  setInput(e.target.value)
//   }
//   const handelClick=(e)=>{
//  setSearch(input)
//   }

//   return (
//     <div>
//       <input type="text"  value={input} onChange={handelChange} />
//       <button onClick={handelClick }>search</button>
//     </div>
//   )
// }



class Header extends React.Component{
  constructor({search,setSearch}){
    super();
    this.setSearch = setSearch;
    this.search = search;


    this.state = {
      input : '',
    };
  }

   handelChange = (e) => {
    //  setInput(e.target.value)
    this.setState((oldState)=> {
      return {input: e.target.value}
    })
      }
      
      handelClick=(e)=>{
     this.setSearch(this.state.input)
      }



  render(){
    return (
          <div>
            <input type="text"  value={this.state.input} onChange={this.handelChange} />
            <button onClick={this.handelClick }>search</button>
          </div>
        )
  }
}


export default Header
