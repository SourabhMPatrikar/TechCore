import React from "react";
import FooterTrendingNews from "./FooterTrendingNews/";
import FooterEmailSubscription from "./FooterEmailSubscription/";
import FooterLatestNews from "./FooterLatestNews/";
import FooterTopBlogger from "./FooterTopBloggers/";

const FooterNavigation = () => {
    return(
        <div className="container-fluid">
            <div className="footer-navigation">
                <ul> 
                    <li>
                        <FooterTrendingNews />
                    </li>
                    <li>
                        <FooterEmailSubscription />
                    </li>
                    <li>
                        <FooterLatestNews />
                    </li>
                    <li>
                        <FooterTopBlogger />
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default FooterNavigation;