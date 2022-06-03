import React from "react";

const FooterButtonMore = (props) => {
    const {linkText} = props;
    return(
        <div className="btn-box lefter">
            <button className="btn btn-warning">{linkText}</button>
        </div>
    );
};
export default FooterButtonMore;