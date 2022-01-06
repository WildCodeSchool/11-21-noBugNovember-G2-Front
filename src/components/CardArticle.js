import React from 'react'
import './styles/CardArticle.css'

export default function CardArticle(props) {
  const { card } = props

  const goUrl = () => {
    window.open(card.url)
  }

  return (
    <>
      <article className='card' key={card.id}>
        <div className='cardContentTop' onClick={goUrl}>
          <img className='cardTopAvatar' src={card.avatar} alt={card.member} />
          {/*                 <p className='cardTopTitle'maxLength='10'>{card.url}</p>
           */}{' '}
          <div className='cardImgBox'>
            <img className='cardImg' src='../logo512.png' alt='' />
          </div>
        </div>

        <div className='cardBottom'>
          <div className='cardBottomDescritption'>
            <p>{card.description}....</p>
          </div>

          <div className='cardBottomFooter'>
            <a
              className='cardBottomLink'
              target='_blank'
              href={card.url}
              rel='noreferrer'
            >
              ⛬
            </a>
            <a
              className='cardBottomLink'
              target='_blank'
              href={card.url}
              rel='noreferrer'
            >
              🔖
            </a>
            <a
              className='cardBottomLink'
              target='_blank'
              href={card.url}
              rel='noreferrer'
            >
              🔥
            </a>
          </div>
        </div>
      </article>
    </>
  )
}
