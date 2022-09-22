import React, {useEffect} from 'react'
import getWordData from '../utils/getWordData'
import Bookmark from './Bookmark'


const Card = ({ search, data, setData }) => {
  //   const [subject, setSubject] = useState(null)

  useEffect(() => {
    if (search !== null) getWordData(search).then((data) => setData(data))
  }, [search, data, setData])



  if (data !== null) {
    if(data.message) {
      const {title, message} = data;

      return (
        <div>
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      )

    }
    else{
      const response = data[0]
      const { word, meanings, phonetics } = response
      const aud = new Audio(phonetics[0].audio)



    return (
      <div>
        <p>{word}</p>
        {meanings.map((def, i) => {
          return (
            <div>
              <h2>{def.partOfSpeech}</h2>
              <div>
                <ol>
                  {def.definitions.map((content) => {
                    return <li>{content.definition}</li>
                  })}
                </ol>
              </div>
            </div>
          )
        })}
        <button onClick={() => aud.play()}>Audio</button>
        <Bookmark  data={data} setData={setData}/>
      </div>
    )


    }


  }
}





// class Card extends React.Component{

//   constructor({ search, data, setData }){
//     super();

//     this.search = search;
//     console.log(this.search)
//     this.data = data;
//     this.setData = setData;
//   }





//   componentDidMount(){
//     const search = this.props.search;
//     if (search !== null)  getWordData(search).then((data) => this.setData(data))

//   }
  


//   checkdata(data){

//     if (this.data !== null) {
//       if(this.data.message) {
//         const {title, message} = this.data;
       
  
//           return (
//             <div>
//               <h3>{title}</h3>
//               <p>{message}</p>
//             </div>
//           );
//       }
//       else{
//         const response = this.data[0]
//         const { word, meanings, phonetics } = response
//         const aud = new Audio(phonetics[0].audio)
  
  
//         return (<div>
//           <p>{word}</p>
//           {meanings.map((def, i) => {
//             return (
//               <div>
//                 <h2>{def.partOfSpeech}</h2>
//                 <div>
//                   <ol>
//                     {def.definitions.map((content) => {
//                       return <li>{content.definition}</li>
//                     })}
//                   </ol>
//                 </div>
//               </div>
//             )
//           })}
//           <button onClick={() => aud.play()}>Audio</button>
//           <Bookmark  data={this.data} setData={this.setData}/>
//         </div>
//         )
  
//       }
  
  
  
  
//     }
   
//     console.log('data', this.data)
    
//   }


//  render(){
// console.log(this.data)
//   return this.checkdata();  
//   }

// }

export default Card
