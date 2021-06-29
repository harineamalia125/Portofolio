import { useState } from "react";
import "./contact.scss"

export default function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact" id="contact">
            <div className="left"></div>
            <img src="assets/pngwing.com.png" alt=""/>
            <div className="right">
                <h2>Wanna Join Our Crew? Let Us Know!</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, soon we will welcome you as our crew!</span>}
                </form>
            </div>
            
        </div>
    )
}
