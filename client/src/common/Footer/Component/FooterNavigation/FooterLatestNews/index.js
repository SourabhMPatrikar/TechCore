import React from "react";
import FooterNavigationHeading from "../../Common/FooterNavigationHeading";
import FooterButtonMore from "../../Common/FooterButtonMore";
import FooterLatestNewsItem from "./FooterLatestNewsItem";

const footerLatestNews = [
  {
    Para: "Sapien sit amet tortor nulla vulputate odio in varius tristique nisi urna.",
    day: "Friday",
    date: "6",
    month: "April",
    year: "2021",
    _id: "001",
    link: "https://www.google.com/"
  },
  {
    Para: "Consequat erat id rutrum nisi magna vel tellus phasellus malesuada bibendum.",
    day: "Thursday",
    date: "8",
    month: "April",
    year: "2021",
    _id: "002",
    link: "https://www.google.com/"
  },
  {
    Para: "Sapien sit amet tortor nulla vulputate odio in varius tristique nisi urna.",
    day: "Friday",
    date: "6",
    month: "April",
    year: "2021",
    _id: "003",
    link: "https://www.google.com/"
  },
];

const footerLatestNewsRepeater = footerLatestNews.map((item) => {
  const { Para, day, date, month, year, link, _id } = item;
  return (
    <FooterLatestNewsItem
      Para={Para}
      day={day}
      date={date}
      month={month}
      year={year}
      key={_id}
      link={link}
    />
  );
});

const FooterLatestNews = () => {
  return (
    <>
      <FooterNavigationHeading headingClass="heading" headingText="Latest News" />
      <ul className="textlink">{footerLatestNewsRepeater}</ul>
      <FooterButtonMore linkText="More Latest News" />
    </>
  );
};
export default FooterLatestNews;