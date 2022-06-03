import React from "react";
import FooterContactMedium from "./FooterContactMedium";
const FooterContact = () => {
    const contactData = [
        {
            icon:'fa fa-phone',
            heading:'Give us a call:',
            text:'+00 (123) 456 7890',
            link:'https://www.google.com/',
            _id:'FC01'
        },
        {
            icon:'fa fa-envelope',
            heading:'Send us a mail:',
            text:'support@domain.com',
            link:'https://www.google.com/',
            _id:'FC02'
        },
        {
            icon:'fa fa-clock',
            heading:'Monday - Saturday:',
            text:'08.00am - 18.00pm',
            link:'https://www.google.com/',
            _id:'FC03'
        },
        {
            icon:'fa fa-map-marker-alt',
            heading:'Come visit us:',
            text:'Directions to',
            link:'https://goo.gl/maps/FoHAR5FDBzMgHVqR9',
            _id:'FC04'
        }
    ];
    // console.log("Dummy Data : ----->",contactData);

    const contactDataRepeater = contactData.map((item)=>{
        const {icon, heading, text, link, _id} = item;
        // const location = <span>Directions to <a href="#">our location</a></span>;
        // const condition = heading = "Come visit us:" ? {text , location} : text;
        return(
            <FooterContactMedium iconClass={icon} heading={heading} text={text} link={link} key={_id} />
        );
    });

    
    // const contactData = 
    return(
        <div className="container-fluid">
            <div className="footer-contact">
                <ul> {contactDataRepeater}
                    {/* <FooterContactMedium iconClass="fa fa-phone" heading="Give us a call:" text="+00 (123) 456 7890" />
                    <FooterContactMedium iconClass="fa fa-envelope" heading="Send us a mail:" text="support@domain.com" />
                    <FooterContactMedium iconClass="fa fa-clock" heading="Monday - Saturday:" text="08.00am - 18.00pm" />
                    <FooterContactMedium iconClass="fa fa-map-marker-alt" heading="Come visit us:" text={location}  /> */}
                </ul>
            </div>
        </div>
    );
}
export default FooterContact;