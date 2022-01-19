import React from 'react'
import './styles/TeamGallery.css'
import CardArticle from './CardArticle'
import PopupSocial from './PopupSocial'
import {weekNumber} from 'weeknumber'

export default function TeamGallery(props) {
  
  let weekactual = weekNumber(new Date())
  console.log(weekactual)
  return (
    <div className='bigGallery'>
      <PopupSocial
        openPartage={props.openPartage}
        urlPartage={props.urlPartage}
        clickClosePartage={props.clickClosePartage}
      />
      <div className='gallery'>
        {props.articles
          .sort((a, b) => {
            if (a.member.toLowerCase() < b.member.toLowerCase()) return -1
            if (a.member.toLowerCase() > b.member.toLowerCase()) return 1
            return 0
          })
          .filter(card => parseInt(card.week) == weekactual)
          .map(card => (
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
              setUrlPartage={props.setUrlPartage}
              clickOpenPartage={props.clickOpenPartage}
              isRead={props.isRead}
              changeIsRead={props.changeIsRead}
              setIsRead={props.setIsRead}
            />
          ))}
      </div>

      <div className='gallery'>
        {props.articles
          .sort((a, b) => {
            if (a.week > b.week) return -1
            if (a.week < b.week) return 1
            return 0
          })
          .sort((a, b) => {
            if (a.year > b.year) return -1
            if (a.year < b.year) return 1
            return 0
          })
          .filter(card => card.week != weekactual)
          .map(card => (
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
              setUrlPartage={props.setUrlPartage}
              clickOpenPartage={props.clickOpenPartage}
              isRead={props.isRead}
              changeIsRead={props.changeIsRead}
              setIsRead={props.setIsRead}
            />
          ))}
      </div>
    </div>
  )
}
