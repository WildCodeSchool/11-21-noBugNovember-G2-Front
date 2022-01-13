import React from 'react'
import './styles/TeamGallery.css'
import CardArticle from './CardArticle'

export default function TeamGallery({ isFavorite, setIsFavorite, articles }) {
  return (
    <div className='bigGallery'>
      <div className='gallery'>
        {articles
          .filter(card => card.week == 1)
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
            />
          ))}
      </div>

      <div className='gallery'>
        {articles
          .filter(card => card.week != 1)
          .sort((a, b) => (a.itemM > b.itemM ? 1 : -1))
          .map((card, i) => (
            <CardArticle
              order={i}
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
            />
          ))}
      </div>
    </div>
  )
}
