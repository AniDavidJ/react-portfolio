import "./contact.scss"
import { useState } from "react";
// import shake from "../../../public/assets/shake.svg";

const Contact = () => {
    const [message, setMessage] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
        setMessage(true);
    };
    return (
      
        <div className="contact" id="contact">
            <div className="left">
                <img src="https://images.pexels.com/photos/3746957/pexels-photo-3746957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks for contact Me.</span>} 
                </form>
            </div>
            
        </div>
    )
}

export default Contact
