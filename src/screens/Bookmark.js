import React from 'react'
import axios from 'axios'
import Gallery from '../components/Gallery'

import {useState, useEffect} from 'react'

import '../components/styles/Bookmark.css'

const Bookmark = ({isFavorite, setIsFavorite}) => {
  
	const [api, setApi] = useState([])
	const [db, setDb] = useState([])

	let temp = [];

	useEffect(() => {

		const getData = () => {
			axios
				.get("https://yannick-cousin.github.io/veille-api/api/all.json")
				.then((response) => response.data)
				.then((data) => setApi(data))
		}

		const selectData = () => {
			temp = [];
			for (let i = 0; i < isFavorite.length; i++) {
				for (let y = 0; y < api.length; y++) {
					if (isFavorite[i] == api[y].id)
					{
						temp.push(api[y])
					}
				}
			}
			setDb(temp);
		}

		getData()
		selectData()
	},[])

	return (
  	<div className="bookmark">
    	<h1>Bookmark</h1>
      <h3>Ici, vous retrouvez vos favoris sur cette page</h3>
			<Gallery isFavorite={db} setIsFavorite={setIsFavorite} />
    </div>
  )
}

export default Bookmark