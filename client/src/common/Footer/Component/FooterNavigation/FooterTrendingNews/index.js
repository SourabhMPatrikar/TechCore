import React from "react";
import FooterNavigationHeading from "../../Common/FooterNavigationHeading";
import FooterButtonMore from "../../Common/FooterButtonMore";
import FooterTrendingNewsItem from "./FooterTrendingNewsItem";
const trenginNewsData = [
  {
    heading: "Ultricies in molestie sed",
    para: "Lorem Ipsum Doller text for Dummy purpose now it in Ancient world. Lorem Ipsum as their default model text.",
    link: "https://www.icicibank.com/Personal-Banking/insta-banking/internet-banking/index.page",
    _id: "0001",
  },
  {
    heading: "Ultricies in molestie sed",
    para: "Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover default model text.",
    link: "https://www.icicibank.com/Personal-Banking/insta-banking/internet-banking/index.page",
    _id: "0002",
  },
  {
    heading: "Ultricies in molestie sed",
    para: "Dummy purpose now it in Ancient world. Lorem Ipsum as their default model text as per Lorem Ipsum.",
    link: "https://www.icicibank.com/Personal-Banking/insta-banking/internet-banking/index.page",
    _id: "0003",
  },
];
const trendingNewsRepeater = trenginNewsData.map((item) => {
  const { heading, para, link, _id } = item;
  return (
    <FooterTrendingNewsItem
      heading={heading}
      para={para}
      link={link}
      key={_id}
    />
  );
});

const FooterTrendingNews = () => {
  return (
    <>
      <FooterNavigationHeading headingClass="heading" headingText="Trending News" />
      <ul className="textlink">{trendingNewsRepeater}</ul>
      <FooterButtonMore linkText="More Trending News" />
    </>
  );
};
export default FooterTrendingNews;