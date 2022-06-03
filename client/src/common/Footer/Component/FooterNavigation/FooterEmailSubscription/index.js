import React from "react";
import FooterNavigationHeading from "../../Common/FooterNavigationHeading";
import EmailSubscription from "../../../../EmailSubscription/index.js";
const FooterEmailSubscription = () => {
    return(
        <>
            <FooterNavigationHeading headingClass="heading" headingText="Get in Touch!"/>
            <p>Pede ullamcorper facilisis bibendum nulla elit gravida elit vel suscipit urna.</p>
            <EmailSubscription />
        </>
    );
};
export default FooterEmailSubscription;