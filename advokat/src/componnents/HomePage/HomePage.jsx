import React from 'react'
import ToolBar from '../ToolBar/ToolBar'
import ServiceBox from '../ServiceBox/ServiceBox'
// import HomeAbout from '../../HomeAbout/HomeAbout'
import PracticeAreas from '../PracticeAreas/PracticeAreas'
import CasesResult from '../CasesResult/CasesResult'
import QuestionForm from '../QuestionForm/QuestionForm'
import HomeAbout from '../HomeAbout/HomeAbout'

function HomePage() {
  return (
    <div>
      <ToolBar />
      <ServiceBox />
      <HomeAbout />
      <PracticeAreas />
      <CasesResult />
      <QuestionForm />
    </div>
  )
}

export default HomePage