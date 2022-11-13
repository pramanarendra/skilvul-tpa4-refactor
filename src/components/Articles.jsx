import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/articles.css'

const Articles = () => {
    return (
        /*===== Article Cards =====*/
        <section id='articles'>
            <div>
                <h2>My Thoughts</h2>
                <p>Here are some of my selected articles about my thoughts and ideas</p>
            </div>

            <div className='article-card'>
                <Link to='/articles/1'>
                    <h3>Tailwind vs Bootstrap</h3>
                    <p>Comparison between two of the most popular CSS frameworks. Which one is better?</p>
                    <div className='article-info'>
                        <p>Front-End</p>
                        <p>03 Aug 2022</p>
                    </div>
                </Link>
            </div>

            <div className='article-card'>
                <Link to='/articles/2'>
                    <h3>UI/UX Books</h3>
                    <p>Reviews of UI/UX books that have helped through my UI/UX design journey.</p>
                    <div className='article-info'>
                        <p>UI/UX</p>
                        <p>17 Aug 2022</p>
                    </div>
                </Link>
            </div>

            <div className='article-card'>
                <Link to='/articles/3'>
                    <h3>Helpful VS Code Extentions</h3>
                    <p>Some Visual Studio Code extentions that's very useful to boost your coding activities.</p>
                    <div className='article-info'>
                        <p>Web Development</p>
                        <p>01 Jul 2022</p>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Articles