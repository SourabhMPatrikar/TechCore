import React from "react";
import { useParams } from 'react-router-dom';
import FooterNavigationHeading from "../../Common/FooterNavigationHeading";
import FooterButtonMore from "../../Common/FooterButtonMore";
import FooterTopBloggerItem from "./FooterTopBloggersItem";
const FooterTopBlogger = () => {
    // const params = useParams();
    const bloggerImg = [
        {
            feedImgHref:"https://www.google.com/",
            feedImgSrc:"https://d2h7z5r5pp4sed.cloudfront.net/telugu/news/sunnyleone031016_c.jpg",
            feedImgAlt:"And shand",
            feedImgTitle:"And shand bund",
            _id:"01"
        },
        {
            feedImgHref:"https://www.google.com/",
            feedImgSrc:"https://www.businessupturn.com/wp-content/uploads/2020/09/Trisha-Krishnan-In-Hot-Bikini-At-Beach-Photos.jpg",
            feedImgAlt:"And shand",
            feedImgTitle:"And shand bund",
            _id:"02"
        },
        {
            feedImgHref:"https://www.google.com/",
            feedImgSrc:"https://img.mensxp.com/media/content/2020/Jul/Awesome-Katrina-Kaif-Movies-That-Made-Everyone-Fall-In-Love-With-Her-740x500-2_5f0ff307788ac.jpeg",
            feedImgAlt:"And shand",
            feedImgTitle:"And shand bund",
            _id:"03"
        },
        {
            feedImgHref:"https://www.google.com/",
            feedImgSrc:"https://www.mrdustbin.com/wp-content/uploads/2020/06/Raashi-Khanna-2.jpg",
            feedImgAlt:"And shand",
            feedImgTitle:"And shand bund",
            _id:"04"
        },
        {
            feedImgHref:"https://www.google.com/",
            feedImgSrc:"https://wikibioz.com/wp-content/uploads/2020/01/Dipika.gif",
            feedImgAlt:"And shand",
            feedImgTitle:"And shand bund",
            _id:"05"
        },
        {
            feedImgHref:"https://www.google.com/",
            feedImgSrc:"https://i.zoomtventertainment.com/story/jacqueline_fernandez.jpg",
            feedImgAlt:"And shand",
            feedImgTitle:"And shand bund",
            _id:"06"
        },
        {
            feedImgHref:"https://www.google.com/",
            feedImgSrc:"https://www.pinkvilla.com/imageresize/pari%20main%20image.png?width=752&format=webp&t=pvorg",
            feedImgAlt:"And shand",
            feedImgTitle:"And shand bund",
            _id:"07"
        },
        {
            feedImgHref:"https://www.google.com/",
            feedImgSrc:"https://samvadplus.com/wp-content/uploads/2020/11/Rakul-Preet-Singh.jpg",
            feedImgAlt:"And shand",
            feedImgTitle:"And shand bund",
            _id:"08"
        },
        {
            feedImgHref:"https://www.google.com/",
            feedImgSrc:"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/07/aisha-sharma-1530708746.jpg",
            feedImgAlt:"And shand",
            feedImgTitle:"And shand bund",
            _id:"09"
        },
        {
            feedImgHref:"https://www.google.com/",
            feedImgSrc:"https://www.theindianwire.com/wp-content/uploads/2019/09/neha-sharma5-878x1024.jpg",
            feedImgAlt:"And shand",
            feedImgTitle:"And shand bund",
            _id:"10"
        },
        {
            feedImgHref:"https://www.google.com/",
            feedImgSrc:"https://thenewscrunch.com/wp-content/uploads/2020/08/Sara-Gurpal.jpg",
            feedImgAlt:"And shand",
            feedImgTitle:"And shand bund",
            _id:"11"
        },
        {
            feedImgHref:"https://www.google.com/",
            feedImgSrc:"https://www.eastcoastdaily.in/wp-content/uploads/2018/04/13906853_1037339n82970_n.jpg",
            feedImgAlt:"And shand",
            feedImgTitle:"And shand bund",
            _id:"12"
        },
        {
            feedImgHref:"https://www.google.com/",
            feedImgSrc:"https://wallpapercave.com/wp/wp4842524.jpg",
            feedImgAlt:"And shand",
            feedImgTitle:"And shand bund",
            _id:"13"
        },
        {
            feedImgHref:"https://www.google.com/",
            feedImgSrc:"https://www.desicomments.com/wp-content/uploads/2017/12/Image-Of-Punjabi-Model-Ginni-Kapoor.jpg",
            feedImgAlt:"And shand",
            feedImgTitle:"And shand bund",
            _id:"14"
        },
        {
            feedImgHref:"https://www.google.com/",
            feedImgSrc:"https://www.trendingnetnepal.com/wp-content/uploads/2020/03/cp2.jpg",
            feedImgAlt:"And shand",
            feedImgTitle:"And shand bund",
            _id:"15"
        },
        {
            feedImgHref:"https://www.google.com/",
            feedImgSrc:"https://static.toiimg.com/photo/84366733.cms",
            feedImgAlt:"And shand",
            feedImgTitle:"And shand bund",
            _id:"16"
        }
    ]

    const bloggerImgList = bloggerImg.map((item) => {
        const {feedImgHref, feedImgSrc, feedImgAlt, feedImgTitle, _id} = item;
        return(
            <FooterTopBloggerItem bloggerHref={feedImgHref} bloggerSrc={feedImgSrc} bloggerAlt={feedImgAlt} bloggerTitle={feedImgTitle} key={_id} />
        );
    });

    return(
        <>
            <FooterNavigationHeading headingClass="heading" headingText="Top Blogger"/>
            <ul className="latest-img">{bloggerImgList}</ul>
            <FooterButtonMore linkText="More Top Blogger" />
        </>
    );
};
export default FooterTopBlogger;