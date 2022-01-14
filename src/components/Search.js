import React from 'react'
import './styles/Search.css'
import search from '../assets/search.png'
export default function Search() {
  return (
    <div className='searchBox'>
      <div className='searchShadow'></div>
      <input type='text' placeholder='Search' />
      <img className='searchIcon' src={search} alt='seacrh' />
    </div>
  )
}
