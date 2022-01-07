import React from 'react'
import Gallery from '../components/Gallery'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = ({ isFavorite, setIsFavorite }) => {
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
      <Gallery isFavorite={tableau} setIsFavorite={setIsFavorite} />
    </div>
  )
}
export default Home
