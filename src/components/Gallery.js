import CardArticle from './CardArticle'
import PopupSocial from './PopupSocial'
import { useState, useEffect } from 'react'
import './styles/Gallery.css'

export default function Gallery(props) {
  const [moreArticle, setMoreArticle] = useState(12)

  let seeMoreArticle = () => setMoreArticle(moreArticle + 12)

  useEffect(() => {
    seeMoreArticle()
  }, [props.posScroll])

  return (
    <div className='bigGallery'>
      <PopupSocial
        openPartage={props.openPartage}
        urlPartage={props.urlPartage}
        clickClosePartage={props.clickClosePartage}
      />
      <div className='gallery'>
        {props.articleSearchFiltered.slice(0, moreArticle).map((card) => (
          <CardArticle
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
          />
        ))}
      </div>
    </div>
  )
}
