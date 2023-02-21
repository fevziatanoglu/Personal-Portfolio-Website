import { useRef } from "react";
import MenuButton from "../Menu/menuButton";
import emailjs from "@emailjs/browser"

import "./getcontact.css"

function GetContact() {

    const emailForm = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_ikc7gy8", "template_r20b7nq", emailForm.current, "EjKtsnAZGVYwTgOfo").then(response => { alert("Email sent. I will be return soon:)"); }).catch(error => alert("There is an error please try later :/ ."));
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