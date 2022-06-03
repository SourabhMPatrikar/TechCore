import React from "react";
import FeedLeftHeading from "../Common/FeedLeftHeading";
import ArchivePostItem from "./ArchivePostItem";
const ArchiveLPosts = () => {

    const archivePost = ['JAN 2021 (5)', 'JAN 2021 (3)', 'JAN 2021 (6)', 'JAN 2021 (4)', 'JAN 2021 (8)']

    const ArchiveLPostsList = archivePost.map((item) => {
        return(
            <ArchivePostItem archiveLink="#" archiveTitle={item} key={item} />
        );
    });



    return(
        <div className="panel-left-box">
            <FeedLeftHeading headingText="Archive Posts" />
            <div className="blog-nav-list">
                <ul>{ArchiveLPostsList}</ul>
            </div>
        </div>
    );
};
export default ArchiveLPosts;