import React from 'react'
import LikeButton from './LikeButton'
import './styles/CardArticle.css'
import Im from '../assets/placeholder.jpg'

export default function CardArticle(props) {
  // const { card } = props
  console.log('api : ', props)
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
          <p className='cardDate'>{props.week} - {props.year}</p>
          {/*                 <p className='cardTopTitle'maxLength='10'>{card.url}</p>
           */}{' '}
          <div className='cardImgBox'>
            <img className='cardImg' src={Im} alt='' />
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
