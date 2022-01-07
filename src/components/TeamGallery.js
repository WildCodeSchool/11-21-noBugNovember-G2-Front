import React from 'react'
import './styles/TeamGallery.css'
import CardArticle from './CardArticle'

export default function TeamGallery({ isFavorite, setIsFavorite }) {




  return (
    <div className='bigGallery'>

      <div className='gallery'>
        {isFavorite.filter((card) => card.week == 1 ).map(card => (
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


      <div className='gallery'>
        {isFavorite.filter((card) => card.week != 1 ).map(card => (
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
