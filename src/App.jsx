import { useEffect, useState, useRef } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Profile } from "./pages/ProfilePage";
import { Studies } from "./pages/StudiesPage";
import { Skills } from "./pages/SkillsPage";
import { Experience } from "./pages/ExperiencePage";
import { Projects } from "./pages/ProjectsPage";
import { ContactMe } from "./pages/ContactMePage";
import { Footer } from "./components/Footer";
import * as Scroll from 'react-scroll';

import { Link, Router } from "react-router-dom";

function App() {
  const [nightMode, setNightMode] = useState(false);

  const scrollToRef = useRef();

  useEffect(() => {
    const nightModeLocalStorage = localStorage.getItem("darkMode");

    if (nightModeLocalStorage == null && nightMode == false) {
      localStorage.setItem("darkMode", "false");
    } else if (nightModeLocalStorage == "true") {
      changeMode();
    }
  }, []);

  const changeMode = () => {
    if (nightMode == false) {
      setNightMode(true);
      localStorage.setItem("darkMode", "true");
      const list = document.getElementById("darkmode").classList;
      list.add("bg-black-primary");
    } else if (nightMode == true) {
      setNightMode(false);
      localStorage.setItem("darkMode", "false");
      const list = document.getElementById("darkmode").classList;
      list.remove("bg-black-primary");
    }
  };

  return (
    <>
     
        
        <Header changeMode={changeMode} nightMode={nightMode} />
        
        <Profile nightMode={nightMode} />  
        
        <Studies nightMode={nightMode} />
        <Skills nightMode={nightMode} />
        <Experience nightMode={nightMode} />
        <Projects nightMode={nightMode} />
        <ContactMe nightMode={nightMode} scrollToRef={scrollToRef} />
        <Footer />
      
    </>
  );
}

export default App;
