import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {

    const [name, setName] = useState("Kbs");
    const [email, setMail] = useState("@game.isthegame");
    const [text, setMessage] = useState("Kbs");

    const handleCall = () => {
        console.log("Call me +91 7735458624");
    }
;
    const handleChat = () => {
        console.log("Text me +91 7735458624");
    };

    const handleMail = () => {
        console.log("Mail me @game.isthegame");
    };

    const onSubmit = (event) => {
        // prevent the default function on submitting the button if.e the page refresh
        event.preventDefault();
        console.log("Name", event.target[0].value);
        console.log("Mail", event.target[1].value);
        console.log("Text", event.target[2].value);

        setName(event.target[0].value);
        setMail(event.target[1].value);
        setMessage(event.target[2].value);
    };

    return (
    <section className={`${styles.container}`}>
        <div className={`${styles.contact_form}`}>
            <div className={`${styles.top_btns}`}>
                <Button 
                    onClick={handleChat}
                    isBtn1 = {true}
                    text="VIA SUPPORT CHAT" 
                    icon={<MdMessage fontSize="24px"/>}
                />
                <Button 
                    onClick={handleCall}
                    isBtn1 = {true}
                    text="VIA CALL" 
                    icon={<IoMdCall fontSize="24px"/>}
                />
            </div>

            <div className={`${styles.bottom_btns}`}>
                <Button 
                    onClick={handleMail}
                    text="VIA EMAIL FORM"
                    icon={<MdOutlineMailOutline fontSize="24px"/>}
                />
            </div>

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
                    <label htmlFor="text">Text</label>
                    <textarea type="text" rows="8" name="message"/>
                </div>

                {/* when you wrap a buutton in div it doesn't take full width */}
                <div style={{
                    display: "flex",
                    justifyContent: "end",
                    }}>
                    <Button 
                        isBtn1 = {true}
                        text="SUBMIT" 
                    />
                </div>
            </form>

            <div>
                {name + " " + email + " " + text}
            </div>
        </div>

        <div className={`${styles.form_image}`}>
            <img src="/images/contact.svg" alt="contact image"/>
        </div>
    </section> 

    );
};

export default ContactForm;