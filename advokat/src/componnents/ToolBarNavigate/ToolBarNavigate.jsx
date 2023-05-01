import React from 'react'
import "../ToolBarNavigate/ToolBarNavigate.css"
import ToolBarStart from '../ToolBarStart/ToolBarStart'
import { NavLink } from 'react-router-dom'

function ToolBarNavigate() {
  return (
    <div className="toolBarNavigate">
      <ToolBarStart />
      <div className="container">
        <img style={{ width: "300px" }} src="https://rstheme.com/products/html/advokat/images/white-logo.png" alt="" />
        <div className='navigation'>
          <NavLink  to="/">Home</NavLink>
          <NavLink  to="/about">About Us</NavLink>
          <NavLink  to="/blog">Blog</NavLink>
        </div>

      </div>
    </div>
  )
}

export default ToolBarNavigate