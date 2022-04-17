import React from 'react'
import StyleVideoFooter from "../Style/VideoFooter.module.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';


const VideoFooter = ({channel, description, song}) => {
  return (
    <div className={StyleVideoFooter.videoFooter}>
        <div className={StyleVideoFooter.videoFooterText}>
            <h3>@{channel}</h3>
            <p>{description}</p>
            <MusicNoteIcon className={StyleVideoFooter.videoFooter__icon} />
            <div className={StyleVideoFooter.video__Ticker}>
                <marquee>
                    <p>{song}</p>
                </marquee>
                
            </div>
        </div>
        <img className={StyleVideoFooter.videoFooter__record }src='https://static.thenounproject.com/png/934821-200.png' alt='9848' />
    </div>
  )
}

export default VideoFooter;