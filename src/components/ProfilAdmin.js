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

  const hideArticles = () => {
    props.setReveal(false)
  }

  return (
    <div className='profilAdmin'>
      <NavLink to='/prez'>
        <button
          type='button'
          className='buttonConnect buttonDownProfil'
          id='accessPrez'
        >
          J'accède au mode présentation
        </button>
      </NavLink>
      <h2 className='textProfilPage' id='h2Profil'>
        Gestion des articles - Mode Admin
      </h2>
      <h3 className='textProfilPage'>⚠ Toute suppression est définitive !</h3>
      <div className='linearticle'>
        {!props.reveal ? (
          <button
            type='button'
            className='buttonConnect buttonDownProfil postedArticles '
            onClick={() => getAllArticles()}
          >
            Voir tous les articles
          </button>
        ) : (
          <button
            type='button'
            className='buttonConnect buttonDownProfil postedArticles '
            onClick={() => hideArticles()}
          >
            Masquer les articles
          </button>
        )}
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
