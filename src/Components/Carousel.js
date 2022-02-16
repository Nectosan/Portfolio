import React from 'react'
import '../Assets/styles/Carousel.css';
import image from '../Assets//img/img1.jpg';

function Carousel() {
  return (
      <div className='container'>
        <img className='imgCarousel' src={image} alt='Carousel'></img>
        <div className="centered">??? 
            <div className="sous-titre"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <button>Get in touch</button>
        </div>
       
    </div>
  )
}

export default Carousel