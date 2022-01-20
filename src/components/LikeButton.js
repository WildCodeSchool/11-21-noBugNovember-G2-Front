import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './styles/CardArticle.css'

const LikeButton = (props) => {
  const [likeCounter, setLikeCounter] = useState(props.likes)
  const [isLiked, setIsLiked] = useState("")

  const incrementationLike = () => {
    axios
    .put('http://localhost:3030/articles/likes', {id: props.id })
      setLikeCounter(likeCounter + 1)
   }

  const userIdLike = () => {
    axios
      .post('http://localhost:3030/like/add', { id_article: props.id, id_user: parseInt(localStorage.getItem("id_user")) })
   }
  
  const magicLikeButton = () => {
    incrementationLike()
    userIdLike()
  }

  useEffect(() => {
    axios
      .post('http://localhost:3030/like/isliked', { id_article: props.id, id_user: parseInt(localStorage.getItem("id_user")) })
      .then(response => {
        setIsLiked(response.data[0].isLiked)
      })
  }, [likeCounter])
  
    return (
    <div className='cardBottomLike'>
      <p>{likeCounter}</p>
      <a
        className='cardBottomLink'
        target='_blank'
        rel='noreferrer'
        onClick={() => isLiked === 0 ? magicLikeButton() : ""}
      >
        🔥
      </a>
    </div>
  )
}

export default LikeButton
