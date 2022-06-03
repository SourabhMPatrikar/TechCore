import React from "react";
const TagItem = ({tagLink, tagText, tagKey}) => {
    return(
        <li><a href={tagLink}>{tagText}</a></li>
    );
};
export default TagItem;