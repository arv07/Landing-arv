import { useState } from 'react'
import './App.css'
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { Studies } from './components/Studies';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ContactMe } from './components/ContactMe';
import { Footer } from './components/Footer';
import { HeaderPro } from './components/HeaderPro';


function App() {

  const [nightMode, setNightMode] = useState(false);

  const changeMode = () => {
    /*console.log('mensaje');*/
    

    if (nightMode == false) {
      setNightMode(true);
      const list = document.getElementById("darkmode").classList
      list.add("bg-black-primary")
    } else if (nightMode == true) {
      setNightMode(false);
      const list = document.getElementById("darkmode").classList
      list.remove("bg-black-primary")
    }
  };

  return (
    <>
    <Header changeMode={changeMode} nightMode={nightMode}/>
    <Profile nightMode={nightMode}/>
    <Studies nightMode={nightMode}/>
    <Skills nightMode={nightMode}/>
    <Experience nightMode={nightMode}/>
    <Projects nightMode={nightMode}/>
    <ContactMe nightMode={nightMode}/>
    <Footer/>
    </>
  )
}

export default App
