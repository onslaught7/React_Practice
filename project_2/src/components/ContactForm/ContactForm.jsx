import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactForm = () => {
    return (
    <section className={`${styles.container}`}>
        <div className={`${styles.contact_form}`}>
            <div className={`${styles.top_btns}`}>
                <Button 
                    isBtn1 = {true}
                    text="VIA SUPPORT CHAT" 
                    icon={<MdMessage fontSize="24px"/>}
                />
                <Button 
                    isBtn1 = {true}
                    text="VIA CALL" 
                    icon={<IoMdCall fontSize="24px"/>}
                />
            </div>

            <div className={`${styles.bottom_btns}`}>
                <Button 
                    text="VIA EMAIL FORM"
                    icon={<MdOutlineMailOutline fontSize="24px"/>}
                />
            </div>

            <form>
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
        </div>

        <div className={`${styles.form_image}`}>
            <img src="/images/contact.svg" alt="contact image"/>
        </div>
    </section> 

    );
};

export default ContactForm;