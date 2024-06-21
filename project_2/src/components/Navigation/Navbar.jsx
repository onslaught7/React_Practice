// import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} container`}>
        <div className="nav-logo">
        <img src="/images/pngegg.png" alt="contact page logo"/>
        </div>

        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>


    </nav>
  )
}

export default Navbar