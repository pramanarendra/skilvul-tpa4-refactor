import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
// import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Articles from './components/Articles'
import Projects from './components/Projects'
import About from './components/About'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='articles' element={<Articles />} />
        <Route path='projects' element={<Projects />} />
        <Route path='about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
