import React from "react";
const ArchivePostItem = ({archiveTitle, archiveLink}) => {
    return(
        <li><a href={archiveLink}>{archiveTitle}</a></li>
    );
};
export default ArchivePostItem;