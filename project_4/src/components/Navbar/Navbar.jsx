import React from 'react'
import Button from '../Button/Button'
import styles from './Navbar.module.css'
import { LuMenuSquare } from "react-icons/lu";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";
import { IoMdTrendingUp } from "react-icons/io";
import { PiChefHatBold } from "react-icons/pi";
import { useState } from 'react';


const Navbar = ({currentPage, setCurrentPage}) => {
    const icons = [
    <PiChefHatBold />, <IoMdTrendingUp />,
    <FaRegCircleQuestion />, <MdOutlineMarkEmailUnread />
    ]

    const btnNames = ['CHEFS', 'POPULAR', 'ABOUT', 'CONTACT']

    return (
        <nav className={`${styles.navbar} container`}>
            <div className={styles.logo}>
                <img src="/images/logo_txt.png"
                    onClick={() => setCurrentPage("HOME")}
                />
            </div>

            <div className={styles.navBtns}>
                {
                    btnNames.map((name, index) => (
                        <Button
                            key={index}
                            buttonType="btn1"
                            icon={icons[index]}
                            text = {name} 
                            onClick={() => setCurrentPage(name)}
                        />
                    ))
                }
            </div>

            <div className={styles.user}>
                <Button 
                    buttonType="btn2"
                    icon={<MdAccountCircle />}
                />
                <Button 
                    buttonType="btn2"
                    icon={<BiSolidDish />}
                />
            </div>
        </nav>
  )
}

export default Navbar