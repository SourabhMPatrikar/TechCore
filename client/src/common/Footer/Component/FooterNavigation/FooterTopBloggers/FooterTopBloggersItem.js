import React from "react";
const FooterTopBloggerItem = (props) => {
  const { bloggerHref, bloggerSrc, bloggerAlt, bloggerTitle } = props;
  return (
    <li>
      <a className="imgover" href={bloggerHref} target="_blank">
        <img src={bloggerSrc} alt={bloggerAlt} title={bloggerTitle} />
      </a>
    </li>
  );
};
export default FooterTopBloggerItem;