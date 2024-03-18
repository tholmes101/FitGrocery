import React from 'react'
import payimg from '../../ASSETS/pay.png'
import logo from '../../ASSETS/logo.png'
import social from '../../ASSETS/social.png'
import './Footer2.css'

const Footer2 = () => {
  return (
    <div className='footer'>
        <div className='footerin1'>
          <div className='f1'>
            <img src={logo} alt='logo' className='logo'/>
            <p>FitGrocery is the leading online grocery store in the US. 
              We are committed to providing the best quality products at the
              best prices.</p>
              <div className='socialimg'>
            <img src={social} alt='socal' className='social'/>
            </div>
          </div>
          <div className='f2'>
            <h3>About Us</h3>
            <p>About us</p>
            <p>Contact us</p>
            <p>About team</p>
            <p>Customer Support</p>
          </div>
          <div className='f2'>
            <h3>Our Information</h3>
            <p>Privacy policy update</p>
            <p>Terms and Conditions</p>
            <p>Return Policy</p>
            <p>Site Map</p>
          </div>
          <div className='f2'>
            <h3>Subscribe Now</h3>
            <p>Subscribe your email for newsletter and featured news based on your interest.</p>
            <div className='inputcontainer'>
              <span className='icon1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
              </svg>

              </span>
              <input type='text' placeholder='Enter your email' />
              <span className='icon2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
              </span>
            </div>
          </div>
        </div>
        <div className='footerin2'>
            <h3>Geeks for Geeks React Project, Inc. All rights reserved.</h3>
            <img src={payimg} alt='payimg'/>
        </div>
      </div>
  )
}

export default Footer2