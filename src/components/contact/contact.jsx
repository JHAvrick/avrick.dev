import React, { useState, useRef } from 'react';
import './contact.css';

function Contact(props) {

    const nameInputEl = useRef(null);
    const emailInputEl = useRef(null);
    const messageInputEl = useRef(null);
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        //let reqUrl = "http://localhost:8080/contactme";
        let reqUrl = "https://avrick-portfolio.herokuapp.com/contactme";
        let reqBody = {
            name: nameInputEl.current.value,
            email: emailInputEl.current.value,
            message: messageInputEl.current.value
        }

        try {
            (async () => {
                const rawResponse = await fetch(reqUrl, {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(reqBody)
                });
                const content = await rawResponse.json();
                
                console.log(content);

                /**
                 * Show the success message for a few seconds
                 */
                if (content.status === "success"){
                    setShowSuccessMsg(true);
                    setTimeout(() => setShowSuccessMsg(false), 5000);
                }

            })();
        } catch (err) {
            console.warn(err);
        }

    }

    return (
        <section className="contact">
            <h2 className="contact__header">Contact</h2>
            <form style={{ display: showSuccessMsg ? "none" : "flex" }} onSubmit={handleFormSubmit} className="contact__form">
                <input ref={nameInputEl} className="contact__form-input" type="text" placeholder="Name" required />
                <input ref={emailInputEl} className="contact__form-input" type="email" placeholder="Email" required /> 
                <textarea ref={messageInputEl} className="contact__form-input contact__message-input" type="textarea" placeholder="Message" required /> 
                <input className="contact__form-submit" type="submit" value="Submit" />
            </form>
            <p  style={{ display: showSuccessMsg ? "initial" : "none" }}>Thank You! Your message was sent successfully.</p>
        </section>
    );
}

export default Contact;
