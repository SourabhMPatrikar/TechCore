import React from "react";
import FooterStrip from "./Component/FooterStrip/";
import FooterContact from "./Component/FooterContact/";
import FooterNavigation from "./Component/FooterNavigation/";
import FooterCopyright from "./Component/FooterCopyright/";
const Footer = () => {
  return (
    <footer>
      <FooterStrip />
      <FooterContact />
      <FooterNavigation />
      <FooterCopyright />
    </footer>
  );
};
export default Footer;