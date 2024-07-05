import React from 'react'
import Button from '../Button/Button'
import styles from './Navbar.module.css'
import { LuMenuSquare } from "react-icons/lu";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { BsQuestionSquare } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";


const Navbar = () => {
    const icons = [
    <LuMenuSquare />, <MdOutlineDeliveryDining />,
    <BsQuestionSquare />, <MdOutlineMarkEmailUnread />
    ]

    const btnNames = ['Menu', 'Delivery', 'About', 'Contact']

    return (
        <nav className={`${styles.navbar} container`}>
            <div className={styles.logo}>
                <img src="/images/logo_txt.png"></img>
            </div>

            <div className={styles.navBtns}>
                {
                    btnNames.map((name, index) => (
                        <Button
                            key={index}
                            icon={icons[index]}
                            text = {name} 
                        />
                    ))
                }
            </div>

            <div className={styles.user}>
                <button></button>
                <button></button>
            </div>
        </nav>
  )
}

export default Navbar