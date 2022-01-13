import React from 'react'
import Gallery from '../components/Gallery'
import TeamGallery from '../components/TeamGallery'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Team = ({ isFavorite, setIsFavorite }) => {
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
      <h2 className='teamTitle'>Articles de la semaine</h2>
      <TeamGallery articles={tableau} isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
    </div>
  )
}
export default Team
