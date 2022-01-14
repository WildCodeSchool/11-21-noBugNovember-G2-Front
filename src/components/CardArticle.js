import React from 'react'
import LikeButton from './LikeButton'
import PopupSocial from './PopupSocial'
import './styles/CardArticle.css'
import Im from '../assets/placeholder.jpg'

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
          <div className='cardDate'>
            <p>
              {props.week} - {props.year}
            </p>
            <p>{props.member}</p>
          </div>
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
              rel='noreferrer'
              onClick={() => props.clickOpenPartage(props.url)}
            >
              ⛬
            </a>
            {/* <PopupSocial open={open} timeout={1000}/> */}
                {/* <ClickAwayListener onClickAway={() => { setOpen(false); }}></ClickAwayListener> */}

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
