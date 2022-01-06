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
            <a
            className='sousCard'
            target='_blank'
            rel='noreferrer'
            onClick={() => incrementationLike()}
            >🔥 
            </a>
      )
}

export default LikeButton