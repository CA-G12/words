import './App.css'
import Header from './components/Header'
import Card from './components/Card'
 import {useState} from"react"
 import Bookmark from './components/Bookmark'
function App() {
  const [search, setSearch] = useState(null)
  const[data,setData]=useState(null);
 
  return (
    <div className="App">
      <h1>words app</h1>
      <Header search={search}  setSearch={setSearch} />
      <Card  search={search} setSearch={setSearch}  data={data} setData={setData}/>
      <Bookmark  data={data} setData={setData}/>
    </div>
  )
}

export default App
