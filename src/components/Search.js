import React, { useState } from 'react'
import './styles/Search.css'
import search from '../assets/search.png'

export default function Search(props) {
  
  // State pour checker le contenu de la barre de recherche
  const [searchTemp, setSearchTemp] = useState("")

  return (
    <>
    <div className={searchTemp.length ? "searchBox searchBoxFull" : "searchBox"}>
      <div className='searchShadow'></div>
      <input type='text' placeholder='Search'  onChange={(e) => setSearchTemp(e.target.value)}/>
      <img className='searchIcon' src={search} alt='seacrh' onClick={(e)=>props.setSearchValue(searchTemp)}/>
    </div>
   
    </>
  )
}
