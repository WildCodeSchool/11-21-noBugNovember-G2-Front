import React from 'react'
import './styles/Gallery.css'
import CardArticle from './CardArticle'

export default function Gallery({ isFavorite, setIsFavorite }) {
  return (
    <div className='bigGallery'>
      <div className='gallery'>
        {isFavorite.map(card => (
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
          />
        ))}
      </div>
    </div>
  )
}
