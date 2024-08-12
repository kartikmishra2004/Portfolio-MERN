import React, { useState } from 'react'
import "./form.css";
import { MdOutlineDownloadDone } from "react-icons/md";
import loading from "../../Assets/loading.gif";

const Contact = () => {

    const [isLoading, setIsLoading] = useState(false);

    const [message, setMessage] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [send, setSend] = useState("Send message");

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setMessage({
            ...message,
            [name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch("https://kmportfoliobackend.vercel.app/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(message),
            });
            setMessage({
                name: "",
                email: "",
                message: "",
            });
            setIsLoading(false);
            setSend(<MdOutlineDownloadDone />);
        } catch (error) {
            console.log("Failed to send message!!");
        }
    }

    return (
        <>
            <div className="fcf-body">

                <div id="fcf-form">
                    <h1 className="fcf-h3">GET IN TOUCH</h1>

                    <form onSubmit={handleSubmit} id="fcf-form-id" className="fcf-form-class">

                        <div className="fcf-form-group">
                            <label htmlFor="Name" className="fcf-label">Your name</label>
                            <div className="fcf-input-group">
                                <input autoComplete='off' onChange={handleChange} value={message.name} type="text" id="Name" name="name" className="fcf-form-control" required />
                            </div>
                        </div>

                        <div className="fcf-form-group">
                            <label htmlFor="Email" className="fcf-label">Your email address</label>
                            <div className="fcf-input-group">
                                <input autoComplete='off' onChange={handleChange} value={message.email} type="email" id="Email" name="email" className="fcf-form-control" required />
                            </div>
                        </div>

                        <div className="fcf-form-group">
                            <label htmlFor="Message" className="fcf-label">Your message</label>
                            <div className="fcf-input-group">
                                <textarea autoComplete='off' onChange={handleChange} value={message.message} id="Message" name="message" className="fcf-form-control" rows="6" maxLength="3000" required></textarea>
                            </div>
                        </div>

                        <div className="fcf-form-group">
                            <button disabled={isLoading ? true : false} type="submit" id="fcf-button" className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">{isLoading ? (<img src={loading} className='loader-img'></img>) : send}</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Contact
