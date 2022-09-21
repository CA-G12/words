
import './App.css';
import Header from "./components/Header"
import Card from "./components/Card"
import getWordData from './utils/getWordData';




function App() {

  const word = "card";
  getWordData(word);
  return (
    <div className="App">
     <h1>words app</h1>
     <Header/>
     <Card/>
    </div>
  );
}

export default App;
