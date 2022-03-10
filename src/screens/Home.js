import axios from 'axios';
import Gallery from '../components/Gallery';
import React from 'react';
import Search from '../components/Search';

import TexteDefile from '../components/TexteDefile';
import { useState, useEffect } from 'react';

const Home = (props) => {
	const [result, setResult] = useState([]);
	const [articleSearchFiltered, setArticleSearchFiltered] = useState([]);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_ROUTE}/articles/read/all`)
			.then((response) => {
				setResult(response.data);
				setArticleSearchFiltered(response.data); //récupération des données dans un tableau filtrable
			});
	}, []);

	// State des ensembles d'années, semaines et users en format tableau
	const [year, setYear] = useState([]);
	const [week, setWeek] = useState([]);
	const [user, setUser] = useState([]);

	let temp = []; // stock temporaire
	let tempWeek = []; //stock temporaire tri par semaine
	let tempYear = []; //stock temporaire tri par annee
	let tempUser = []; // stock temporaire des élèves

	//Récupération des années, des numéros de semaines et des élèves
	useEffect(() => {
		temp = [];
		tempWeek = [];
		tempYear = [];
		tempUser = [];

		for (let i = 0; i < result.length; i++) {
			if (tempWeek.indexOf(result[i].week) === -1) {
				tempWeek.push(result[i].week);
			}
			if (tempYear.indexOf(result[i].year) === -1) {
				tempYear.push(result[i].year);
			}
			if (tempUser.indexOf(result[i].name) === -1) {
				tempUser.push(result[i].name);
			}
		}
		setYear(tempYear);
		setWeek(tempWeek);
		setUser(tempUser);
	}, [result]);

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
			result.map((el) => {
				if (tempWeek.indexOf(el.week) === -1 && el.year === yearTemp) {
					tempWeek.push(el.week);
				}
			});
			setWeek(tempWeek);
		} else {
			result.map((el) => {
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
		articleFilteredTemp = result.filter((res) => {
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
	}, [searchValue, selectYear, selectWeek, selectUser]);

	const [posScroll, setPosScroll] = useState();

	const checkScroll = () => {
		if (
			Math.floor(window.innerHeight + window.scrollY + 10) >=
			document.body.offsetHeight
		) {
			setPosScroll(window.scrollY);
		}
	};

	window.addEventListener('scroll', checkScroll);

	return (
		<div>
			<TexteDefile title="les veilleurs de news |   les veilleurs de news |" />

			{/* <div className='searchBox'> */}
			{/* <SearchDateCharacter
        visibility={visibility}
        deroule={deroule}
        setSelectYear={setSelectYear}
        setSelectWeek={setSelectWeek}
        setSelectUser={setSelectUser} */}
			{/* // selectDate={selectDate}
        // selectData={selectData}
        // year={year}
        // week={week}
        // user={user} */}
			{/* /> */}
			{/* <Search setSearchValue={setSearchValue} searchValue={searchValue} /> */}
			{/* </div> */}

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
				articleSearchFiltered={articleSearchFiltered} // tableau filtré
				articles={result} // tableau full resultats
				setArticles={setResult}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				isFavorite={props.isFavorite}
				setIsFavorite={props.setIsFavorite}
				isRead={props.isRead}
				setIsrRead={props.setIsRead}
				changeIsRead={props.changeIsRead}
				openPartage={props.openPartage}
				urlPartage={props.urlPartage}
				clickClosePartage={props.clickClosePartage}
				setUrlPartage={props.setUrlPartage}
				clickOpenPartage={props.clickOpenPartage}
				posScroll={posScroll}
				setPosScroll={setPosScroll}
			/>
		</div>
	);
};
export default Home;
