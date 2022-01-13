import React from 'react'
import LikeButton from './LikeButton'
import FavoriteButton from './FavoriteButton'

import './styles/CardArticle.css'
import Im from '../assets/placeholder.jpg'
import { useState, useEffect } from 'react'

export default function CardArticle(props) {
  // const { card } = props
  const goUrl = () => {
    window.open(props.url)
  }

  // OPEN GRAPH *******************

  let cors = 'https://cors-anywhere.herokuapp.com/'

  // afficher le site en cas d'erreurs
  let cors2 = props.url.split('/')
  let url = cors.concat(props.url)
  let req = new Request(url)

  const [harry, setHarry] = useState([])
  const [imageArticle, setImageArticle] = useState(false)
  const [titleArticle, setTitleArticle] = useState(false)
  const [descriArticle, setDescriArticle] = useState(false)

  useEffect(() => {
    fetch(req)
      .then(response => response.text())
      .then(data => setHarry(data))
  }, [])

  let parser = new DOMParser()
  let html2 = parser.parseFromString(harry, 'text/html')
  let metas = html2.querySelectorAll('meta')
  imageArticle || titleArticle || descriArticle
    ? ''
    : metas.forEach(meta => {
        const property = meta.getAttribute('property')
        const content = meta.getAttribute('content')
        if (property != null) {
          if (property == 'og:description') {
            setDescriArticle(content)
          } else if (property == 'og:image') {
            setImageArticle(content)
          } else if (property == 'og:title') {
            setTitleArticle(content)
          }
        }
      })

  return (
    <>
      <article className='card' key={props.id}>
        <div className='cardContentTop' onClick={goUrl}>
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
          <p className='cardTopTitle' maxLength='10'>
            {props.titre}
          </p>

          <div className='cardImgBox'>
            <img
              className='cardImg'
              src={imageArticle ? imageArticle : Im}
              alt=''
            />
          </div>
        </div>

        <div className='cardBottom'>
          <div className='cardBottomDescritption'>
            <p>
              {descriArticle
                ? descriArticle
                : `Ce contenue ne peut pas être afficher en localhost, le site renvoie vers 
                ${cors2[2]}`}
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
            <FavoriteButton id={props.id} isFavorite={props.isFavorite} setIsFavorite={props.setIsFavorite}/>
            <LikeButton favorite={props.favorite} />
          </div>
        </div>
      </article>
    </>
  )
}
