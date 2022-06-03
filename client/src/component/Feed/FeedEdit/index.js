import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import FeedButtonBack from "../FeedCommon/FeedButtonBack.js";

const FEED_TEMPLATE = {
  title: "",
  imageURL: "",
  feedWritter: "",
  feedDate: "",
  description: "",
};

function FeedEdit() {
  const navigate = useNavigate();
  const params = useParams();

  const [feed, setFeed] = useState(FEED_TEMPLATE);
  const [isEditedFeed, setEditedFeed] = useState(false);
  const { title, imageURL, feedWritter, feedDate, description } = feed;
  const handleChange = (e) => {
    const { name, value } = e.target;
    const feedObject = { ...feed };
    feedObject[name] = value;
    setFeed(feedObject);
  };

  useEffect(() => {
    axios
      .post("/api/feed/getfeeddata", { _id: params._id })
      .then((res) => {
        // axios.post('/api/feed/getfeeddata', {feedId : params.feedId}).then(res=>{
        // console.log(res);
        // console.log(res.data);
        // console.log(res.data[0]);

        const feedData = res.data[0];
        // console.log('feedData', feedData);
        setFeed(feedData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params._id]);

  const editPost = () => {
    //debugger;
    const updatedfeed = {
      title: title,
      imageURL: imageURL,
      feedWritter: feedWritter,
      feedDate: feedDate,
      description: description,
      // feedId: params.feedId
      _id: params._id,
    };

    console.log("Printing Updated feed :- ", updatedfeed);
    axios
      .post("/api/feed/updatefeed", updatedfeed)
      .then((res) => {
        // axios.post('/api/feed/updatefeed', updatedfeed).then(res=>{
        console.log(res);
        alert(res.data);
        // console.log("Printing res :- ",res);
        console.log("Printing Updated feed :- ", updatedfeed);

        // navigate('/');
        //const {data:{_id}} = res;
        const { data } = res;
        const { _id, isEditedFeed } = data;
        //if (params._id === _id && isEditedFeed) {
        if (isEditedFeed) {
          setEditedFeed(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (isEditedFeed) {
    return (
      <div className="msg-feed-curd">
        <aside className="heading">
          <h6>The feed has been edited successfully by you.</h6>
          <p>You can check the feed on feed list.</p>
          <div className="btn-box">
            <Link to="/feed" className="btn btn-primary">
              Back to Feeds
            </Link>
            <Link to="/feed" className="btn btn-secondary">
              Back to Entire Feed
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
        <h2>Feed Edit</h2>
        <span className="feedid">Feed Id is {params._id}</span>
        <span className="btn-box righter">
          <FeedButtonBack
            btnText="Back"
            className="btn btn-secondary"
            linkPath="/feed"
          />
        </span>
      </aside>
      <aside className="right-panel-content">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageURL" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            name="imageURL"
            id="imageURL"
            className="form-control"
            placeholder="Blog image URL"
            value={imageURL}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="feedWritter" className="form-label">
            Feed Writter
          </label>
          <input
            type="text"
            name="feedWritter"
            id="feedWritter"
            className="form-control"
            placeholder="Your Name"
            value={feedWritter}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="form-control"
            placeholder="Blog Description"
            rows="3"
            value={description}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="feedDate" className="form-label">
            Date
          </label>
          <input
            type="text"
            name="feedDate"
            id="feedDate"
            className="form-control"
            placeholder="Date"
            value={feedDate}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <span className="btn-box lefter">
            <button className="btn btn-primary" onClick={editPost}>
              Save
            </button>
            <button className="btn btn-secondary">Cancel</button>
          </span>
        </div>
      </aside>
    </>
  );
}
export default FeedEdit;