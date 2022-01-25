import axios from 'axios'
import { weekNumber } from 'weeknumber'
import { useState } from 'react'
import '../components/styles/ProfilChangeAvatarAddArticle.css'

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
    <div className='flexProfil'>
      <div className='blocProfil'>
        <div>
          <h4 className='textProfilPage'>
            Souhaitez-vous mettre à jour votre avatar ?
          </h4>
          <h5 className='textProfilPage'>
            (on ne stocke aucune image sur notre serveur)
          </h5>
        </div>
        <form className='formProfil'>
          <input
            type='text'
            className='inputText buttonConnect '
            placeholder='URL de votre image'
            onChange={(e) => changeUrl(e)}
            value={updateAvatar}
          ></input>
          <button
            type='button'
            className='buttonConnect buttonUpProfil '
            onClick={() => letsGo()}
          >
            Je change mon avatar
          </button>
        </form>
      </div>
      <div className={post ? 'cache' : 'addarticle'}>
        <h4 className='textProfilPage'>Souhaitez-vous ajouter un article ?</h4>
        <form className='formProfil'>
          <input
            type='text'
            className='inputText buttonConnect  '
            placeholder="URL de l'article"
            onChange={(e) => changeArticle(e)}
            value={article}
          ></input>
          <input
            type='text'
            className='inputText buttonConnect  '
            placeholder="Titre de l'article"
            onChange={(e) => changeDescription(e)}
            value={description}
          ></input>
          <button
            type='button'
            className='buttonConnect buttonUpProfil  '
            onClick={() => postArticle()}
          >
            J'ajoute un article
          </button>
        </form>
      </div>
      <div className={post ? 'alright' : 'cache'}>
        <h4 className='textProfilPage'>
          Nous vous remercions de votre contribution 😀
        </h4>
        <button
          type='button'
          className='buttonConnect buttonUpProfil  '
          onClick={() => newArticlePlease()}
        >
          J'ajoute un nouvel article
        </button>
      </div>
    </div>
  )
}

export default ProfilChangeAvatarAddArticle
