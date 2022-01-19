import React from 'react'
import './styles/Gallery.css'
import CardArticle from './CardArticle'
import PopupSocial from './PopupSocial'
import { useState } from 'react'

export default function Gallery(props) {

const [moreArticle, setMoreArticle] = useState(12)

let seeMoreArticle = () => setMoreArticle(moreArticle + 12)
  return (
    <div className='bigGallery'>
      <PopupSocial
        openPartage={props.openPartage}
        urlPartage={props.urlPartage}
        clickClosePartage={props.clickClosePartage}
      />
      <div className='gallery'>
        {props.articles.slice(0, moreArticle).map(card => (
          <CardArticle
            key={card.id}
            id={card.id}
            week={card.week}
            year={card.year}
            member={card.member}
            url={card.url}
            description={card.description}
            avatar={card.avatar}
            likes={card.likes}
            isFavorite={props.isFavorite}
            setIsFavorite={props.setIsFavorite}
            setUrlPartage={props.setUrlPartage}
            clickOpenPartage={props.clickOpenPartage}
            isRead={props.isRead}
            setIsRead={props.setIsRead}
            changeIsRead={props.changeIsRead}
          />
        ))}
        <div onClick={seeMoreArticle}>Voir plus
        </div>
      </div>
    </div>
  )
}
