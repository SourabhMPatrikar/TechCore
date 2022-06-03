import React from "react";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
const Contacts = () => {
    return(
        <div className="panel-holder contact">
            <ContactLeft />
            <ContactRight />
        </div>
        
    )
}
export default Contacts;