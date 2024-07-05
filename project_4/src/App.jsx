import { useState } from 'react'
import  LandingPage from '../src/components/LandingPage/LandingPage.jsx'
import  Description from '../src/components/Description/Description'
import  PopularityPage from '../src/components/PopularityPage/PopularityPage'
import  ContactUs from '../src/components/ContactUs/ContactUs'
import './App.css'

function App() {

  return (
    <div>
      <LandingPage />
      <Description />
      <PopularityPage />
      <ContactUs />
    </div>
  )
}

export default App
