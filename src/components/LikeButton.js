import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import './styles/CardArticle.css'

const LikeButton = (props) => {
  const [likeCounter, setLikeCounter] = useState(props.likes)

  const incrementationLike = () => {
    axios
    .put('http://localhost:3030/articles/likes', {id: props.id })
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
