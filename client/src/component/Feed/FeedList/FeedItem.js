import React from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
function FeedItem({feeds}){
    //console.log('Feeds -> ', feeds)
    const history = useNavigate();
    const {title, imageURL, feedWritter, feedDate, description} = feeds;

    const deletePost = (feedId) => {
        axios.post('api/feed/deleteFeed', {feedId:feedId}).then(res=>{
            alert(res.data)
            //history.go(0);
        }).catch(err=>{
            console.log(err);
        })
    }
    return(
        <li className="col">
            <div className="blog-box">
                <div className="blog-img"><img src={imageURL} title="" alt="" /></div>
                <div className="blog-writer"><h6>{feedWritter}</h6></div>
                <div className="blog-stuff">
                    <div className="blog-left">
                        <div className="blog-date">
                            <strong>05</strong>
                            <em>Apr</em>
                        </div>
                        {feedDate}
                    </div>
                    <div className="blog-right">
                        <div className="heading"><h4>{title}</h4></div>
                        <div className="blog-text"><p>{description}</p></div>
                        <div className="blog-btn">
                            <span className="btn-box lefter">
                                <Link className="btn btn-primary" to={`/feed/feedentire/${feeds._id}`}>Read More...</Link>
                            </span>
                            <span className="btn-box lefter" style={{"display":"none"}}>
                                <Link className="btn btn-secondary" to={`/feed/feededit/${feeds._id}`}>Edit</Link>
                                <button className="btn btn-danger" onClick={()=>{deletePost(feeds.feedId)}}>Delete</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}
export default FeedItem;