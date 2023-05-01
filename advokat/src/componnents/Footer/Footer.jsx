import React from 'react'
import "./Footer.css"
import FootTop from '../FootTop/FootTop'
import FootBot from '../FootBot/FootBot'

function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <FootTop />
      </div>
      <FootBot />
    </div>
  )
}

export default Footer