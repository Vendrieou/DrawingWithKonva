import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import './Home.css'

const Home = () => {
    return (
        <div id="container">
            <Header />
            <main className="wrapper">
                <section className="object" id="object">
                    <ul>
                        <li>
                            <Link to="/"><p>Home</p></Link>
                        </li>
                        <li>
                            <Link to="/bus"><p>Bus</p></Link>
                        </li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Home
