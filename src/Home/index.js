import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div id="container">
            <main className="wrapper">
                <section className="object" id="object">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/bus">Bus</Link>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    )
}

export default Home
