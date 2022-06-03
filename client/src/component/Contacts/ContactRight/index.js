import React from "react";
const ContactRight = () => {
    return(
        <aside className="panel-right">
            <aside className="heading"><h2>Feed List</h2></aside>
            <aside className="panel-right-content">
                <div className="contact-box">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!</p>
                    <div className="contact-form">
                        <div className="input-group mb-4">
                            <label className="input-group-text">Name</label>
                            <input type="text" aria-label="First name" className="form-control" />
                            <input type="text" aria-label="Last name" className="form-control" />
                        </div>
                        <div className="row">
                            <div className="input-group mb-4 col">
                                <label className="input-group-text">Email</label>
                                <input type="text" aria-label="First name" className="form-control" />
                            </div>
                            <div className="input-group mb-4 col">
                                <label className="input-group-text">Phone</label>
                                <input type="text" aria-label="First name" className="form-control" />
                                <input type="text" aria-label="Last name" className="form-control" />
                            </div>
                        </div>
                        <div className="input-group mb-4">
                            <label className="input-group-text">Subject</label>
                            <input type="text" aria-label="First name" className="form-control" />
                        </div>
                        <div className="input-group mb-4">
                            <label className="input-group-text">Message</label>
                            <textarea type="text" rows="5" aria-label="First name" className="form-control"></textarea>
                        </div>
                        <div className="row">
                            <div className="input-group mb-4 col">
                                <button className="btn btn-primary form-control">Submit</button>
                            </div>
                            <div className="input-group mb-4 col">
                                <button className="btn  btn-default form-control">Cencel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </aside>
    );
}
export default ContactRight;