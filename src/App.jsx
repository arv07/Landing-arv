import { useState } from 'react'
import './App.css'
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { Studies } from './components/Studies';

function App() {


  return (
    <>
    <Header/>
    <Profile/>
    <Studies/>
    </>
  )
}

export default App
