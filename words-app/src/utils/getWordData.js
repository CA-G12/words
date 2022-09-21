const checkResponse = response => {
    if (response.status !== 200) {
      console.log(`Error with the request! ${response.status}`);
      return;
    }
    return response.json();
  };
const getWordData = (word) => {
 
   return  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(checkResponse)
 
    .catch(error=>{throw new Error("error in  getting word data" )})
  
  }

export default getWordData;