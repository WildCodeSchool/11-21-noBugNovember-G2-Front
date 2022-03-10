import axios from 'axios';
import ProfilArticles from './ProfilArticles';

const ProfilUser = (props) => {
	const getMyArticles = () => {
		axios
			.post(`${process.env.REACT_APP_API_ROUTE}/articles/byuser`, {
				id_users: parseInt(localStorage.getItem('id_user')),
			})
			.then((response) => response.data)
			.then((data) => props.setStokage(data));
		props.setReveal(true);
	};

	const hideArticles = () => {
		props.setReveal(false);
	};

	return (
		<div className="profilUser">
			<h2 className="textProfilPage">Gestion de vos articles</h2>
			<h3 className="textProfilPage">⚠ Toute suppression est définitive !</h3>
			<div className="linearticle">
				{!props.reveal ? (
					<button
						type="button"
						className="buttonConnect buttonDownProfil postedArticles"
						onClick={() => getMyArticles()}
					>
						Voir mes articles
					</button>
				) : (
					<button
						type="button"
						className="buttonConnect buttonDownProfil postedArticles"
						onClick={() => hideArticles()}
					>
						Masquer mes articles
					</button>
				)}

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
	);
};

export default ProfilUser;
