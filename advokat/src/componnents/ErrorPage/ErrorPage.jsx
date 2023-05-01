import React from 'react'
import { Link } from 'react-router-dom'
import "./ErrorPage.css"

function ErrorPage() {
  return (
    <>
      <div className="containerError">
        <div> </div>
        <h1>EROR 404</h1>
        <h2>Please Click Go to Hompage  <Link className='R' to="/">Hom</Link></h2>
      </div>
    </>
  )
}

export default ErrorPage