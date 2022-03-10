import axios from 'axios';
import { useState, useEffect } from 'react';
import TeamGallery from '../components/TeamGallery';
import TexteDefile from '../components/TexteDefile';
import { weekNumber } from 'weeknumber';

const Team = (props) => {
	const [tableau, setTableau] = useState([]);

	useEffect(() => {
		// Send the request
		axios
			.put(`${process.env.REACT_APP_API_ROUTE}/articles/search/date`, {
				year: new Date().getFullYear(),
				week: weekNumber(new Date()),
			})
			.then((response) => {
				setTableau(response.data);
			});
	}, []);

	return (
		<div>
			<TexteDefile title=" les news de la semaine |  les news de la semaine | les news de la semaine | " />
			<TeamGallery
				articles={tableau}
				setIsFavorite={props.setIsFavorite}
				isFavorite={props.isFavorite}
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
export default Team;
