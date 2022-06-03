import React from "react";
const FooterTrendingNewsItem = (item) => {
    const {heading, para, link} = item;
    return(
        <li>
            <h6><a href={link}>{heading}</a></h6>
            <p><a href={link}>{para}</a></p>
        </li>
    );
};
export default FooterTrendingNewsItem;