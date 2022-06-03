import React from "react";
const FooterContactMedium = ({icon, heading, text, link}) => {
    return (
        <li>
            <div className="contact-medium">
                <a href={link}>
                    <i className={icon}></i>
                </a>
                <span>
                    <strong>{heading}</strong> {text}
                </span>
            </div>
        </li>
    );
};
export default FooterContactMedium;
