import React from 'react'
import './styles/TeamGallery.css'
import CardArticle from './CardArticle'

export default function TeamGallery({ isFavorite, setIsFavorite, articles, isRead, setIsRead, changeIsRead  }) {
  return (
    <div className='bigGallery'>
      <div className='gallery'>
        {articles
          .sort((a, b) => {
            if (a.member.toLowerCase() < b.member.toLowerCase()) return -1
            if (a.member.toLowerCase() > b.member.toLowerCase()) return 1
            return 0
          })
          .filter(card => card.week == 2)
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
              isFavorite={isFavorite}
              setIsFavorite={setIsFavorite}
              isRead={isRead}
              changeIsRead={changeIsRead}
              setIsRead={setIsRead}
            />
          ))}
      </div>

      <div className='gallery'>
        {articles
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
          .filter(card => card.week != 2)
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
              isFavorite={isFavorite}
              setIsFavorite={setIsFavorite}
              isRead={isRead}
              changeIsRead={changeIsRead}
              setIsRead={setIsRead}
            />
          ))}
      </div>
    </div>
  )
}
