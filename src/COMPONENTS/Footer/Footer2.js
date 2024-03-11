import React from 'react'
import payimg from '../../ASSETS/pay.png'

const Footer2 = () => {
  return (
    <div className='footer'>
        <div className='footerin1'></div>
        <div className='footerin2'>
            <p>Geeks for Geeks React Project, Inc. All rights reserved.</p>
            <img src={payimg} alt='payimg'/>
        </div>
    </div>
  )
}

export default Footer2