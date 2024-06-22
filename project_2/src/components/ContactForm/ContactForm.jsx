import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const ContactForm = () => {
    return (
    <section className={`${styles.container}`}>
        <div className={`${styles.contact_form}`}>
            <Button 
                text="VIA SUPPORT CHAT" 
                icon={<MdMessage fontSize="24px"/>}
            />
            <Button 
                text="VIA CALL" 
                icon={<IoMdCall fontSize="24px"/>}
            />
        </div>

        <div className={`${styles.form_image}`}>
            {/* <img src=""/> */}
        </div>
    </section> 

    );
};

export default ContactForm;