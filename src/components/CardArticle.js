import React from 'react'
import LikeButton from './LikeButton'
import './styles/CardArticle.css'

export default function CardArticle(props) {
  // const { card } = props

  const goUrl = () => {
    window.open(props.url)
  }

  return (
    <>
      <article className='card' key={props.id}>
        <div className='cardContentTop' onClick={goUrl}>
          <img
            className='cardTopAvatar'
            src={props.avatar}
            alt={props.member}
          />
          {/*                 <p className='cardTopTitle'maxLength='10'>{card.url}</p>
           */}{' '}
          <div className='cardImgBox'>
            <img className='cardImg' src='../logo512.png' alt='' />
          </div>
        </div>

        <div className='cardBottom'>
          <div className='cardBottomDescritption'>
            <p>{props.description}....</p>
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
