import React from "react";
import {Link} from "react-router-dom";
const FeedButtonBack = ({btnText, className, linkPath}) => {
    return(
        <Link className={className} to={linkPath}>{btnText}</Link>
    );
};
export default FeedButtonBack;