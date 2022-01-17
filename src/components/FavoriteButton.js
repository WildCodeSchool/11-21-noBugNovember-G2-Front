import React from 'react'
import { useEffect, useState } from 'react'
import './styles/CardArticle.css'
import bookEmpty from '../assets/bookEmpty.png'
import bookFull from '../assets/bookFull.png'

const FavoriteButton = props => {
  const [isBookFull, setIsBookFull] = useState(false)

  const bookChange = () => {
    setIsBookFull(!isBookFull)
    let temp = props.isFavorite
    if (props.isFavorite.includes(props.id) && isBookFull) {
      temp = props.isFavorite.filter(el => el != props.id)
      props.setIsFavorite(temp)
    } else if (!isBookFull && !props.isFavorite.includes(props.id)) {
      temp.push(props.id)
      props.setIsFavorite(temp)
    }
  }

  useEffect(() => {
    if (props.isFavorite.includes(props.id)) {
      setIsBookFull(!isBookFull)
    } 
  }, [])
  
  return (
    <div className='cardBottomFavorite'>
      <a className='cardBottomLink' target='_blank' rel='noreferrer'>
        <img
          className='bookmarkIcon'
          src={isBookFull ? bookFull : bookEmpty}
          onClick={() => bookChange()}
          alt=''
        />
      </a>
    </div>
  )
}

export default FavoriteButton
