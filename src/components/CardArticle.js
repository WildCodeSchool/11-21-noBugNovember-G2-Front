import React from 'react'
import { useEffect, useState } from 'react'
import check from '../assets/check.png'
import FavoriteButton from './FavoriteButton'
import LikeButton from './LikeButton'

import './styles/CardArticle.css'
import Im from '../assets/placeholder.jpg'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function CardArticle(props) {
  // const { card } = props

  const [isReadMark, setIsReadMark] = useState(false)
  const goUrl = () => {
    window.open(props.url)
  }
  const showCheck = () => {
    goUrl()
    let temp = props.isRead
    if (!temp.includes(props.id)) {
      temp.push(props.id)
      props.changeIsRead(temp)
      setIsReadMark(true)
      //props.setIsRead(temp)
    }
  }

    useEffect(() => {
    if (props.isRead.includes(props.id)) {
      setIsReadMark(true)
    }
    }, [])
  // useEffect(() => {} ,[props.isRead])


  const [openGraph, setOpenGraph] = useState('')

  useEffect(() => {
    axios
      .get(`http://localhost:3030/?url=${props.url}`)
      .then(response => response.data)
      .then(data => setOpenGraph(data))
  }, [])

  return (
    <>
      <article className='card' key={props.id}>
        <div className='cardContentTop' onClick={() => showCheck()}>
        <img className='checkMarkIcon' src={isReadMark ? check :''} alt='' />  
        {/* <Checkmark isRead={props.isRead} setIsRead={props.setIsRead} id={props.id} /> */}
          <img
            className='cardTopAvatar'
            src={props.avatar}
            alt={props.member}
          />
          <div className='cardDate'>
            <p>
              {props.week} - {props.year}
            </p>
            <p>{props.member}</p>
          </div>
          {/*                 <p className='cardTopTitle'maxLength='10'>{card.url}</p>
           */}{' '}
          <div className='cardImgBox'>
            <img
              className='cardImg'
              src={openGraph.image ? openGraph.image : Im}
              alt=''
            />
          </div>
        </div>

        <div className='cardBottom'>
          <div className='cardBottomDescritption'>
            <p>
              {openGraph.title ? openGraph.title : props.description}
              ....
            </p>
          </div>

          <div className='cardBottomFooter'>
            <a
              className='cardBottomLink'
              target='_blank'
              href={props.url}
              rel='noreferrer'
            >
              ⛬
            </a>
            <FavoriteButton
              id={props.id}
              isFavorite={props.isFavorite}
              setIsFavorite={props.setIsFavorite}
            />
            <LikeButton favorite={props.favorite} />
          </div>
        </div>
      </article>
    </>
  )
}
