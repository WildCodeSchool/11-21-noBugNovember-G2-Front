import CardArticlePrez from './CardArticlePrez'
import PopupSocialPrez from './PopupSocialPrez'
import { useState } from 'react'
import './styles/GalleryPrez.css'

const GalleryPrez = (props) => {
  const [isSelected, setIsSelected] = useState(0)
  return (
    <div className='bigGalleryPrez'>
      <PopupSocialPrez
        openPartage={props.openPartage}
        urlPartage={props.urlPartage}
        clickClosePartage={props.clickClosePartage}
      />
      <div className='galleryprez'>
        {props.articles.map((card) => (
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
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          />
        ))}
      </div>
    </div>
  )
}

export default GalleryPrez
