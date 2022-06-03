import React from 'react';
import FeedLeftHeading from "../Common/FeedLeftHeading";
import TagItem from './TagItem';
const Tags = () => {
    
    const tag = ['Tesla', 'Micro Soft', 'Infosys', 'Javascript', 'Adobe', 'Lenovo', 'React', 'TATA', 'Sony', 'Samesung', 'Wipro', 'Motorola', 'Apple', 'IT', 'net', 'LG', 'DELL', 'Idea', 'Airtel', 'Relience']
    
    const tagList = tag.map((tags) => {
        return(
            <TagItem tagLink="#" tagText={tags} key={tags} />
        );
    });
    
    return(
        <div className="panel-left-box">
            <FeedLeftHeading headingText="Tags" />
            <div className="blog-tags">
                <ul>
                    {tagList}
                </ul>
            </div>
        </div>
    );
};
export default Tags;