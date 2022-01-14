import React from 'react'
import Gallery from '../components/Gallery'
import TexteDefile from '../components/TexteDefile'
import axios from 'axios'

import { useState, useEffect } from 'react'

const Home = (props) => {
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
    <div>
      <TexteDefile title="les veilleurs de news |" />
      <Gallery
        articles={tableau}
        isFavorite={props.isFavorite}
        setIsFavorite={props.setIsFavorite}
        isRead={props.isRead}
        setIsrRead={props.setIsRead}
        changeIsRead={props.changeIsRead}
      />
    </div>
  )
}
export default Home
