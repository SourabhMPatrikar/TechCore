import React, { useState } from "react";
import Header from "../Header/";
import Container from "../Container/";
import Footer from "../Footer/";

import SignIn from "../../component/Auth/SignIn";
const Wrapper = () => {
  return (
    <aside className="wrapper">
          <Header />
          <Container />
          <Footer />
    </aside>
  );
};
export default Wrapper;
