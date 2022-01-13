import React from 'react'
import './styles/Search.css'

export default function Search() {
    return (
        <div className='searchBox'>
            <div className='searchShadow'></div>
            <input type="text" placeholder='Search'/>            
        </div>
    )
}
