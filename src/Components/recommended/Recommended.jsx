import React, { useEffect, useState } from 'react';
import './Recommended.css';
import { API_KEY , valueConvert} from '../../data';
import { Link } from 'react-router-dom';








const Recommended = ({categoryId}) => {

const [apiData, setApiData]= useState([]);

const fetchData = async ()=>{
    const apiUrl = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(apiUrl)
        .then(response => response.json())
        .then(data=> setApiData(data.items))
}

useEffect(()=>{
        fetchData()
    },[])

    return (



        <div className='recommended'>
            {apiData.map((item,index)=>{
                return(
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="sideVideoList">
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className="infoVid">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{valueConvert(item.statistics.viewCount)} views</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Recommended
