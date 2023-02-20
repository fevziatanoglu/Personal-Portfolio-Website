import { useRef } from "react";
import MenuButton from "../Menu/menuButton";
import emailjs from "@emailjs/browser"

import "./getcontact.css"

function GetContact() {

    const emailForm = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_ikc7gy8", "template_r20b7nq", emailForm.current, "EjKtsnAZGVYwTgOfo").then(response => {alert("Email sent. I will be return soon:)");}).catch(error => alert("There is an error please try later :/ ."));
        console.log(emailForm.current);
    }

    return <div className="main-container">
        <MenuButton />
        <div className="main-content-50">


            <form ref={emailForm} onSubmit={sendEmail}>
                <label>Name <input type="text" name="user_name" placeholder="Name" /></label>
                <label>Email  <input type="email" name="user_email" placeholder="Email" /></label>
                <label>Message<textarea name="message" placeholder="Your Message" /></label>
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
}

export default GetContact;