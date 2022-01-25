import React from 'react'
import { NavLink } from 'react-router-dom'
import ProfilArticles from './ProfilArticles'
import axios from 'axios'

const ProfilAdmin = (props) => {
  const getAllArticles = () => {
    axios
      .get('http://localhost:3030/articles/godmode/read')
      .then((response) => response.data)
      .then((data) => props.setBdd(data))
    props.setReveal(true)
  }

  return (
    <div>
      <NavLink to='/prez'>
        <button
          type='button'
          className='buttonPageDisconnect buttonDownPageDisco seeMoreArticle '
          id='accessPrez'
        >
          Accéder au mode présentation
        </button>
      </NavLink>
      <h2 className='textDisconnectPage'>
        Gestion des articles postés en veille - Mode Admin
      </h2>
      <h3 className='textDisconnectPage'>
        ⚠ Toute suppression est définitive !
      </h3>
      <div className='linearticle'>
        <button
          type='button'
          className='buttonPageDisconnect buttonDownPageDisco seeMoreArticle '
          id='postedArticles'
          onClick={() => getAllArticles()}
        >
          Voir les articles postés
        </button>
        {props.reveal ? (
          <ProfilArticles
            admin={props.admin}
            bdd={props.bdd}
            stokage={props.stokage}
            moreArticle={props.moreArticle}
            deleteArticle={props.deleteArticle}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default ProfilAdmin
