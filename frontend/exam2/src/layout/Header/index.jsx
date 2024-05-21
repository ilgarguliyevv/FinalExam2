import React from 'react'
import { Link } from 'react-router-dom'
import "./header.scss"
import 'swiper/css/navigation';


const Header = () => {
  return (
    <div id='header'>
        <div className="header-main">
            <h1>Pulse.</h1>
            <div className="hero">
                <nav>
                    <ul>
                        <Link>
                        Home
                        </Link>
                        <Link>About Us</Link>
                        <Link>Restaurant</Link>
                        <Link to="/basket">
                            Basket
                        </Link>
                        <Link to="/wishlist">
                            Wishlist
                        </Link>
                    </ul>
                </nav>
            </div>
            <div className='header-contact'>
                <p className='contact-reservations'>Reservations</p>
                <p> 652-345 3222 11</p>
                    </div>
        </div>
    </div>
  )
}

export default Header