import React from "react";
const CommentForm = () => {
    return(
        <div className="blog-comment-form">
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">First Name</span>
                <input type="text" className="form-control" placeholder="Your First Name" aria-label="FirstName" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Last Name</span>
                <input type="text" className="form-control" placeholder="Your Last Name" aria-label="LastName" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Email</span>
                <input type="email" className="form-control" placeholder="Your Email ID" aria-label="EmailID" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Comment</span>
                <textarea className="form-control" placeholder="your Comment" aria-label="Comment" aria-describedby="basic-addon1"></textarea>
            </div>
            <div className="blog-btns">
                <div className="btn-group">
                    <button className="btn btn-warning">Save</button>
                    <button className="btn btn-secondary">Cancel</button>
                </div>
            </div>
        </div>
    );
};
export default CommentForm;