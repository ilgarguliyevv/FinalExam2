import React from 'react'
import "./home.scss"
import Welcome from './Welcome'

const Home = () => {
  return (
    <div>
        <div className="main-section">
            <div className="main">
                <h1>Food and more.</h1>
                <p>By Chef Francis Smith</p>
            </div>
        </div>
        <Welcome/>
    </div>
  )
}

export default Home