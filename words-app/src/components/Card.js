import { useEffect} from 'react'
import getWordData from '../utils/getWordData'

const Card = ({ search, data, setData }) => {
  //   const [subject, setSubject] = useState(null)

  useEffect(() => {
    if (search !== null) getWordData(search).then((data) => setData(data))
  }, [search, data, setData])
  if (data !== null) {
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
      </div>
    )
  }
}

export default Card
