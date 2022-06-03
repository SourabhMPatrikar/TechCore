import React, { useEffect, useState } from "react";
// import {Link, useParams, useNavigate} from "react-router-dom";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import FeedButtonBack from "../FeedCommon/FeedButtonBack.js";
import FeedComment from "../FeedComment/";

const FEED_TEMPLATE = {
  title: "",
  imageURL: "",
  feedWritter: "",
  description: "",
  feedDate: "",
  feedLikes: "",
  feedComments: "",
};
const FeedEntire = () => {
  // const navigate = useNavigate();
  const params = useParams();

  const [feed, setFeed] = useState(FEED_TEMPLATE);
  const [isDeletedFeed, setDeletedFeed] = useState(false);
  const {
    title,
    imageURL,
    feedWritter,
    description,
    feedDate,
    feedLikes,
    feedComments,
    _id,
    feedId,
  } = feed;
  useEffect(() => {
    axios
      .post("/api/feed/feedentire", { _id: params._id })
      .then((res) => {
        const feeddata = res.data[0];
        // console.log('/api/feed/feedentire', feeddata);
        // console.log('feeddata.title', feeddata.title);
        setFeed(feeddata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params._id]);

  const deleteFeed = (_id) => {
    axios
      .post("/api/feed/removefeed", { _id: params._id })
      .then((res) => {
        console.log("/api/feed/removefeed", res.data);
        const {
          data: { _id, isDeletedFeed},
        } = res;
        //if (params._id === _id && isDeletedFeed){
        if (isDeletedFeed){
          setDeletedFeed(true);
          //navigate("/feed")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("component rendered!!");
  if (isDeletedFeed) {
    return (
      <div className="msg-feed-curd">
        <aside className="heading">
          <h6>The feed has been deleted successfully.</h6>
          <p>You can check the feed list.</p>
          <div className="btn-box">
            <Link to="/feed" className="btn btn-primary">
              Back to Feeds
            </Link>
            {/* <span className="btn btn-secondary" onClick={addMoreFeed}>
              A
            </span> */}
          </div>
        </aside>
      </div>
    );
  }
  return (
    <>
      <aside className="heading">
        <h2>Feed Entire</h2>
        <span className="feedid">
          Feed Id is {params._id} and {feedId}
        </span>
        <span className="btn-box righter">
          <FeedButtonBack
            btnText="Back"
            className="btn btn-secondary"
            linkPath="/feed"
          />
        </span>
      </aside>
      <aside className="right-panel-content">
        <div className={"blog-entire " + _id}>
          <div className="panel-left">
            <div className="blog-btns">
              <div className="btn-group">
                <Link
                  className="btn btn-secondary"
                  to={`/feed/feededit/${params._id}`}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteFeed(params._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="blog-img">
              <img src={imageURL} alt="" title="" />
            </div>
            <div className="blog-writer">
              <div className="lefts">
                <h5>{feedWritter}</h5>
                <h6>Date {feedDate}</h6>
              </div>
              <div className="rights">
                <h3>Likes {feedLikes}</h3>
                <h4>comments {feedComments}</h4>
              </div>
            </div>
            <div className="heading">
              <h4>{title}</h4>
            </div>
            <div className="blog-text">
              <p>{description}</p>
            </div>
          </div>
          <div className="panel-right">
            <FeedComment />
          </div>
        </div>
      </aside>
    </>
  );
};
export default FeedEntire;