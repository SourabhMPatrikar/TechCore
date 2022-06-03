/* Method 01 */
// import React, { useState, setState } from "react";
import React, { useState } from "react";
import uniqid from 'uniqid';
import axios from 'axios';
import { Link } from "react-router-dom";
// import {useNavigate} from 'react-router-dom';
import FeedButtonBack from '../FeedCommon/FeedButtonBack.js';

/* Method 02 */
const FEED_TEMPLATE = {
  title:"",
  imageURL:"",
  feedWritter:"",
  description:"",
  feedDate:""
}
const FeedAdd = () => {
    // const navigate = useNavigate();

    /* Method 01 */
    // const [title, setTitle] = useState('');
    // const [imageURL, setImageURL] = useState('');
    // const [description, setDescription] = useState('');

    /* Method 02 */
    const [feed, setFeed] = useState(FEED_TEMPLATE);
    const [isAddedFeed, setAddedFeed] = useState(false);
    const {title, imageURL, feedWritter, feedDate, description} = feed;
    const handleChange = (e) => {

      const {name, value} = e.target;
      // console.log('name -->', name)
      // console.log('value -->', value)
      const feedObject = {...feed}
      feedObject[name]=value;
      setFeed(feedObject);
    }

    const addPost = () => {
        const feed = {
            title:title,
            imageURL:imageURL,
            feedWritter:feedWritter,
            description:description,
            feedDate:feedDate,
            feedId:uniqid()
        }
        axios.post('/api/feed/addnewfeed',feed).then(res=>{
          alert("\n Res.Data :-> "+ res.data + "\n Res.Data.Success :-> "+ res.data.success + "\n Res.Data.SuccessMessage :->"+ res.data.successMessage + "\n Res.Data.isAddedFeed :->"+ res.data.isAddedFeed)
          // alert(res.data.success)
          // alert(res.data.successMessage)
          //const {data:{_id, isAddedFeed}} = res;
          const {data} = res;
          const {_id, isAddedFeed} = data;
          if(isAddedFeed){setAddedFeed(isAddedFeed);}
        }).then(err=>{
          console.log(err)
        });
        console.log("Printing Feed :- ",feed);
        setFeed(FEED_TEMPLATE);
        //navigate('/');
        
    }
    const addMoreFeed = () => {
      if(isAddedFeed){setAddedFeed(false);}
    }
  if(isAddedFeed){
    return (
      <div className="msg-feed-curd">
        <aside className="heading">
          <h6>The feed has been added successfully.</h6>
          <p>You can check the feed on feed list.</p>
          <div className="btn-box">
            <Link to="/feed" className="btn btn-primary">Back to Feeds</Link>
            <span className="btn btn-secondary" onClick={addMoreFeed}>Add More Feed</span>
          </div>
        </aside>
      </div>
    );
  }
  return (
    <>
      <aside className="heading">
        <h2>Feed Add</h2>
        <span className="btn-box righter">
            <FeedButtonBack btnText="Back" className="btn btn-secondary" linkPath="/feed" />
        </span>
      </aside>
      <aside className="right-panel-content">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          {/* Method 01  */}
          {/* <input type="text" id="title" className="form-control" placeholder="Blog Title" value={title} onChange={(e)=>{setTitle(e.target.value)}} /> */}

          {/* Method 02 */}
          <input type="text" name="title" id="title" className="form-control" placeholder="Blog Title" value={title} onChange={(e)=>{handleChange(e)}} />
        </div>
        <div className="mb-3">
          <label htmlFor="imageURL" className="form-label">Image URL</label>
          {/* Method 01  */}
          {/* <input type="text" id="imageURL" className="form-control" placeholder="Blog image URL" value={imageURL} onChange={(e)=>{setImageURL(e.target.value)}} /> */}
        
          {/* Method 02 */}
          <input type="text" name="imageURL" id="imageURL" className="form-control" placeholder="Blog image URL" value={imageURL} onChange={(e)=>{handleChange(e)}} />
        </div>
        <div className="mb-3">
          <label htmlFor="feedWritter" className="form-label">Feed Writter</label>
          <input type="text" name="feedWritter" id="feedWritter" className="form-control" placeholder="Your Name" value={feedWritter} onChange={(e)=>{handleChange(e)}} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          {/* Method 01  */}
          {/* <textarea id="description" className="form-control" placeholder="Blog Description" rows="3" value={description} onChange={(e)=>{setDescription(e.target.value)}} /> */}

          {/* Method 02 */}
          <textarea id="description" name="description" className="form-control" placeholder="Blog Description" rows="3" value={description} onChange={(e)=>{handleChange(e)}} />
        </div>
        <div className="mb-3">
          <label htmlFor="feedDate" className="form-label">Date</label>
          {/* Method 01  */}
          {/* <textarea id="description" className="form-control" placeholder="Blog Description" rows="3" value={description} onChange={(e)=>{setDescription(e.target.value)}} /> */}

          {/* Method 02 */}
          <input type="text" name="feedDate" id="feedDate" className="form-control" placeholder="Date" value={feedDate} onChange={(e)=>{handleChange(e)}} />
        </div>
        <div className="mb-3">
          <span className="btn-box lefter">
            <button className="btn btn-primary" onClick={addPost}>Save</button>
            <button className="btn btn-secondary">Cancel</button>
          </span>
        </div>
      </aside>
    </>
  );
}
export default FeedAdd;