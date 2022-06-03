import React from "react";
const RecentPostItem = ({recentLink, recentText}) => {
    return(
        <li><a href={recentLink}>{recentText}</a></li>
    );
};
export default RecentPostItem;