import { useEffect, useState } from 'react';
import './App.css'
import Splash from './components/splash'
import TheApp from './components/theApp';

function App() {
 const [splash, setSplash ]= useState(true);

 useEffect(() =>{
  setTimeout(function(){
    console.log("Ending Splash....");
    setSplash(false);
}, 2000);
 }, [])

  return (
    splash ? <Splash/> : <TheApp/>
  )
}

export default App
