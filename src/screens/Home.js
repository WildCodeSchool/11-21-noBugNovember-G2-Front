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

  console.log(isFavorite)

  return (
    <div>
      <h1>Home</h1>
      <Gallery isFavorite={tableau} setIsFavorite={setIsFavorite} />
    </div>
  )
}
export default Home
