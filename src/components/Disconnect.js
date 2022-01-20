import imgDisco from '../assets/croix_rouge.png'
import {useState} from 'react'
import '../components/styles/Disconnect.css'
import axios from 'axios'
import {weekNumber} from 'weeknumber'

const Disconnect = ({setAvatar, setIsConnected}) => {
  const [updateAvatar, setUpdateAvatar] = useState("");
	const [article, setArticle] = useState("");
	const [description, setDescription] = useState("");
	const [post, setPost] = useState(false)

	const aurevoir = () => {
    localStorage.clear();
    setAvatar(imgDisco);
    setIsConnected(false);
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
			axios.post("http://localhost:3030/members/avatar/update",
			{
				id: localStorage.getItem("id_user"),
				avatar: updateAvatar
			})
			localStorage.setItem('avatar', updateAvatar)
			setAvatar(updateAvatar)
	}

	const postArticle = () => {
		let weekactual = weekNumber(new Date())
		let yearactual = new Date().getFullYear()
		axios.post("http://localhost:3030/articles/add",
			{
				week: weekactual,
				year: yearactual,
				id_users: localStorage.getItem("id_user"),
				url: article,
				description: description,
				likes: 0
			})
		setPost(true)
	}

	const newArticlePlease = () => {
		setPost(false)
		setArticle("")
		setDescription("")
	}

  return (
    <div className="Disconnect">
      <h2>Bienvenue {localStorage.getItem('name')}</h2>
			<h4>Souhaitez-vous mettre à jour votre avatar ?</h4>
			Veuillez indiquer l'URL de votre image (on ne stocke aucune image sur notre serveur)
			<form>
				<div>
					<input type="text" id="avatarimg" onChange={(e) => changeUrl(e)} value={updateAvatar}></input>
				</div>
				<input type="button" id="avatar" onClick={() => letsGo()} value="Mettre à jour votre avatar"></input>	
			</form><br/>
			<div className={post?"cache":"addarticle"}>
				<h4>Vous souhaitez ajouter un article à la veille ?</h4>
				<form>
					<div>
						URL de votre article : <input type="text" id="article" onChange={(e) => changeArticle(e)} value={article}></input>
						Titre de l'article : <input type="text" id="description" onChange={(e) => changeDescription(e)} value={description}></input>
					</div>
					<input type="button" id="avatar" onClick={() => postArticle()} value="Ajouter un article à la veille"></input>
				</form>
			</div>
			<div className={post?"alright":"cache"}>
				<h4>Nous vous remercions de votre contribution 😀</h4>
				<input type="button" id="avatar" onClick={() => newArticlePlease()} value="Ajouter un nouvel article"></input>
			</div>
			<br/>
      <input type="button" id='submit' onClick={() => aurevoir()} value='Déconnection'></input>
    </div>
  )
}

export default Disconnect