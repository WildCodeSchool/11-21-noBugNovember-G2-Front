import axios from 'axios';
import Gallery from '../components/Gallery';
import { useState, useEffect } from 'react';
import Search from '../components/Search';
import TexteDefile from '../components/TexteDefile';
import '../components/styles/Bookmark.css';

const Bookmark2 = (props) => {
	const [bdd, setBdd] = useState([]); //stock data venant de la base de données

	const [articleSearchFiltered, setArticleSearchFiltered] = useState([]); // stock des articles pour avoir un stock modifiable sans toucher à la bdd de base

	const [year, setYear] = useState([]);
	const [week, setWeek] = useState([]);
	const [user, setUser] = useState([]);

	//Ecoute de la state API, quand elle modifié, on lance le premier tri,
	useEffect(() => {
		axios
			.put(`${process.env.REACT_APP_API_ROUTE}/favorite/bookmark`, {
				id_user: localStorage.getItem('id_user'),
			})
			.then((response) => response.data)
			.then((data) => setBdd(data));
	}, []);

	let tempWeek = []; //stock temporaire tri par semaine
	let tempYear = []; //stock temporaire tri par annee
	let tempUser = []; // stock temporaire des élèves

	//Récupération des années, des numéros de semaines et des élèves
	useEffect(() => {
		tempWeek = [];
		tempYear = [];
		tempUser = [];

		for (let i = 0; i < bdd.length; i++) {
			if (tempWeek.indexOf(bdd[i].week) === -1) {
				tempWeek.push(bdd[i].week);
			}
			if (tempYear.indexOf(bdd[i].year) === -1) {
				tempYear.push(bdd[i].year);
			}
			if (tempUser.indexOf(bdd[i].name) === -1) {
				tempUser.push(bdd[i].name);
			}
		}
		setYear(tempYear);
		setWeek(tempWeek);
		setUser(tempUser);
	}, [bdd]);

	// State du filtre de recherche
	const [searchValue, setSearchValue] = useState('');

	// State des valeur choisies par l'utilisateur
	const [selectWeek, setSelectWeek] = useState(0);
	const [selectYear, setSelectYear] = useState(0);
	const [selectUser, setSelectUser] = useState('');

	//Récupération des semaines en fonction de l'année
	const [yearTemp, setYearTemp] = useState(0);

	useEffect(() => {
		let tempWeek = [];
		if (yearTemp !== 0) {
			bdd.map((el) => {
				if (tempWeek.indexOf(el.week) === -1 && el.year === yearTemp) {
					tempWeek.push(el.week);
				}
			});
			setWeek(tempWeek);
		} else {
			bdd.map((el) => {
				if (tempWeek.indexOf(el.week) === -1) {
					tempWeek.push(el.week);
				}
			});
			setWeek(tempWeek);
		}
	}, [yearTemp]);

	// UseEffect de la recherche
	useEffect(() => {
		let articleFilteredTemp = [];
		articleFilteredTemp = bdd.filter((res) => {
			if (selectUser.length) {
				if (selectWeek !== 0 && selectYear === 0) {
					return (
						(res.description
							.toLowerCase()
							.includes(searchValue.toLowerCase()) ||
							res.name.toLowerCase().includes(searchValue.toLowerCase())) &&
						res.name.toLowerCase().includes(selectUser.toLowerCase()) &&
						res.week === selectWeek
					);
				} else if (selectWeek === 0 && selectYear !== 0) {
					return (
						(res.description
							.toLowerCase()
							.includes(searchValue.toLowerCase()) ||
							res.name.toLowerCase().includes(searchValue.toLowerCase())) &&
						res.name.toLowerCase().includes(selectUser.toLowerCase()) &&
						res.year === selectYear
					);
				} else if (selectWeek !== 0 && selectYear !== 0) {
					return (
						(res.description
							.toLowerCase()
							.includes(searchValue.toLowerCase()) ||
							res.name.toLowerCase().includes(searchValue.toLowerCase())) &&
						res.name.toLowerCase().includes(selectUser.toLowerCase()) &&
						res.year === selectYear &&
						res.week === selectWeek
					);
				} else {
					return (
						(res.description
							.toLowerCase()
							.includes(searchValue.toLowerCase()) ||
							res.name.toLowerCase().includes(searchValue.toLowerCase())) &&
						res.name.toLowerCase().includes(selectUser.toLowerCase())
					);
				}
			} else {
				if (selectWeek !== 0 && selectYear === 0) {
					return (
						(res.description
							.toLowerCase()
							.includes(searchValue.toLowerCase()) ||
							res.name.toLowerCase().includes(searchValue.toLowerCase())) &&
						res.week === selectWeek
					);
				} else if (selectWeek === 0 && selectYear !== 0) {
					return (
						(res.description
							.toLowerCase()
							.includes(searchValue.toLowerCase()) ||
							res.name.toLowerCase().includes(searchValue.toLowerCase())) &&
						res.year === selectYear
					);
				} else if (selectWeek !== 0 && selectYear !== 0) {
					return (
						(res.description
							.toLowerCase()
							.includes(searchValue.toLowerCase()) ||
							res.name.toLowerCase().includes(searchValue.toLowerCase())) &&
						res.year === selectYear &&
						res.week === selectWeek
					);
				} else {
					return (
						res.description.toLowerCase().includes(searchValue.toLowerCase()) ||
						res.name.toLowerCase().includes(searchValue.toLowerCase())
					);
				}
			}
		});

		setArticleSearchFiltered(articleFilteredTemp);
	}, [searchValue, selectYear, selectWeek, selectUser, bdd]);

	return (
		<div className="bookmark">
			<TexteDefile title=" mes bookmarks | mes bookmarks | mes bookmarks | " />
			<Search
				setSearchValue={setSearchValue}
				searchValue={searchValue}
				year={year}
				week={week}
				user={user}
				setSelectYear={setSelectYear}
				setSelectWeek={setSelectWeek}
				setSelectUser={setSelectUser}
				yearTemp={yearTemp}
				setYearTemp={setYearTemp}
			/>
			<Gallery
				articleSearchFiltered={articleSearchFiltered}
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
			/>
		</div>
	);
};

export default Bookmark2;
