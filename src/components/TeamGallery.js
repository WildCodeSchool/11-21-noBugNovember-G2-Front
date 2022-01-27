import CardArticle from './CardArticle'
import PopupSocial from './PopupSocial'
import './styles/TeamGallery.css'

export default function TeamGallery(props) {
  return (
    <div className='bigGallery'>
      <PopupSocial
        openPartage={props.openPartage}
        urlPartage={props.urlPartage}
        clickClosePartage={props.clickClosePartage}
      />
      <div className='gallery'>
        {props.articles.map((card) => (
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
            changeIsRead={props.changeIsRead}
            setIsRead={props.setIsRead}
          />
        ))}
      </div>
    </div>
  )
}
