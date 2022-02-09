import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { MdMail } from 'react-icons/md';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

export default function ContactForm() {
    const[toSend, setToSend] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
    })
    const[messageSent, setMessageSent] = useState(false);
    const[responseMessage, setResponseMessage] = useState('');
    const[errorMessage, setErrorMessage] = useState('');

    const sendEmail = (e) =>{
        e.preventDefault();
        setMessageSent(false);
        setResponseMessage('');
        setErrorMessage('');
        if(!toSend.user_name || !toSend.user_email || !toSend.subject || !toSend.message){
            setErrorMessage("Please fill out all required fields.");
        }else{
            send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID)
            .then((result)=>{
                setResponseMessage("Message sent!");
                setMessageSent(true);
            }, (error)=>{
                setResponseMessage("Something went wrong.");
            });
        }
        
    }
    const handleChange = (e) =>{
        setToSend({ ...toSend, [e.target.name]: e.target.value});
    }

    const handleClearForm = () =>{
        setToSend({
            user_name: '',
            user_email: '',
            subject: '',
            message: ''
        })
    }

    return (<>
        {!messageSent ? <form className="contact-form" autoComplete="off" onSubmit={sendEmail}>
            <div className="input-control">
                <input type="text" name="user_name" subject="subject" placeholder="your name" value={toSend.user_name} onChange={handleChange}/>
            </div>
            <div className="input-control">
                <input type="email" name="user_email" id="email" placeholder="email" value={toSend.user_email} onChange={handleChange}/>
            </div>
            <div className="input-control">
                <input type="text" name="subject" id="subject" placeholder="subject" value={toSend.subject} onChange={handleChange}/>
            </div>
            <div className="input-control">
                <textarea name="message" id="message" rows="6" value={toSend.message} onChange={handleChange}></textarea>
            </div>
            {errorMessage && <div className="form-error-message">{errorMessage}</div>}

            <div className="form-btns">
                <button type="submit" className="btn-primary rounded">Submit</button>
                <button type="button" className="btn-primary rounded" onClick={handleClearForm}>Clear</button>
            </div>
        </form> :
        <div className="form-message">
            <span className="form-message-icon"><MdMail/></span>
            <span>{responseMessage}</span></div>
    }</>
    )
}
