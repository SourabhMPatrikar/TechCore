import React from "react";
import Jumbotron from "./Component/Jumbotron";
import HomeText from "./Component/HomeText";
import WhyUs from "./Component/WhyUs";
import LatestNews from "./Component/LatestNews";
import Testimonial from "./Component/Testimonial";
import Bifurcation from "./Component/Bifurcation";
const Home = () => {
  return (
    <>
      <Jumbotron />
      <HomeText />
      <WhyUs />
      <LatestNews />
      <Testimonial />
      <Bifurcation />
    </>
  );
};
export default Home;