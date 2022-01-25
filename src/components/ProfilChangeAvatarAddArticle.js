import axios from 'axios'
import { weekNumber } from 'weeknumber'
import { useState, useEffect } from 'react'

const ProfilChangeAvatarAddArticle = (props) => {
  const [updateAvatar, setUpdateAvatar] = useState('')
  const [article, setArticle] = useState('')
  const [description, setDescription] = useState('')
  const [post, setPost] = useState(false)

  const changeUrl = (e) => {
    setUpdateAvatar(e.target.value)
  }
  const letsGo = () => {
    console.log(updateAvatar.type)
    axios.post('http://localhost:3030/members/avatar/update', {
      id: localStorage.getItem('id_user'),
      avatar: updateAvatar,
    })
    localStorage.setItem('avatar', updateAvatar)
    props.setAvatar(updateAvatar)
  }

  const changeArticle = (e) => {
    setArticle(e.target.value)
  }

  const changeDescription = (e) => {
    setDescription(e.target.value)
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

  const newArticlePlease = () => {
    setPost(false)
    setArticle('')
    setDescription('')
  }

  return (
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
  )
}

export default ProfilChangeAvatarAddArticle
