import React, { useEffect, useState } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import {API_KEY, valueConvert} from '../../data';
import moment from 'moment';




const Feed = ({category,searchQuery}) => {

    const [data, setdata] = useState([]);

    const fetchData = async ()=>{
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        await fetch(videoList_url)
        .then(response => response.json())
        .then(data=> setdata(data.items))
    }


    useEffect(()=>{
        fetchData()
    },[category])

    const filteredData = data.filter(item =>
        item.snippet.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <div className='feed'>
            {filteredData.map((item,index)=>{
                return(
                    <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                        <img src={item.snippet.thumbnails.medium.url} alt="img cover of video" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{valueConvert(item.statistics.viewCount)} views• {moment(item.snippet.publishedAt).fromNow()}</p>
                    </Link>
                )
            })}
            
            
        </div>
    )
}

export default Feed
