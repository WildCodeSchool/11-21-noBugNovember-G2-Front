import axios from 'axios';
import GalleryPrez from '../components/GalleryPrez';
import { useState, useEffect } from 'react';
import { weekNumber } from 'weeknumber';
import '../components/styles/Prez.css';

const Prez = (props) => {
	const [result, setResult] = useState([]);
	const [link, setLink] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);
	let sBrowser,
		sUsrAg = navigator.userAgent;

	useEffect(() => {
		if (localStorage.getItem('admin') == 1) {
			axios
				.put(`${process.env.REACT_APP_API_ROUTE}/articles/search/date`, {
					year: new Date().getFullYear(),
					week: weekNumber(new Date()),
				})
				.then((response) => response.data)
				.then((data) => setResult(data));
			setIsAdmin(true);
		}
	}, []);

	useEffect(() => {}, [link]);

	return (
		<div className="prez">
			<div className={!isAdmin ? 'ptdr' : 'cache'}>
				<h2>Vous devez être administrateur pour accéder à cette partie</h2>
			</div>
			<div className={isAdmin ? 'ensemble' : 'cache'}>
				<div className="frame">
					<object className="visuLien" data={link} height="95%">
						<div className="visuLien">
							<embed
								className="visuLienEmbed"
								src={link}
								height="100vh"
							></embed>
						</div>
						{sUsrAg.indexOf('Firefox') > -1 ? (
							link.length > 1 ? (
								<a className="messages" href={link} target="_blank">
									<h2>
										Hélas, le site refuse de s'ouvrir.
										<br />
										Cliquez ici pour l'ouvrir dans un nouvel onglet !
									</h2>
								</a>
							) : (
								<h2 className="messages">
									Pour commencer, cliquez sur une carte à droite
								</h2>
							)
						) : link.length > 1 ? (
							''
						) : (
							<h2 className="messages">
								Pour commencer, cliquez sur une carte à droite
							</h2>
						)}
					</object>
				</div>
				<div className="list">
					<GalleryPrez
						articles={result}
						isFavorite={props.isFavorite}
						setIsFavorite={props.setIsFavorite}
						isRead={props.isRead}
						setIsRead={props.setIsRead}
						changeIsRead={props.changeIsRead}
						openPartage={props.openPartage}
						urlPartage={props.urlPartage}
						clickClosePartage={props.clickClosePartage}
						setUrlPartage={props.setUrlPartage}
						clickOpenPartage={props.clickOpenPartage}
						setLink={setLink}
					/>
				</div>
			</div>
		</div>
	);
};

export default Prez;
