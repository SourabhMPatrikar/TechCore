import React from "react";
import ArchiveLPosts from "./Component/ArchivePosts";
import RecentPost from "./Component/RecentPost";
import Tags from "./Component/Tags";
const LeftPanel = () => {
    return(
    <aside className="left-panel">
        <aside className="left-panel-content">
            <RecentPost />
            <ArchiveLPosts />
            <Tags />
        </aside>
    </aside>
    )
}
export default LeftPanel;