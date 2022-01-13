import React from 'react'
import LikeButton from './LikeButton'
import './styles/CardArticle.css'
import Im from '../assets/placeholder.jpg'
import { useState, useEffect } from 'react'

export default function CardArticle(props) {
  // const { card } = props
  const goUrl = () => {
    window.open(props.url)
  }

  // OPEN GRAPH *******************
  let url = props.url

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
            <img className='cardImg' src={imageArticle} alt='' />
          </div>
        </div>

        <div className='cardBottom'>
          <div className='cardBottomDescritption'>
            <p>{descriArticle}....</p>
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
            <a
              className='cardBottomLink'
              target='_blank'
              href={props.url}
              rel='noreferrer'
            >
              🔖
            </a>
            <LikeButton favorite={props.favorite} />
          </div>
        </div>
      </article>
    </>
  )
}
