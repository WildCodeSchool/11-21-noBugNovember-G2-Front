import React from 'react'
import ProfilArticles from './ProfilArticles'
import axios from 'axios'

const ProfilUser = (props) => {
  const getMyArticles = () => {
    axios
      .post('http://localhost:3030/articles/byuser', {
        id_users: parseInt(localStorage.getItem('id_user')),
      })
      .then((response) => response.data)
      .then((data) => props.setStokage(data))
    props.setReveal(true)
  }

  return (
    <div>
      <h2 className='textDisconnectPage'>
        Gestion de vos articles postés en veille
      </h2>
      <h3 className='textDisconnectPage'>
        ⚠ Toute suppression est définitive !
      </h3>
      <div className='linearticle'>
        <button
          type='button'
          className='buttonPageDisconnect buttonDownPageDisco seeMoreArticle '
          id='seePostedArticles'
          onClick={() => getMyArticles()}
        >
          Voir vos articles postés
        </button>
        {props.reveal ? (
          <ProfilArticles
            admin={props.admin}
            moreArticle={props.moreArticle}
            bdd={props.bdd}
            stokage={props.stokage}
            deleteArticle={props.deleteArticle}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default ProfilUser
