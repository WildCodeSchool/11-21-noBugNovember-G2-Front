import React from 'react'
import LikeButton from './LikeButton'
import FavoriteButton from './FavoriteButton'

import './styles/CardArticle.css'
import Im from '../assets/placeholder.jpg'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function CardArticle(props) {
  const goUrl = () => {
    window.open(props.url)
  }

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
        <div className='cardContentTop' onClick={goUrl}>
          <div className='cardTopBanner'>
            <div className='cardContainerTopAvatar'>
              <img
                className='cardTopAvatar'
                src={props.avatar}
                alt={props.member}
              />
            </div>
            <div className='cardTopTitle'>
              <p className='cardTopTitleP' maxLength='10'>
                {openGraph.title ? openGraph.title : props.description}
              </p>
            </div>
            <div className='cardDate'>
              <p>
                S{props.week} - {props.year}
              </p>
              <p className='cardMember'>{props.member}</p>
            </div>
          </div>

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
            <p>{openGraph.title ? openGraph.title : props.description}</p>
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
