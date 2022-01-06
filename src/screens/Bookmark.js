import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Gallery from '../components/Gallery'
import '../components/styles/Bookmark.css'

const Bookmark = ({ isFavorite, setIsFavorite }) => {
  const [api, setApi] = useState([]) //stock first data API
  const [db, setDb] = useState([]) // stock final data API
  let temp = [] // stock temporaire

  const selectData = () => {
    temp = []
    for (let i = 0; i < isFavorite.length; i++) {
      console.log('phase 2', api.length, isFavorite)
      for (let y = 0; y < api.length; y++) {
        if (isFavorite[i] === api[y].id) {
          console.log('chicken')
          temp.push(api[y])
        }
      }
      console.log('poulet 04', temp)
    }
    setDb(temp)
  }

  useEffect(() => {
    axios
      .get('https://yannick-cousin.github.io/veille-api/api/all.json')
      .then(response => response.data)
      .then(data => setApi(data))
  }, [])

  useEffect(() => {
    selectData()
  }, [api])

  return (
    <div className='bookmark'>
      {console.log('on est ici', api)}
      <h1>Bookmark</h1>
      <h3>Ici, vous retrouvez vos favoris sur cette page</h3>
      {db != [] && <Gallery isFavorite={db} setIsFavorite={setIsFavorite} />}
    </div>
  )
}

export default Bookmark
