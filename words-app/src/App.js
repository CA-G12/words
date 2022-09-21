import './App.css'
import Header from './components/Header'
import Card from './components/Card'
 import {useState} from"react"
function App() {
  const [search, setSearch] = useState(null)
 
  return (
    <div className="App">
      <h1>words app</h1>
      <Header search={search}  setSearch={setSearch} />
      <Card  search={search} />
      
    </div>
  )
}

export default App
