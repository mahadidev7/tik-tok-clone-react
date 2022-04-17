import React, { useState } from 'react'
import StyleFooterSidebar from '../Style/videoSidebar.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';

const VideoSidebar = ({likes, shares, messages, Cauth}) => {
    const [liked, setLiked] = useState(false)
    function lickCount(value){
        if(value === "false"){
            setLiked(false)
        }else if(value === "true"){
            setLiked(true)
        }
    }
  return (
    <div className={StyleFooterSidebar.videoSiderbar}>

    {
        Cauth ?
        <div className={StyleFooterSidebar.videoSiderbar__button}>
        { liked ?
            <FavoriteIcon fontSize='large'
                onClick={e => lickCount("false")}
             /> :
            <FavoriteBorderIcon fontSize='large'
                onClick={e => lickCount("true")}
             />
        }
            <p> {liked ? likes + 1 : likes} </p>
        </div> :

        <div className={StyleFooterSidebar.videoSiderbar__button}>
            <FavoriteBorderIcon fontSize='large' 
                onClick={()=> alert("Please Log In...")}
             /> 
            <p> { likes} </p>
        </div>
        
        
    }

        
        <div className={StyleFooterSidebar.videoSiderbar__button}>
        <MessageIcon fontSize='large'/>
            <p>{messages}</p>
        </div>
        <div className={StyleFooterSidebar.videoSiderbar__button}>
        <ShareIcon fontSize='large' />
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSidebar

        
        