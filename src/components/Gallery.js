import React from 'react'
import './styles/Gallery.css'
import CardArticle from './CardArticle'
import PopupSocial from './PopupSocial'
import { useState } from 'react'

export default function Gallery(props) {
  const [openPartage, setOpenPartage] = useState(false);
  const [urlPartage, setUrlPartage] = useState("");
  
  const clickOpenPartage = (url) => {
    setOpenPartage(true)
    setUrlPartage(url)
  }
  const clickClosePartage = () => {
    setOpenPartage(false)    
  }
  return (
    <div className='bigGallery'>
      <PopupSocial openPartage={openPartage} 
      urlPartage={urlPartage}
      clickClosePartage={clickClosePartage}
      />
      <div className='gallery'>
        {props.articles.map(card => (
          <CardArticle
            key={card.id}
            id={card.id}
            week={card.week}
            year={card.year}
            member={card.member}
            url={card.url}
            description={card.description}
            avatar={card.avatar}
            favorite={card.favorite}
            isFavorite={props.isFavorite}
            setIsFavorite={props.setIsFavorite}
            setUrlPartage={setUrlPartage}
            clickOpenPartage={clickOpenPartage} 
            isRead={props.isRead}
            setIsRead={props.setIsRead}
            changeIsRead={props.changeIsRead}
          />
        ))}
      </div>
    </div>
  )
}
