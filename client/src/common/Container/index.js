// import React from "react";
// import LeftPanel from "../LeftPanel";
// import RightPanel from "../RightPanel";

import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../component/Home/";
import About from "../../component/About/";
import Feed from "../../component/Feed/";
import News from "../../component/News/";
import Contacts from "../../component/Contacts/";

import FeedList from "../../component/Feed/FeedList/";
import FeedAdd from "../../component/Feed/FeedAdd/";
import FeedEdit from "../../component/Feed/FeedEdit/";
import FeedEntire from "../../component/Feed/FeedEntire/";

import SignIn from "../../component/Auth/SignIn";
import SignUp from "../../component/Auth/SignUp";
import ForgetPassword from "../../component/Auth/ForgetPassword";
import ResetPassword from "../../component/Auth/ResetPassword";


import FeedLeft from "../../component/Feed/FeedLeft";
import FeedRight from "../../component/Feed/FeedRight";

import Header from "../Header";
import Footer from "../Footer";

const Container = () => {
  return (
    <aside className="hold-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<SignIn />} exact />
          <Route path="/forgetpassword" element={<ForgetPassword />} exact />
          <Route path="/resetpassword" element={<ResetPassword />} exact />
          
          <Route path="/signin" element={<SignIn />} exact />
          <Route path="/signup" element={<SignUp />} exact />
          <Route path="/home" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/feed" element={<Feed />} />

            <Route path="/feed/feedadd" element={<FeedAdd />} />
            <Route path="/feed/feededit/:_id" element={<FeedEdit />} />
            <Route path="/feed/feedentire/:_id" element={<FeedEntire />} />

          <Route path="/news" element={<News />} exact />
          <Route path="/contact" element={<Contacts />} exact />

          {/* <Route path="/feed/feedadd" element={<FeedAdd />} exact />
          <Route path="/feed/feededit/:_id" element={<FeedEdit />} exact />
          <Route path="/feed/feedentire/:_id" element={<FeedEntire />} exact /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </aside>
  );
};
export default Container;