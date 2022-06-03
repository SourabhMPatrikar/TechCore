import React from "react";
const FooterCopyright = () => {
    return(
        <div className="container-fluid">
            <div className="footer-copyright"> 
                <div className="lefter"><p>Copyright &copy; 2022 - All Rights Reserved - <a href="#"><span className="tech">Tech</span><span className="core">Core</span></a></p></div>
                <div className="righter">
                    <nav className="footer-nav">
                        <a href="">Sitemap</a>
                        <a href="">Privacy</a>
                    </nav>
                </div>
            </div>
        </div>
    );
}
export default FooterCopyright;