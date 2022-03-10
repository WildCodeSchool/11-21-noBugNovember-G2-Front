import axios from 'axios';
import { useState } from 'react';
import { weekNumber } from 'weeknumber';
import '../components/styles/ProfilChangeAvatarAddArticle.css';

const ProfilChangeAvatarAddArticle = (props) => {
	const [updateAvatar, setUpdateAvatar] = useState('');
	const [article, setArticle] = useState('');
	const [description, setDescription] = useState('');
	const [post, setPost] = useState(false);
	const [errorArticle, setErrorArticle] = useState('');
	const [errorAvatar, setErrorAvatar] = useState('');

	const changeUrl = (e) => {
		setUpdateAvatar(e.target.value);
	};
	const letsGo = () => {
		if (updateAvatar) {
			console.log(updateAvatar.type);
			axios.post(`${process.env.REACT_APP_API_ROUTE}/members/avatar/update`, {
				id: localStorage.getItem('id_user'),
				avatar: updateAvatar,
			});
			localStorage.setItem('avatar', updateAvatar);
			props.setAvatar(updateAvatar);
			setErrorAvatar(false);
		} else {
			setErrorAvatar(true);
		}
	};

	const changeArticle = (e) => {
		setArticle(e.target.value);
	};

	const changeDescription = (e) => {
		setDescription(e.target.value);
	};

	const postArticle = () => {
		if (article && description) {
			let weekactual = weekNumber(new Date());
			let yearactual = new Date().getFullYear();
			axios.post(`${process.env.REACT_APP_API_ROUTE}/articles/add`, {
				week: weekactual,
				year: yearactual,
				id_users: localStorage.getItem('id_user'),
				url: article,
				description: description,
				likes: 0,
			});
			setPost(true);
			setErrorArticle(false);
			props.setBddChange(!props.bddChange);
		} else setErrorArticle(true);
	};

	const newArticlePlease = () => {
		setPost(false);
		setArticle('');
		setDescription('');
	};

	return (
		<div className="flexProfil">
			<div className="blocProfil bloc">
				<div>
					<h4 className="textProfilPage">
						Souhaitez-vous mettre à jour votre avatar ?
					</h4>
				</div>
				<form className="formProfil">
					<input
						type="text"
						className="inputText buttonConnect "
						placeholder="URL de votre image"
						onChange={(e) => changeUrl(e)}
						value={updateAvatar}
					></input>
					{errorAvatar === '' || errorAvatar === true ? (
						<button
							type="button"
							className="buttonConnect buttonUpProfil "
							onClick={() => letsGo()}
						>
							Je change mon avatar
						</button>
					) : (
						<button
							type="button"
							className="buttonConnect buttonUpProfil "
							onClick={() => letsGo()}
						>
							Je ne l'aime toujours pas, vite, un autre !
						</button>
					)}
					{errorAvatar && (
						<p className="textProfilPage">
							⚠ Vous avez oublié quelque chose avant de cliquer !
						</p>
					)}
				</form>
			</div>
			<div className={post ? 'cache' : 'addarticle bloc'}>
				<h4 className="textProfilPage">
					Souhaitez-vous ajouter un article à la veille ?
				</h4>
				<form className="formProfil">
					<input
						type="text"
						className="inputText buttonConnect  "
						placeholder="URL de votre article"
						onChange={(e) => changeArticle(e)}
						value={article}
					></input>
					<input
						type="text"
						className="inputText buttonConnect  "
						placeholder="Titre de votre article"
						onChange={(e) => changeDescription(e)}
						value={description}
					></input>
					<button
						type="button"
						className="buttonConnect buttonUpProfil  "
						onClick={() => postArticle()}
					>
						J'ajoute un article
					</button>
					{errorArticle && (
						<p className="textProfilPage">
							⚠ Vous avez oublié quelque chose avant de cliquer !
						</p>
					)}
				</form>
			</div>
			<div className={post ? 'alright' : 'cache'}>
				<h4 className="textProfilPage">
					Nous vous remercions de votre contribution 😀
				</h4>
				<button
					type="button"
					className="buttonConnect buttonUpProfil  "
					onClick={() => newArticlePlease()}
				>
					J'ajoute un nouvel article
				</button>
			</div>
		</div>
	);
};

export default ProfilChangeAvatarAddArticle;
