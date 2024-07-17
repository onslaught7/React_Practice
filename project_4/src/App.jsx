import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import  LandingPage from '../src/components/LandingPage/LandingPage.jsx'
import  Description from '../src/components/Description/Description'
import  PopularityPage from '../src/components/PopularityPage/PopularityPage'
import  ContactUs from '../src/components/ContactUs/ContactUs'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch(currentPage){
      case "HOME":
        return <LandingPage />
      case "MENU":
        return <Menu />
      case "POPULAR":
        return <PopularityPage />
      case "ABOUT":
        return <Description />
      case "CONTACT":
        return <ContactUs />
      default:
        return <LandingPage />
    }
  };

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
    

  )
}

export default App
