const getWordData = (word) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data => console.log(data))
  }

export default getWordData;