import styles from "./ContactForm.module.css";

const ContactForm = () => {
    return (
    <section className={`${styles.container}`}>
        <div className={`${styles.contact_form}`}>
            <div className={`${styles.form_btn}`}>
                <button className={`${styles.btn1}`}>
                    <img src="/images/vector.png" alt=""/>
                    <p> VIA CHAT SUPPORT</p>
                </button>
                <button className={`${styles.btn1}`}>
                    <img src="/images/phone.png" alt=""/>
                    <p> VIA CALL</p>
                </button>
                <button className={`${styles.btn2}`}>
                    <img src="/images/msg.png" alt=""/>
                    <p> VIA EMAIL FORM </p>
                </button>
            </div>

            <div>

            </div>

        </div>

        <div className={`${styles.form_image}`}>
            {/* <img src=""/> */}
        </div>
    </section> 

    );
};

export default ContactForm;