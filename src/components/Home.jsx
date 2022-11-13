import React from 'react'
import Hero from '../assets/hero-img.png'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import Projects from './Projects'
import Articles from './Articles'

const Home = () => {
    return (
        <>
            <section id='home'>
                <div className="hero-img">
                    <img src={Hero} alt="hero-img" />
                </div>
                <div className="hero-desc">
                    <div>
                        <p>Ideas</p>
                        <p>Plans</p>
                    </div>
                    <p>Creation</p>
                    <p>A good project is made of some careful steps. I think, create, and deliver visual projects for every needs</p>
                    <button>About Me</button>
                </div>
            </section>

            <Projects />
            <Articles />
        </>
    )
}

export default Home