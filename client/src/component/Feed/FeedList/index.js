import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FeedItem from './FeedItem.js';
function FeedList(){

    const[feedsData, setFeedsData] = useState([])

    useEffect(()=>{
        axios.get('/api/feed/getFeeds').then(res=>{
            console.log(res)
            console.log(res.data)
            setFeedsData(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[]);

    const feedList = feedsData.map((feeds)=> {
        return(
            <FeedItem feeds={feeds} key={feeds._id} />
        )
    })

    return(
        <>
            <ul className='row g-4 row-cols-1 row-cols-lg-3'>
                {feedList}
            </ul>
            <div className='clear-fix'></div>
        </>
    )
}
export default FeedList;