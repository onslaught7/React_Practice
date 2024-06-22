import styles from "./ContactForm.module.css";
import Button from "../Button/Button";

const ContactForm = () => {
    return (
    <section className={`${styles.container}`}>
        <div className={`${styles.contact_form}`}>
            <Button/>

        </div>

        <div className={`${styles.form_image}`}>
            {/* <img src=""/> */}
        </div>
    </section> 

    );
};

export default ContactForm;