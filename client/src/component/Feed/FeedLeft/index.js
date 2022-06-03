import React from "react";
import ArchiveLPosts from "./Component/ArchivePosts";
import RecentPost from "./Component/RecentPost";
import Tags from "./Component/Tags";
const FeedLeft = () => {
    return(
    <aside className="panel-left">
        <aside className="panel-left-content">
            <RecentPost />
            <ArchiveLPosts />
            <Tags />
        </aside>
    </aside>
    )
}
export default FeedLeft;