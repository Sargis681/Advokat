import React from 'react'
import "./ServiceBox.css"
import { useSelector } from 'react-redux'
import { selectContent } from '../../store/contentSlices/contentSlices'
// import { v4 as uuidv4 } from 'uuid';

function ServiceBox() {
    const { ServiceBox } = useSelector(selectContent)
    return (
        <div className='serviceBox'>
            <div className="container">
                {
                    ServiceBox.map((el,i )=> (
                        <div key={i} className='box1'>
                            <img src={el.img} alt="" />
                            <div>
                                <h4>{el.h4}</h4>
                                <span>{el.span}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ServiceBox