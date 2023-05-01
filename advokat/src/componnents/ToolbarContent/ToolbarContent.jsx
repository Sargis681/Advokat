import React from 'react'
import "../ToolbarContent/ToolbarContent.css"
import { HiArrowRight } from 'react-icons/hi';
import {  useSelector } from 'react-redux';
import { selectContent } from '../../store/contentSlices/contentSlices';

function ToolbarContent() {
  const {toolbarContent} = useSelector(selectContent)
 
  return (
    <div className='toolbarContent'>
        <div className="container">
            <div className='contLeft'>
                <h2>{toolbarContent.help}</h2>
                <h1>{toolbarContent.right}</h1>
                <h4>{toolbarContent.pleasure}</h4>
                    <button >Contact US <HiArrowRight/> </button>
            </div>
            <div className='contRight'>
                <img  src="https://rstheme.com/products/html/advokat/images/slider/ly1.png" alt="sa" />
                
            </div>

        </div>
    </div>
  )
}

export default ToolbarContent