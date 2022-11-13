import React from 'react'
import { Link } from 'react-router-dom'
import BackIcon from '../assets/back-icon.svg'
import '../styles/article2-3.css'

const Article2 = () => {
    return (
        <div id="article1" className="article">
            <header>
                <Link to='/articles' className="return">
                    <img src={BackIcon} alt="arrow icon" />
                </Link>
                <h1>Books to Read <br />
                    for UI/UX Designers
                </h1>
            </header>
            <div className="article-info">
                <p className="topic">UI/UX</p>
                <p className="date">17 Aug 2022</p>
            </div>

            <section>
                <article>
                    <p>In this article, i've put together a list of my favorite UI/IX design books that i found really
                        helpful to anyone who want to develop their design skills. I'm sure that each one of them will
                        be worth your time to read.
                    </p>
                </article>

                <article>
                    <h2>1. "Fundamentals of Creating a Great UI/UX" by Creative Tim</h2>
                    <p>Creative Tim has released their newest UI/UX design book called Fundamentals of Creating a Great
                        UI/UX anyone who have just started their UI/UX journey and help them develop an eye for design,
                        not just for code.
                    </p>
                    <p>There are six parts included in the book to walk the reader through the process of designing a
                        website, from the basic components like buttons, cards, section, and pages. After reading this
                        book, you will learn how to design UI/UX design components from top to bottom.

                    </p>
                    <p>These are the list of what you will learn:</p>
                    <ul>
                        <li>Get to know the fundamental UI/UX design concepts</li>
                        <li>Learn best pratices for creating components</li>
                        <li>Learn to create web pages</li>
                        <li>Understand the current trends of web design</li>
                    </ul>
                </article>

                <article>
                    <h2>2. "Refactoring UI" by Steve Schoger & Adam Wathan</h2>
                    <p>Refactoring UI will teach you how to design beautiful user interfaces by yourself using specific
                        tactics explained from a developer’s point-of-view. The idea of the book is that talent is not
                        the
                        main ingredient in creating the design, but the tactics are. The book is an excellent beginner's
                        book on how to make simple design decisions that could greatly improve your designs.
                    </p>
                    <p>"Refactoring UI takes everything we know about design and bundles it into one comprehensive
                        package,
                        including a book, screencasts, a component gallery, custom designed assets, and more." (official
                        website)
                    </p>
                    <p>Here is what you will learn about:</p>
                    <ul>
                        <li>how to use tactics to create beautiful designs</li>
                        <li>the most common mistakes when starting out on a project</li>
                        <li>how to use visual hierarchy, layout, and spacing</li>
                        <li>how to use fonts and color</li>
                    </ul>

                </article>

                <article>
                    <h2>3. "Don’t make me think" by Steve Krug</h2>
                    <p>Don't Make Me Think was first published 22 years ago and Steve Krug was known as a guru of web
                        design, teaching web designers and developers the principles of intuitive navigation and
                        information
                        design. It has become most popular people’s introduction to User Experience (UX).
                    </p>
                    <p>The book is now in its third revised version. But even it is an old book and many designers would
                        say
                        the web has changed so much from 2013, there are a lot of people still saying it should be read
                        by
                        anyone working on web designing.
                    </p>
                    <p>The purpose behind the book is to emphasize the importance of simplicity as well as consistency
                        when
                        coming up with a web design. When designing websites, it's easy to lose sight of the fact that
                        people will actually be using your published work.
                    </p>
                    <p>Here is what you will learn about:</p>
                    <ul>
                        <li>the principles of intuitive navigation and information design</li>
                        <li>why do people really leave websites</li>
                        <li>making sites usable and accessible</li>
                    </ul>
                </article>
            </section>
        </div>
    )
}

export default Article2