import React from 'react'
import { Link } from 'react-router-dom'
import BackIcon from '../assets/back-icon.svg'
import '../styles/article2-3.css'

const Article3 = () => {
    return (
        <div id="article1" className="article">
            <header>
                <Link to='/articles' className="return">
                    <img src={BackIcon} alt="arrow icon" />
                </Link>
                <h1>VS Code Extentions for <br />
                    Web Developer
                </h1>
            </header>
            <div className="article-info">
                <p className="topic">Web Development</p>
                <p className="date">1 Jul 2022</p>
            </div>

            <section>
                <article>
                    <p>As a software developer, one of the keys to increasing productivity is to maximize the
                        capabilities of your code editor. Visual Studio Code has a great amount of functionality
                        natively. Using the code editor without extensions may even suffice for your task at hand.
                        However, software use-cases have become more complex and niche. In this case, extensions can
                        help improve the quality of your development environment.
                    </p>
                </article>
                <article>
                    <p>You may not need or use all of the extensions below. However, that is the beauty of Visual Studio
                        Code being a general-purpose code editor. The use of each of these extensions will vary
                        depending on your task at hand.
                    </p>
                </article>

                <article>
                    <h2>1. JavaScript (ES6) Code Snippets</h2>
                    <p>JavaScript (ES6) Code Snippets is a very useful extension for any type of JavaScript. This
                        includes TypeScript and major JavaScript frameworks. The extension provides snippets for common
                        tasks such as importing an entire module, importing a
                        portion of a module, and requiring a package. Additionally, there is a wide array of snippets
                        for quickly creating named exports, constructors, and many more common ES6 tasks. All snippets
                        are automatically proceeded by a semi-colon.</p>
                </article>

                <article>
                    <h2>2. ESLint</h2>
                    <p>ESLint is a JavaScript linter that automatically highlights syntax errors in your JavaScript
                        code. Visual Studio Code already has built-in Intellisense for native JavaScript. However,
                        ESLint allows you to bring those linting capabilities to major frameworks such as Vue, Angular,
                        and React. ESLint highlights errors in your code and also can provide an automatic resolution to
                        errors.
                        Lastly, ESLint can be integrated into your version control workflow. This will ensure all
                        contributors are following consistent conventions in the codebase.
                    </p>
                </article>

                <article>
                    <h2>3. Prettier</h2>
                    <p>This extension is a must for software developers. I honestly cannot imagine writing JavaScript,
                        HTML, or CSS without using Prettier. Prettier is a code format extension that enforces a
                        consistent writing style such as setting a maximum line length, and wrapping code when
                        necessary. Overall, Prettier is designed to make your code cleaner upon each save to a file.</p>
                </article>

                <article>
                    <h2>4. Live Server</h2>
                    <p>The Live Server extension allows developers to launch a local development server through Visual
                        Studio Code. It is as easy as clicking the Go Live button that appears in the bottom-right
                        corner of your editor after installation. Additionally, the server has a live reload
                        functionality. This means that once you make a change to a file and save it, your webpage will
                        reload automatically. This extension is very useful to developers who may not want to set up a
                        local server using
                        Node.js, or Python and only want to work with static web files.</p>
                </article>

            </section>
        </div>
    )
}

export default Article3