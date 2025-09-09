import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import like from '../../assets/like.png';
import disLike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import profileImg from '../../assets/user_profile.jpg';
import {API_KEY, valueConvert} from '../../data'
import moment from 'moment';
import { useParams } from 'react-router-dom';






const PlayVideo = () => {

    const {videoId} = useParams();
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () =>{
        const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetailsUrl)
        .then(res=>res.json())
        .then(data=>setApiData(data.items[0]))
    }

    const fetchOtherData = async ()=>{
        // fetching channel
        const chanelDataUrl = ` https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(chanelDataUrl)
        .then(res=>res.json())
        .then(data=>setChannelData(data.items[0]))

        // fetching comment data
        const commentDataurl =`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
        await fetch(commentDataurl)
        .then(response => response.json())
        .then(data=> setCommentData(data.items))
    }
    useEffect(()=>{
        fetchVideoData()
    },[videoId])

    useEffect(()=>{
        fetchOtherData()
    },[apiData])

    return (
        <div className='playVideo'>
            <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>{apiData?apiData.snippet.title:"Titel Here"}</h3>
            <div className="playVideoInf">
                <p>{apiData?valueConvert(apiData.statistics.viewCount):"66K"} views• {apiData?moment(apiData.snippet.publishedAt).fromNow():"Now"} </p>
                <div>
                    <span><img src={like} alt="like icon" />{apiData?valueConvert(apiData.statistics.likeCount):"2K"}</span>
                    <span><img src={disLike} alt="dislike icon" /></span>
                    <span><img src={share} alt="share icon" />Share</span>
                    <span><img src={save} alt="save icon" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData?channelData.snippet.thumbnails.default.url:profileImg} alt="img of chanel" />
                <div>
                    <p>{apiData?apiData.snippet.channelTitle:"channel name"}</p>
                    <span>{channelData?valueConvert(channelData.statistics.subscriberCount): "2K"} subscribers</span>
                </div>
                <button>subscribe</button>
            </div>
            <div className="videoDescription">
                <p>{apiData?apiData.snippet.localized.description.slice(0, 250):"description here"}</p>
                <hr />
                <h4>{apiData?valueConvert(apiData.statistics.commentCount):"2K"} comments</h4>
                {commentData.map((items, index) =>{
                    return(
                    <div key={index} className="comment">
                        <img src={items.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                        <div>
                            <h3>{items.snippet.topLevelComment.snippet.authorDisplayName.slice(1,50)} <span>{moment(items.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                            <p>{items.snippet.topLevelComment.snippet.textOriginal}</p>
                            <div className="commentAction">
                                <img src={like} alt="" />
                                <span>{valueConvert(items.snippet.topLevelComment.snippet.likeCount)}</span>
                                <img src={disLike} alt="" />
                            </div>
                        </div>
                    </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default PlayVideo
