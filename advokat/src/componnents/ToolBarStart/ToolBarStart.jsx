import React from 'react'
import { ImFacebook } from 'react-icons/im';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import Time from '../Time/Time';
import { selectContent } from '../../store/contentSlices/contentSlices';
import { useSelector } from 'react-redux';

function ToolBarStart() {
  const content = useSelector(selectContent)
  function handleButtonClick() {
    window.scrollTo(0, 3100);
  }
  return (
    <div className='toolBarStart'>
      <div className='toolBarStartSpan'>
        <span> <FaEnvelope className='iconS' /> {content.ToolBarStart.mail} </span>
        <span> <FaPhoneAlt className='iconS' />{content.ToolBarStart.number}</span>
        <span> <FaClock className='iconS' /> <Time /></span>
      </div>
      <div className='leftIcons'>
        <span><ImFacebook className='iconS' /></span>
        <span><FaTwitter className='iconS' /></span>
        <span> <FaInstagram className='iconS' /></span>
        <span> <AiFillLinkedin className='iconS' /></span>
        <button onClick={handleButtonClick}>Free Consultation</button>
      </div>

    </div>
  )
}

export default ToolBarStart