import {  Outlet } from 'react-router-dom'
import React from 'react'
import Footer from './Footer/Footer'
import ToolBarNavigate from './ToolBarNavigate/ToolBarNavigate'

function Layout() {
  return (
    <>
      <ToolBarNavigate />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout