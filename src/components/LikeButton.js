import React from 'react'
import { useState } from 'react'

const LikeButton = (props) => {
    const { favorite } = props
    const [likeCounter, setLikeCounter] = useState(favorite)
    const incrementationLike = () => {
        setLikeCounter(likeCounter+1)
    }
        console.log(likeCounter);
    return (
            <div className='cardBottomLike'>
            <p>{likeCounter}</p>    
            <a
            className='cardBottomLink'
            target='_blank'
            rel='noreferrer'
            onClick={() => incrementationLike()}
            >🔥 
            </a>
            </div>
      )
}

export default LikeButton