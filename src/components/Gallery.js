import React from 'react'
import {useState, useEffect} from 'react'
import './styles/Gallery.css'
import CardArticle from './CardArticle'
import Search from './Search'

import PopupSocial from './PopupSocial'
import react from 'react'



export default function Gallery(props) {


  return (
    <div className='bigGallery'>
      <Search setSearchValue={props.setSearchValue} searchValue={props.searchValue}/>
      <PopupSocial
        openPartage={props.openPartage}
        urlPartage={props.urlPartage}
        clickClosePartage={props.clickClosePartage}
      />
      <div className='gallery'>
        {props.articleSearchFiltered.map(card => (
          <CardArticle
            key={card.id}
            id={card.id}
            week={card.week}
            year={card.year}
            name={card.namez}
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
      </div>
    </div>
  )
}
