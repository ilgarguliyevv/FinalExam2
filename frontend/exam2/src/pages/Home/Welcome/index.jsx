import React from 'react'
import "./welcome.scss"
import Testimonials from '../Testimonials'

const Welcome = () => {
  return (
    <div>
        <div className="welcome">
            <div className="welcome-section">
                <div className="light-left"></div>
                <div className="welcome-word">Welcome</div>
                <div className="light-right"></div>
            </div>
            <div className="year-word">
              <div className="first">
                <h1>2002</h1>
                <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
              </div>
              <div className="second">
                <h1>2010</h1>
                <p>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</p>
              </div>    <div className="third">
                <h1>2018</h1>
                <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
              </div>
            </div>
            <img className='welcome-img' src="https://preview.colorlib.com/theme/pulse/img/sign.png.webp" alt="" />
        </div>
        <Testimonials/>
    </div>
  )
}

export default Welcome