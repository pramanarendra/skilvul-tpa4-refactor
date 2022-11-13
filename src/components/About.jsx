import React from 'react'
import AboutImg from '../assets/about-img.png'
import '../styles/about.css'

const About = () => {
    return (
        <section id='about'>
            <div className='about-header'>
                <img src={AboutImg} alt="" />
                <div className='about-desc'>
                    <h2>Who Am I?</h2>
                    <p>I'm Pramana Rendra, a front-end, computer science, and art enthusiast with capabilities of mixing both art and problem solving to create beautiful products and solutions. I studied at Gadjah Mada University as a computer science undergraduate and mastering art and design through self taught.</p>
                    <p>I have learned machine learning and front-end development for two years and have started my role as developer over the past six months. I took some certification at Alibaba Cloud Academy, Google Cloud, Codecademy Front-End Development, Dicoding Basic Machine Learning and many more. As a developer, I'm also a long life learner who never stops exploring new tools and skills.</p>
                </div>
            </div>

            <div className='about-skills'>
                <p>Here are some of my skills</p>
                <ul>
                    <li>Image Processing with Machine Learning</li>
                    <li>Front-End Web Development</li>
                    <li>Graphic Design</li>
                    <li>Storyboard & Illustration</li>
                    <li>Photography & Videography</li>
                </ul>
            </div>

            <div className='about-coding'>
                <p>Coding Tools</p>
                <ul>
                    <li>Tensorflow - software library for machine learning</li>
                    <li>React - javascript library for front-end development</li>
                    <li>Framer Motion - motion library for React</li>
                    <li>SASS - CSS preprocessor</li>
                    <li>Tailwind - utility-first CSS framework</li>
                    <li>Bootstrap - component-first CSS framework</li>

                </ul>
            </div>
            <div className='about-design'>
                <p>Graphic Design & Video Editing Tools</p>
                <ul>
                    <li>Figma - UI design and prototyping</li>
                    <li>Adobe Photoshop - digital imaging and drawing tool</li>
                    <li>Adobe Illustrator - vector based design software</li>
                    <li>Adobe Premiere Pro - video editing platform</li>

                </ul>
            </div>


        </section>
    )
}

export default About