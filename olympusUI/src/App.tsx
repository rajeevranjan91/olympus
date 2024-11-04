import { useEffect, useState } from 'react';
import './App.css'
import Splash from './components/Splash'
import TheApp from './components/TheApp';
import { getInfo, Info } from './services/InfoService';

function App() {
 const [splash, setSplash ]= useState(true);
 const [info, setInfo] = useState<Info>({teamName:"default", greeting:"default"});

 useEffect(() =>{
  setTimeout(function(){
    console.log("Ending Splash....");
    setSplash(false);
  }, 2000);

  getInfo().then(data => setInfo(data));

 }, [])

  return (
    splash ? <Splash data={info} /> : <TheApp/>
  )
}

export default App;
