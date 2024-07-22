import React from 'react'
import styles from './Signup.module.css'
import Button from "../Button/Button";
import { useState } from "react";

const Signup = () => {
    const [name, setName] = useState("Name");
    const [email, setMail] = useState("abcd@gamil.com");
    const [text, setMessage] = useState("Your Text");

    const handleCall = () => {
        console.log("Call me +91 7735458624");
    }
;
    const handleChat = () => {
        console.log("Text me +91 7735458624");
    };

    const handleMail = () => {
        console.log("Mail me wxyz@gmail.com");
    };

    const onSubmit = (event) => {
        // prevent the default function on submitting the button i.e the page refresh
        event.preventDefault();
        console.log("Name", event.target[0].value);
        console.log("Mail", event.target[1].value);
        console.log("Text", event.target[2].value);

        setName(event.target[0].value);
        setMail(event.target[1].value);
        setMessage(event.target[2].value);
    };

    return (
    <section className={`${styles.container} container`}>
        <div className={`${styles.contact_form}`}>

            <form onSubmit={onSubmit}>
                <div className={styles.form_input}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"/>
                </div>
                <div className={styles.form_input}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="name"/>
                </div>
                <div className={styles.form_input}>
                    <label htmlFor="password">Password</label>
                    <input type="password" rows="8" name="password"/>
                </div>

                {/* when you wrap a buutton in div it doesn't take full width */}
                <div  className={styles.submit_btns}>
                    <Button 
                        buttonType="btn3"
                        text="CREAT ACCOUNT" 
                    />
                    <Button 
                        buttonType="btn3"
                        text="LOG IN" 
                    />
                </div>
            </form>
        </div>
    </section> 

    );
}

export default Signup