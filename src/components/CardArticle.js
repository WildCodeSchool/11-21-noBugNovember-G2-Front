import React from 'react'
import './styles/CardArticle.css'

export default function CardArticle(props) {
  const { card } = props
  return (
    <>
      <div className='CardMembre' key={card.id}>
        <div className='GaleryCharacters'>
          <div className='cardMemberSolo'>
            <div className='hautCard'>
              <div className='hautCardAvatar'>
                <img
                  className='CardImgHautCard'
                  src={card.avatar}
                  alt={card.member}
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
                <p>{card.description}....</p>
              </div>

              <div className='containerBottomTrucs'>
                <div>
                  <a
                    className='voirPlusLien'
                    target='_blank'
                    href={card.url}
                    rel='noreferrer'
                  >
                    Voir plus
                  </a>
                </div>

                <div className='iconePaquet'>
                  <a
                    className='sousCard'
                    target='_blank'
                    href={card.url}
                    rel='noreferrer'
                  >
                    ⛬
                  </a>
                  <a
                    className='sousCard'
                    target='_blank'
                    href={card.url}
                    rel='noreferrer'
                  >
                    🔖
                  </a>
                  <a
                    className='sousCard'
                    target='_blank'
                    href={card.url}
                    rel='noreferrer'
                  >
                    🔥
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
