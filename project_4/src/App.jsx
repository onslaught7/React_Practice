import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import LandingPage from '../src/components/LandingPage/LandingPage.jsx'
import Description from '../src/components/Description/Description'
import ContactUs from '../src/components/ContactUs/ContactUs'
import Chef from '../src/components/Chef/Chef.jsx'
import MenuPage from '../src/components/MenuPage/MenuPage.jsx'
import Signup from '../src/components/Signup/Signup.jsx';
import Tray from '../src/components/Tray/Tray.jsx'
import './App.css'


function App() {
  const [currentPage, setCurrentPage] = useState("HOME");

  const renderPage = () => {
    switch(currentPage){
      case "HOME":
        return <LandingPage />
      case "CHEFS":
        return <Chef />
      case "MENU":
        return <MenuPage />
      case "ABOUT":
        return <Description />
      case "CONTACT":
        return <ContactUs />
      case "SIGNUP":
        return <Signup />
      case "TRAY":
        return <Tray />
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
