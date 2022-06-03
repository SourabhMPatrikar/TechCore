import React from "react";
import CommentForm from "../../../common/CommentForm";
const FeedComment = () => {
    return(
        <div className="blog-comment">
            <h2>Leave a comment</h2>
            <p>If you have a comment dont feel hesitate to send us your opinion.</p>
            <CommentForm />
        </div>
    );
};
export default FeedComment;