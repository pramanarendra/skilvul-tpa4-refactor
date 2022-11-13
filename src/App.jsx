import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
// import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Articles from './components/Articles'
import Projects from './components/Projects'
import About from './components/About'
import ProjectDetails from './components/ProjectDetails'
import Article1 from './components/Article1'
import Article2 from './components/Article2'
import Article3 from './components/Article3'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='articles' element={<Articles />} />
        <Route path='articles/1' element={<Article1 />} />
        <Route path='articles/2' element={<Article2 />} />
        <Route path='articles/3' element={<Article3 />} />
        <Route path='projects' element={<Projects />} />
        <Route path='projects/:id' element={<ProjectDetails />} />
        <Route path='about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
