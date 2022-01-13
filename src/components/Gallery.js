import React from 'react'
import './styles/Gallery.css'
import CardArticle from './CardArticle'

export default function Gallery({ isFavorite, setIsFavorite, articles }) {
  return (
    <div className='bigGallery'>
      <div className='gallery'>
        {articles.map(card => (
          <CardArticle
            key={card.id}
            id={card.id}
            week={card.week}
            year={card.year}
            member={card.member}
            url={card.url}
            description={card.description}
            avatar={card.avatar}
            favorite={card.likes}
            isFavorite={isFavorite}
            setIsFavorite={setIsFavorite}
          />
        ))}
      </div>
    </div>
  )
}
