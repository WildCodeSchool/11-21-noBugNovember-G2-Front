import React from 'react'
import LikeButton from './LikeButton'
import './styles/CardArticle.css'

export default function CardArticle(props) {
  const { card } = props
  return (
    <>
      <div className='CardMembre' key={props.id}>
        <div className='GaleryCharacters'>
          <div className='cardMemberSolo'>
            <div className='hautCard'>
              <div className='hautCardAvatar'>
                <img
                  className='CardImgHautCard'
                  src={props.avatar}
                  alt={props.member}
                />
              </div>
              <div className='titreArticleHautCard'>
                {/*                 <p maxLength='10'>{card.url}</p>
                 */}{' '}
              </div>
            </div>
            <img className='CardImg' src='../logo512.png' alt='' />
            <div className='basCard'>
              <div className='basCardDescri'>
                <p>{props.description}....</p>
              </div>

              <div className='containerBottomTrucs'>
                <div>
                  <a
                    className='voirPlusLien'
                    target='_blank'
                    href={props.url}
                    rel='noreferrer'
                  >
                    Voir plus
                  </a>
                </div>

                <div className='iconePaquet'>
                  <a
                    className='sousCard'
                    target='_blank'
                    href={props.url}
                    rel='noreferrer'
                  >
                    ⛬
                  </a>
                  <a
                    className='sousCard'
                    target='_blank'
                    href={props.url}
                    rel='noreferrer'
                  >
                    🔖
                  </a>
                  <LikeButton favorite={card.favorite} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
