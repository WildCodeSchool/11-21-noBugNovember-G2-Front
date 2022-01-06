import React from 'react'
import { useState, useEffect } from 'react'
import './styles/Gallery.css'
import CardArticle from './CardArticle'
import axios from 'axios'

export default function Gallery() {
  const sampleArticle = {
    id: 0,
    week: 46,
    year: 2021,
    member: 'Anouchka',
    url: 'https://www.blogdumoderateur.com/classement-langages-populaires-php-sortir-top-10/',
    description:
      'Classement des langages populaires : PHP pourrait sortir du top 10, une première en 20 ans',
    avatar: 'https://avatars.githubusercontent.com/u/94181724?s=300&v=4',
    favorite: 2
  }
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
