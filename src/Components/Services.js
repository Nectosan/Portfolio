import React from 'react'
import '../Assets/styles/Services.css';

function Services() {
  return (
    <div className="Services">
       <div className='Titre'>Services</div>
       <div className='sous-titre'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

        <div className="Commission">
            <img className="Head" src={require('../Assets/img/logo.png')} alt="head"/>
            <img className="Head" src={require('../Assets/img/logo.png')} alt="head"/>
            <img className="Head" src={require('../Assets/img/logo.png')} alt="head"/>

        </div>
       

        <div className="Tuto">Process + csp</div>
    </div>
  )
}

export default Services