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
        </div>

        <div className={`${styles.form_image}`}>
            {/* <img src=""/> */}
        </div>
    </section> 

    );
};

export default ContactForm;