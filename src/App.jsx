import { useState } from 'react'
import './App.css'
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { Studies } from './components/Studies';
import { Skills } from './components/Skills';

function App() {


  return (
    <>
    <Header/>
    <Profile/>
    <Studies/>
    <Skills/>
    </>
  )
}

export default App
