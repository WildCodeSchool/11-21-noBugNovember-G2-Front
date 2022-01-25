import imgDisco from '../assets/croix_rouge.png'
import { useState, useEffect } from 'react'
import '../components/styles/Disconnect.css'
import axios from 'axios'
import { weekNumber } from 'weeknumber'
import { NavLink } from 'react-router-dom'

const Disconnect = ({ setAvatar, setIsConnected, admin, setAdmin }) => {
  const [updateAvatar, setUpdateAvatar] = useState('')
  const [article, setArticle] = useState('')
  const [description, setDescription] = useState('')
  const [post, setPost] = useState(false)
  const [stokage, setStokage] = useState([])
  const [reveal, setReveal] = useState(false)
  const [bdd, setBdd] = useState([])
  const [moreArticle, setMoreArticle] = useState(12)

  const aurevoir = () => {
    localStorage.clear()
    setAvatar(imgDisco)
    setIsConnected(false)
    setAdmin(false)
  }

  const changeUrl = (e) => {
    setUpdateAvatar(e.target.value)
  }

  const changeArticle = (e) => {
    setArticle(e.target.value)
  }

  const changeDescription = (e) => {
    setDescription(e.target.value)
  }

  const letsGo = () => {
    console.log(updateAvatar.type)
    axios.post('http://localhost:3030/members/avatar/update', {
      id: localStorage.getItem('id_user'),
      avatar: updateAvatar,
    })
    localStorage.setItem('avatar', updateAvatar)
    setAvatar(updateAvatar)
  }

  const postArticle = () => {
    let weekactual = weekNumber(new Date())
    let yearactual = new Date().getFullYear()
    axios.post('http://localhost:3030/articles/add', {
      week: weekactual,
      year: yearactual,
      id_users: localStorage.getItem('id_user'),
      url: article,
      description: description,
      likes: 0,
    })
    setPost(true)
  }

  const deleteArticle = (params) => {
    axios.delete('http://localhost:3030/articles/delete', {
      data: { id: params },
    })
  }

  const newArticlePlease = () => {
    setPost(false)
    setArticle('')
    setDescription('')
  }

  const getMyArticles = () => {
    axios
      .post('http://localhost:3030/articles/byuser', {
        id_users: parseInt(localStorage.getItem('id_user')),
      })
      .then((response) => response.data)
      .then((data) => setStokage(data))
    setReveal(true)
  }

  const getAllArticles = () => {
    axios
      .get('http://localhost:3030/articles/godmode/read')
      .then((response) => response.data)
      .then((data) => setBdd(data))
    setReveal(true)
  }

  const seeMoreArticle = () => setMoreArticle(moreArticle + 12)

  useEffect(() => {
    if (localStorage.getItem('admin') == 1) {
      setAdmin(true)
    }
  }, [])

  useEffect(() => {}, [stokage, bdd])

  useEffect(() => {
    if (admin && reveal) {
      axios
        .get('http://localhost:3030/articles/godmode/read')
        .then((response) => response.data)
        .then((data) => setBdd(data))
    }
    if (!admin && reveal) {
      axios
        .post('http://localhost:3030/articles/byuser', {
          id_users: parseInt(localStorage.getItem('id_user')),
        })
        .then((response) => response.data)
        .then((data) => setStokage(data))
    }
  })

  return (
    <div className='Disconnect'>
      <h2 className='textDisconnectPage'>
        Bienvenue {localStorage.getItem('name')}
      </h2>
      <div className='flexDisconnectButtons'>
        <div>
          <h4 className='textDisconnectPage'>
            Souhaitez-vous mettre à jour votre avatar ?
          </h4>
          <h5 className='textDisconnectPage' id='h5DiscoPage'>
            (on ne stocke aucune image sur notre serveur)
          </h5>
          <form>
            <div>
              <input
                type='text'
                className='inputText seeMoreArticle'
                id='avatarimg'
                placeholder='URL de votre image'
                onChange={(e) => changeUrl(e)}
                value={updateAvatar}
              ></input>
            </div>
            <button
              type='button'
              className='buttonPageDisconnect buttonUpPageDisco seeMoreArticle'
              id='avatar'
              onClick={() => letsGo()}
            >
              Mettre à jour votre avatar
            </button>
          </form>
        </div>
        <div className={post ? 'cache' : 'addarticle'}>
          <h4 className='textDisconnectPage'>
            Souhaitez-vous ajouter un article à la veille ?
          </h4>
          <form>
            <div>
              <input
                type='text'
                className='inputText seeMoreArticle '
                id='article'
                placeholder='URL de votre article'
                onChange={(e) => changeArticle(e)}
                value={article}
              ></input>
              <input
                type='text'
                className='inputText seeMoreArticle '
                id='description'
                placeholder="Titre de l'article"
                onChange={(e) => changeDescription(e)}
                value={description}
              ></input>
            </div>
            <button
              type='button'
              className='buttonPageDisconnect buttonUpPageDisco seeMoreArticle '
              id='addArticle'
              onClick={() => postArticle()}
            >
              Ajouter un article à la veille
            </button>
          </form>
        </div>
        <div className={post ? 'alright' : 'cache'}>
          <h4 className='textDisconnectPage'>
            Nous vous remercions de votre contribution 😀
          </h4>
          <button
            type='button'
            className='buttonPageDisconnect buttonUpPageDisco seeMoreArticle '
            id='addArticleAgain'
            onClick={() => newArticlePlease()}
          >
            Ajouter un nouvel article
          </button>
        </div>
      </div>
      <div className={admin ? 'modeprez' : 'cache'}>
        <NavLink to='/prez'>
          <button
            type='button'
            className='buttonPageDisconnect buttonDownPageDisco seeMoreArticle '
            id='accessPrez'
          >
            Accéder au mode présentation
          </button>
        </NavLink>
      </div>
      <div className={admin ? 'admin' : 'cache'}>
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
          <table className={reveal ? 'reveal' : 'cache'}>
            <thead className={reveal ? 'reveal' : 'cache'}>
              <tr className={reveal ? 'reveal' : 'cache'}>
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
              {bdd.slice(0, moreArticle).map((detail) => (
                <tr>
                  <th>{detail.name}</th>
                  <th>{detail.week}</th>
                  <th>{detail.year}</th>
                  <th>{detail.url}</th>
                  <th>{detail.description}</th>
                  <th>
                    <i
                      onClick={() => deleteArticle(detail.id)}
                      class='fas fa-times-circle'
                    ></i>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={reveal ? 'seeMore' : 'cache'}>
            <div className='seeMoreArticle' onClick={seeMoreArticle}>
              Voir plus
            </div>
          </div>
        </div>
      </div>
      <div className={!admin ? 'perso' : 'cache'}>
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
          <table className={reveal ? 'reveal' : 'cache'}>
            <thead className={reveal ? 'reveal' : 'cache'}>
              <tr className={reveal ? 'reveal' : 'cache'}>
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
              {stokage.slice(0, moreArticle).map((detail) => (
                <tr>
                  <th>{detail.week}</th>
                  <th>{detail.year}</th>
                  <th>{detail.url}</th>
                  <th>{detail.description}</th>
                  <th>
                    <i
                      onClick={() => deleteArticle(detail.id)}
                      class='fas fa-times-circle'
                    ></i>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={reveal ? 'seeMore' : 'cache'}>
            <div className='seeMoreArticle' onClick={seeMoreArticle}>
              Voir plus
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}

export default Disconnect
