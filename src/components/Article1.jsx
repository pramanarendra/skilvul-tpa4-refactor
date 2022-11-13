import React from 'react'
import { Link } from 'react-router-dom'
import BackIcon from '../assets/back-icon.svg'
import '../styles/article.css'

const Article1 = () => {
    return (
        <div id="article1" className="article">
            <header>
                <Link to='/articles' className="return">
                    <img src={BackIcon} alt="arrow icon" />
                </Link>
                <h1>Tailwind vs Bootstrap <br />
                    Which One is The Better Framework?
                </h1>
            </header>
            <div className="article-info">
                <p className="topic">Front-End</p>
                <p className="date">03 Aug 2022</p>
            </div>

            <article>
                <p>Cascading style sheets (CSS) are used to add styles for HTML in web development. There are many ways
                    to do that. You can use vanilla CSS, CSS framework, preprocessor like SASS, or combine all three to
                    make your website looks beautiful. There are many tools and different ways to use CSS, Bootstrap and
                    Tailwind CSS are some of the tools that are popular as CSS framework. They're both can help you
                    speed up production time, but between them, which one should you choose?</p>
                <p>Bootsrtap has UI components that are ready to use, so all you have to do is add your content to it.
                    Bootsrtap utility and layout classes provide you with everything you need to create components and
                    adding responsitivity to your website. With Tailwind, however, you are much more involved in styling
                    your website. You need to create your own components, but Tailwind provides utility classes that can
                    help you speed up that processes.</p>
            </article>

            <table>
                <thead>
                    <tr>
                        <th>Bootstrap</th>
                        <th>Tailwind</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ul>
                                <li>Comes with ready to use components, utility classes, and responsive layoutss</li>
                                <li>Easier to use for beginner</li>
                                <li>Has been around much longer, have larger community, and more popular</li>
                                <li>Website built using Bootsrtap looks to similar</li>
                                <li>Less customizable</li>
                                <li>Larger file size due to its content</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Comes with a lot more utility classes</li>
                                <li>More customizable</li>
                                <li>More flexible than Bootstrap</li>
                                <li>Small file size, can be further reduce by removing unused classes</li>
                                <li>Makes your HTML difficult to read</li>
                                <li>Doesn't have components or layouts classes</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Article1