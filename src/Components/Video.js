import React, { useRef, useState } from 'react'
import StyleVideoCSS from '../Style/Video.module.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
  Cauth
}) => {
  
  const [play, setplay] = useState(false);
  const videoRef = useRef(null);

console.log(Cauth);


  function onVideoPlay(){
    if(play){
      videoRef.current.pause()
      setplay(false)
    }else{
      videoRef.current.play()
      setplay(true)
    }
  }

  return (
    <div className={StyleVideoCSS.video}>
        <video
          className={StyleVideoCSS.video__player}
          loop
          ref={videoRef}
          onClick={onVideoPlay}
          src={url}
        ></video>
        {
          play ? "" : <PlayCircleIcon className={StyleVideoCSS.play__Button} onClick={onVideoPlay} />
        }
   

        <VideoFooter
         channel={channel}
         description={description}
         song={song} />

        <VideoSidebar
          likes={likes}
          messages={messages}
          shares={shares}
          Cauth={Cauth}

        />
    
    </div>
  )
}

export default Video