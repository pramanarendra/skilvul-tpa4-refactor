import React from 'react'
import Hero from '../assets/hero-img.png'
import '../styles/home.css'
import { Link } from 'react-router-dom'

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

            <section id='projects'>
                <div>
                    <h2>Latest Work</h2>
                    <p>Here are some of my selected works over the past year</p>
                </div>

                <Link to={""}>
                    <div className='project-img'>
                        <img src="" alt="" />
                    </div>
                    <h3>Indonesian's Hogwarts</h3>
                    <p>Photoshoots of the magical Plaosan Temple located in Yogyakarta.</p>
                </Link>

                <Link>
                    <div className='project-img'>
                        <img src="" alt="" />
                    </div>
                    <h3>Cirebon Mask Dance</h3>
                    <p>Illustration set of five dancer of the iconic Cirebon masks.</p>
                </Link>

                <Link>
                    <div className='project-img'>
                        <img src="" alt="" />
                    </div>
                    <h3>The Raging Storm</h3>
                    <p>Short comics about journey of losing and finding the inner self.</p>
                </Link>

                <Link>
                    <div className='project-img'>
                        <img src="" alt="" />
                    </div>
                    <h3>Coming Soon</h3>
                    <p>A projects about books with a bunch of self discovery illustrations.</p>
                </Link>

                <Link>
                    <div className='project-img'>
                        <img src="" alt="" />
                    </div>
                    <h3>Coming Soon</h3>
                    <p>E-commerce website that sells handcraft accesories and jewelries.</p>
                </Link>
            </section>
            <section id='articles'>
                <div>
                    <h2>My Thoughts</h2>
                    <p>Here are some of my selected articles about my thoughts and ideas</p>
                </div>

                <Link>
                    <div className='article-img'>
                        <img src="" alt="" />
                    </div>
                    <h3>Tailwind vs Bootstrap</h3>
                    <p>Comparison between two of the most popular CSS frameworks. Which one is better?</p>
                </Link>

                <Link>
                    <div className='article-img'>
                        <img src="" alt="" />
                    </div>
                    <h3>UI/UX Books</h3>
                    <p>Reviews of UI/UX books that have helped through my UI/UX design journey.</p>
                </Link>

                <Link>
                    <div className='article-img'>
                        <img src="" alt="" />
                    </div>
                    <h3>Coming Soon</h3>
                    <p>Some Visual Studio Code extentions that's very useful to boost your coding activities.</p>
                </Link>
            </section>
        </>
    )
}

export default Home