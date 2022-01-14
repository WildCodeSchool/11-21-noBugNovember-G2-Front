import React from 'react'
import Gallery from '../components/Gallery'
import TeamGallery from '../components/TeamGallery'
import TexteDefile from '../components/TexteDefile'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Team = ({
  isFavorite,
  setIsFavorite,
  isRead,
  setIsRead,
  changeIsRead
}) => {
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
      <TexteDefile title=' ma promo |  ma promo | ' />
      <TeamGallery
        articles={tableau}
        setIsFavorite={setIsFavorite}
        isFavorite={isFavorite}
        isRead={isRead}
        setIsRead={setIsRead}
        changeIsRead={changeIsRead}
      />
    </div>
  )
}
export default Team
