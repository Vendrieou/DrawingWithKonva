import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
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
    )
}

export default Home
