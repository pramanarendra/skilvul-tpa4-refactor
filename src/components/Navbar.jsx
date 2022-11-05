import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {

    const [nav, setNav] = useState(true);

    const toggleNav = () => {
        setNav(!nav)
    }

    return (
        <>
            <nav>
                <div className={nav ? "hamburger" : "hamburger active"} onClick={toggleNav}>
                    <span className='line'></span>
                    <span className='line'></span>
                </div>

                <div className={nav ? "nav-menu hidden" : "nav-menu"}>
                    <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Projects</Link></li>
                        <li><Link>Articles</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar