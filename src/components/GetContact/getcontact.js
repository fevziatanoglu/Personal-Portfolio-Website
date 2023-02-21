import { useRef } from "react";
import MenuButton from "../Menu/menuButton";
import emailjs from "@emailjs/browser"

import ids from "./emailJS_ids.json"
import "./getcontact.css"

function GetContact() {

    const emailForm = useRef();
    console.log(ids);


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(`${ids.SERVICE_ID}`, `${ids.TEMPLATE_ID}`, emailForm.current, `${ids.PUBLIC_ID}`).then(response => { alert("Email sent. I will be return soon:)"); }).catch(error => alert("There is an error please try later :/ ."));
        console.log(emailForm.current);
    }

    return <div className="main-container">
        <MenuButton />

        <form ref={emailForm} onSubmit={sendEmail}>
            <div className="main-content-50 form-content">
                <label>Name <input type="text" name="user_name" placeholder="Name" /></label>
                <label>Email  <input type="email" name="user_email" placeholder="Email" /></label>
            </div>

            <div className="main-content-50 form-content">
                <label>Message<textarea name="message" placeholder="Your Message" /></label>
                <button className="send-button" type="submit">Send</button>
            </div>

        </form>

    </div>
}

export default GetContact;