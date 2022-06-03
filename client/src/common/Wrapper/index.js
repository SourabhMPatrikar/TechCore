import React, { useState } from "react";
import Header from "../Header/";
import Container from "../Container/";
import Footer from "../Footer/";

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
