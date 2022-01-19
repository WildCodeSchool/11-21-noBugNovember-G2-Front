import imgDisco from '../assets/croix_rouge.png'
import {useState} from 'react'
import '../components/styles/Disconnect.css'
import axios from 'axios'

const Disconnect = ({setAvatar, setIsConnected}) => {
  const [updateAvatar, setUpdateAvatar] = useState("");
	
	const aurevoir = () => {
    localStorage.clear();
    setAvatar(imgDisco);
    setIsConnected(false);
  }
  
	const changeUrl = (e) => {
		setUpdateAvatar(e.target.value)
	}

	const letsGo = () => {
		axios.post("http://localhost:3030/members/avatar/update",
		{
			id: localStorage.getItem("id_user"),
			avatar: updateAvatar
		})
		localStorage.setItem('avatar', updateAvatar)
		setAvatar(updateAvatar)
	}

  return (
    <div className="Disconnect">
      <h2>Bienvenue {localStorage.getItem('name')}</h2>
			<h4>Souhaitez-vous mettre à jour votre avatar ?</h4>
			Veuillez indiquer l'URL de votre image (on ne stocke aucune image sur notre serveur)
			<form>
				<div>
					<input type="text" id="avatar" onChange={(e) => changeUrl(e)} value={updateAvatar}></input>
				</div>
				<input type="button" id="avatar" onClick={() => letsGo()} value="Mettre à jour votre avatar"></input>	
			</form>
      <input type="button" id='submit' onClick={() => aurevoir()} value='Déconnection'></input>
    </div>
  )
}

export default Disconnect