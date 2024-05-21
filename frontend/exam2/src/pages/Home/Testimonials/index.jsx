import React from 'react'
import "./testimonials.scss"
import OurServices from '../OurServices';

const Testimonials = () => {
  return (
    <div>
      <div id='section'>
        <div className="testimonials">
          <div className="test-main">
            <div className="test-left"></div>
            <div className="test">Testimonials</div>
            <div className="test-right"></div>
          </div>
          <div className="dirnaq">"</div>
          <div className="test-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, nihil. Dolorem officia est sequi ut facilis ducimus! Assumenda, officiis commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero molestiae voluptates inventore provident amet illo omnis tenetur ipsa fuga!</div>
          <div className="df">
            <div className='Ted'>Ted Champan</div>
            <div className='client'>,Client</div>
          </div>
        </div>
      </div>
      <div>
<OurServices/>
      </div>
    </div>
  )
}

export default Testimonials;