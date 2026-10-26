import { useEffect, useState } from "react";
import './App.css'
import Hero from './Components/Hero/Hero'
import NavBar from './Components/NavBar/NavBar'
import Intro from './Components/Intro/Intro'


function App() {
    const [showIntro, setShowIntro] = useState(true);

 useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    <NavBar/>
    <Hero/>
    {showIntro && <Intro />}
    </>
  )
}

export default App



