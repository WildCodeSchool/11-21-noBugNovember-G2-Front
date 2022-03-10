import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles/CardArticle.css';

const FavoriteButton = (props) => {
	const [isBookFull, setIsBookFull] = useState(false);
	const [myId, setMyId] = useState();
	const bookChange = () => {
		if (localStorage.getItem('id_user') === null) {
			alert(
				"Veuillez d'abord vous connecter à votre compte pour ajouter des articles dans vos favoris"
			);
		} else if (localStorage.getItem('id_user') !== null && !isBookFull) {
			setIsBookFull(true);
			axios.post(`${process.env.REACT_APP_API_ROUTE}/favorite/add`, {
				id_user: parseInt(localStorage.getItem('id_user')),
				id_article: props.id,
			});
		} else if (localStorage.getItem('id_user') !== null && isBookFull) {
			let temp = props.isFavorite;
			setIsBookFull(false);
			axios.delete(`${process.env.REACT_APP_API_ROUTE}/favorite/delete`, {
				data: { id: myId },
			});
			temp = props.isFavorite.filter((el) => el != props.id);
			props.setIsFavorite(temp);
		}
	};

	//Sert à mettre en true ou non si l'article est en favori
	const changeMyId = (params) => {
		if (params[0] !== undefined) {
			setMyId(params[0].id);
			setIsBookFull(true);
		}
	};

	//Au chargement du composant, recherche dans la BDD l'id du favoris (utile pour sa suppresion)
	useEffect(() => {
		if (localStorage.getItem('id_user') !== undefined) {
			axios
				.put(`${process.env.REACT_APP_API_ROUTE}/favorite/getid`, {
					id_user: localStorage.getItem('id_user'),
					id_article: String(props.id),
				})
				.then((response) => response.data)
				.then((data) => changeMyId(data));
		}
	}, []);

	return (
		<div className="cardBottomFavorite cardBottomLink">
			<a className="cardBottomLink" target="_blank" rel="noreferrer">
				<i
					className={`${isBookFull ? 'fas' : 'far'} fa-bookmark bookmarkIcon`}
					onClick={() => bookChange()}
				></i>
			</a>
		</div>
	);
};

export default FavoriteButton;
