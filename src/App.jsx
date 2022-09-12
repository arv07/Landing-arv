import { useState } from 'react'
import './App.css'
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { Studies } from './components/Studies';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';

function App() {


  return (
    <>
    <Header/>
    <Profile/>
    <Studies/>
    <Skills/>
    <Experience/>
    <Projects/>
    </>
  )
}

export default App
