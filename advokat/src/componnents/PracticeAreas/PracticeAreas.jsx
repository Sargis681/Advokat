import React from 'react'
import "../PracticeAreas/PracticeAreas.css"
import { HiArrowRight } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { selectContent } from '../../store/contentSlices/contentSlices';
// import { v4 as uuidv4 } from 'uuid';


function PracticeAreas() {
    const { PracticeAreas } = useSelector(selectContent)
    return (
        <div className='practiceAreas'>
            <div className="container">
                <p>-- What We Do --</p>
                <h1>Our Practice Areas</h1>
                <div className='boxBox'>
                    {
                        PracticeAreas.map((el,i) => (
                            <div key={i} className='Box'>
                                <img src={el.img} alt="" />
                                <div>
                                    <h4>{el.h4}</h4>
                                    <span>{el.span}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button>View All Practice Areas<HiArrowRight /> </button>
            </div>
        </div>
    )
}

export default PracticeAreas