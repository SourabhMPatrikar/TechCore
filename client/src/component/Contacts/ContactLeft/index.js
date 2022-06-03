import React from "react";
const ContactLeft = () => {
    return(
        <aside className="panel-left">
            <aside className="panel-left-content">
                <div className="panel-left-box">
                    <div className="heading"><h3>Shop Address</h3></div>
                    <div className="contact-connection">
                        <p>301, Suvratnath Apartment,</p>
                        <p>Plot No 293-A,</p>
                        <p>Silicon City, Rau,</p>
                        <p>Indore, Madhya Pradesh, 452001.</p>
                    </div>
                </div>
                <div className="panel-left-box">
                    <div className="heading"><h3>Shop Hours</h3></div>
                    <div className="contact-connection">
                        <p>MON - FRIDAY: 8 to 9 PM</p>
                        <p>SAT - SUN: 10 to 8 PM</p>
                    </div>
                </div>
                <div className="panel-left-box">
                    <div className="heading"><h3>Contact</h3></div>
                    <div className="contact-connection">
                        <p>Phone: +00 111 222 3333</p>
                        <p>Email: support@fruitkha.com</p>
                    </div>
                </div>
            </aside>
        </aside>
    );
}
export default ContactLeft;