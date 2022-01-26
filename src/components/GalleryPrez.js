import React from 'react'
import './styles/GalleryPrez.css'
import CardArticlePrez from './CardArticlePrez'
import PopupSocial from './PopupSocial'

const GalleryPrez = (props) => {
  return (
    <div className='bigGalleryPrez'>
      <PopupSocial
        openPartage={props.openPartage}
        urlPartage={props.urlPartage}
        clickClosePartage={props.clickClosePartage}
      />
      <div className='galleryprez'>
        {props.articles.map(card => (
          <CardArticlePrez
            key={card.id}
            id={card.id}
            week={card.week}
            year={card.year}
            name={card.name}
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
            setLink={props.setLink}
          />
        ))}

      </div>
    </div>
  )
}

export default GalleryPrez