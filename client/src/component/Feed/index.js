import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FeedList from "./FeedList/";
import FeedAdd from "./FeedAdd/";
import FeedEdit from "./FeedEdit/";
import FeedEntire from "./FeedEntire/";
import FeedLeft from "./FeedLeft/";
import FeedRight from "./FeedRight/";
function Feed(){
    return(
        <div className="panel-holder feeds">
            <FeedLeft />
            <FeedRight />
            {/* <BrowserRouter>
                <Routes>
                    <Route path='' element={<FeedList/>} exact />
                    <Route path='/' element={<FeedList/>} exact />
                    <Route path='/feedadd' element={<FeedAdd/>} exact />
                    <Route path='/feededit/:_id' element={<FeedEdit/>} exact />
                    <Route path='/feedentire/:_id' element={<FeedEntire/>} exact />
                </Routes>
            </BrowserRouter> */}
        </div>
    );
}
export default Feed;