import axios from 'axios';
import check from '../assets/check.png';
import FavoriteButton from './FavoriteButton';
import Im from '../assets/placeholder.jpg';
import LikeButton from './LikeButton';
import { useEffect, useState } from 'react';
import './styles/CardArticle.css';

export default function CardArticle(props) {
	const [isReadMark, setIsReadMark] = useState(false);

	const showCheck = () => {
		props.setLink(props.url);
		props.setIsSelected(props.id);
		let temp = props.isRead;
		if (!temp.includes(props.id)) {
			temp.push(props.id);
			props.changeIsRead(temp);
			setIsReadMark(true);
		}
	};

	useEffect(() => {
		if (props.isRead.includes(props.id)) {
			setIsReadMark(true);
		}
	}, []);

	const [openGraph, setOpenGraph] = useState('');

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_ROUTE}/?url=${props.url}`)
			.then((response) => response.data)
			.then((data) => setOpenGraph(data));
	}, []);

	return (
		<>
			<article
				className={`card ${props.id === props.isSelected && `active`}`}
				key={props.id}
			>
				<div className="cardContentTop" onClick={() => showCheck()}>
					<div className="cardTopBanner">
						<div className="cardContainerTopAvatar">
							<img
								className="cardTopAvatar"
								src={props.avatar}
								alt={props.member}
							/>
						</div>
						<div className="cardTopTitle">
							<p className="cardTopTitleP" maxLength="10">
								{props.name}
							</p>
						</div>
						<div className="cardDate">
							<p>
								S{props.week} - {props.year}
							</p>
							<p className="cardMember">{props.member}</p>
						</div>
					</div>
					<div className="cardImgBox">
						<img
							className={openGraph.image ? 'cardImg' : 'cardImgPlaceholder'}
							src={openGraph.image ? openGraph.image : Im}
							alt=""
						/>
						<img
							className={isReadMark ? 'checkMarkIcon' : ''}
							src={isReadMark ? check : ''}
							alt=""
						/>
					</div>
				</div>

				<div className="cardBottom">
					<div className="cardBottomDescritption">
						<p>{openGraph.title ? openGraph.title : props.description}</p>
					</div>

					<div className="cardBottomFooter">
						<a
							className="cardBottomLink"
							target="_blank"
							rel="noreferrer"
							onClick={() => props.clickOpenPartage(props.url)}
						>
							⛬
						</a>
						<FavoriteButton
							id={props.id}
							isFavorite={props.isFavorite}
							setIsFavorite={props.setIsFavorite}
						/>
						<LikeButton likes={props.likes} id={props.id} />
					</div>
				</div>
			</article>
		</>
	);
}
