import React from "react";
// import Feed from "../../component/Feed";
// import {
//   Router,
//   Routes,
//   Route,
//   Switch,
//   HashRouter,
//   Link,
// } from "react-router-dom";
import FeedAdd from "../FeedAdd/";
import FeedEdit from "../FeedEdit/";
import FeedEntire from "../FeedEntire/";
import FeedList from "../FeedList/";
import { Route } from "react-router"



const FeedRight = () => {
  return (
    <aside className="panel-right">
      {/* <Router>
        <Routes>
          <Route path="/feed" element={<FeedList />} exact />
           <Route path="/feed/feedadd" element={<FeedAdd />} exact />
          <Route path="/feed/feededit/:_id" element={<FeedEdit />} exact />
          <Route path="/feed/feedentire/:_id" element={<FeedEntire />} exact />
        </Routes>
      </Router> */}
      
      {/* <Route path="/feed" render={() => <div>Home</div>} /> */}
        {/* <Route path="/">
        
        </Route> */}

        
        <aside className="heading"><h2>Add Feed</h2></aside>
        <aside className="heading"><h2>Feed List</h2></aside>
        <aside className="panel-right-content">
            <div className="blog-writing">
              <FeedAdd />
            </div>
            <div className="blog-listing">
              <FeedList />
            </div>
            <div className='clear-fix'></div>
        </aside>
        <>
        </>
        <>
        </>
    </aside>
  );
};
export default FeedRight;