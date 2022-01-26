import React from 'react'
import './styles/ProfilArticles.css'

const ProfilArticles = (props) => {
  return (
    <div className='profilTableau'>
      <table className={props.admin ? 'reveal' : 'cache'}>
        <thead className={props.admin ? 'reveal' : 'cache'}>
          <tr className={props.admin ? 'reveal' : 'cache'}>
            <th colspan='6'>Administration</th>
          </tr>
          <tr>
            <th>Membre</th>
            <th>Semaine</th>
            <th>Année</th>
            <th>URL</th>
            <th>Description</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {props.bdd.slice(0, props.moreArticle).map((detail) => (
            <tr>
              <th>{detail.name}</th>
              <th>{detail.week}</th>
              <th>{detail.year}</th>
              <th>{detail.url}</th>
              <th>{detail.description}</th>
              <th>
                <i
                  onClick={() => props.deleteArticle(detail.id)}
                  class='fas fa-times-circle'
                ></i>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <table className={!props.admin ? 'reveal' : 'cache'}>
        <thead className={!props.admin ? 'reveal' : 'cache'}>
          <tr className={!props.admin ? 'reveal' : 'cache'}>
            <th colspan='5'>Administration</th>
          </tr>
          <tr>
            <th>Semaine</th>
            <th>Année</th>
            <th>URL</th>
            <th>Description</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {props.stokage.slice(0, props.moreArticle).map((detail) => (
            <tr>
              <th>{detail.week}</th>
              <th>{detail.year}</th>
              <th>{detail.url}</th>
              <th>{detail.description}</th>
              <th>
                <i
                  onClick={() => props.deleteArticle(detail.id)}
                  class='fas fa-times-circle'
                ></i>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProfilArticles
