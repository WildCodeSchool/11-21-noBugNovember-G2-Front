import React from 'react'
import Gallery from '../components/Gallery'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = ({ isFavorite, setIsFavorite }) => {
  const [dbArticles, setDbArticles] = useState([])
  const [members, setMembers] = useState([])
  const [result, setResult] = useState([])

  useEffect(() => {
    axios
    .get('http://localhost:3030/articles/read/all')
    .then(response => {
      setResult(response.data)
    })
    console.log("Axios members")

  }, [])
  
  return (
    <div>
      <Gallery
        isFavorite={isFavorite}
        setIsFavorite={setIsFavorite}
        articles={result}
      />
    </div>
  )
}
export default Home
