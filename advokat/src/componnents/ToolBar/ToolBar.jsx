import React from 'react'
import "../ToolBar/ToolBar.css"
import ToolbarContent from '../ToolbarContent/ToolbarContent'

function ToolBar() {
  return (
    <div className='toolBar'>
      <div className='toolBarBackground'>
        <div className="container">
        </div>
      </div>
      <ToolbarContent />
    </div>
  )
}

export default ToolBar