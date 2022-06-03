import React from "react";
const FooterLatestNewsItem = (newsContent) => {
    const {Para, day, date, month, year, link} = newsContent;
    return(
        <li>
            <article>
                <p><a href={link}>{Para}</a></p>
                <time className="block font-xs" >{day}, {date}<sup>th</sup> {month} {year}</time>
                {/* datetime="2045-04-06" */}
            </article>
        </li>
    );
};
export default FooterLatestNewsItem;