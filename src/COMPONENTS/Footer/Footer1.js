import React from 'react'
import veges from '../../ASSETS/veggies.jpg'
import './Footer1.css'

const Footer1 = () => {
  return (
    <div className='footer1'>
        <div className='left'>
            <img src={veges} alt='veges' />
        </div>
        <div className='right'>
            <h1>Fresh fruits and vegetables</h1>
            <p>We deliver fresh fruits and veggies at your doorstep.</p>
        </div>
    </div>
  )
}

export default Footer1