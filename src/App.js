import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import useTwitchAuthentication from './hooks/useTwitchAuthentication';
import {useState} from 'react'

function App() {
  const isAuthenticated = useTwitchAuthentication();
  const [data,setData] = useState([])

  if (!isAuthenticated) {
    return null;
  }
  function getTop(data){
        setData(data)
  }


  return (
    <div className="App">
      <Navbar getTop ={getTop}/>
      <Content topGames={data}/>
    </div>
  );
}

export default App;
