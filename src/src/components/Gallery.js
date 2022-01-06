import React from 'react'
import { useState, useEffect } from 'react'
import './styles/Gallery.css'
import CardArticle from './CardArticle'
import axios from 'axios'

export default function Gallery() {
  const [tableau, setTableau] = useState([])
  useEffect(() => {
    // Send the request
    axios
      .get('https://yannick-cousin.github.io/veille-api/api/all.json')
      .then(response => {
        setTableau(response.data)
      })
  }, [])
  return (
    <>
      {' '}
      {console.log(tableau)}
      <div className='gallery'>
        {tableau && tableau.map(card => <CardArticle card={card} />)}
      </div>
    </>
  )
}
