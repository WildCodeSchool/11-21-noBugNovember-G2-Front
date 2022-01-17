import React from 'react'
import { useState } from 'react'
import './styles/CardArticle.css'

const LikeButton = (props) => {
  const { favorite } = props
  const [likeCounter, setLikeCounter] = useState(favorite)
  
  const incrementationLike = () => {
    setLikeCounter(likeCounter + 1)
  }

  return (
    <div className='cardBottomLike'>
      <p>{likeCounter}</p>
      <a
        className='cardBottomLink'
        target='_blank'
        rel='noreferrer'
        onClick={() => incrementationLike()}
      >
        🔥
      </a>
    </div>
  )
}

export default LikeButton
