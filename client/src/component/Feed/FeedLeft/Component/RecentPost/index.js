import React from 'react';
import FeedLeftHeading from "../Common/FeedLeftHeading";
import RecentPostItem from './RecentPostItem';
const RecentPost = () => {
    const recentPost = ['You will vainly look on autumn Lorem Ipsum Dollar Text', 'A mans worth has its season Lorem Ipsum Dollar Text', 'Good thoughts bear good fresh Lorem Ipsum Dollar Text', 'Fall in love with the season Lorem Ipsum Dollar Text', 'Why the berries always season Lorem Text Dollar']
    
    const RecentPostList = recentPost.map((item) => {
        return(
            <RecentPostItem recentLink="#" recentText={item} key={item}  />
        );
    });
    
    return(
        <div className="panel-left-box">
            <FeedLeftHeading headingText="Recent Posts" />
            <div className="blog-nav-list">
                <ul>
                    {RecentPostList}
                </ul>
            </div>
        </div>
    );
};
export default RecentPost;