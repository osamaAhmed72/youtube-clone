import React from 'react';
import './Video.css';
import PlayVideo from '../../Components/playVideo/PlayVideo';
import Recommended from '../../Components/recommended/Recommended';
import { useParams } from 'react-router-dom';




const Video = () => {

  const{videoId , categoryId} = useParams();

  return (
    <div className='playContainer'>
      <PlayVideo videoId ={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  )
}

export default Video
