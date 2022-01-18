import React from 'react'
import TeamGallery from '../components/TeamGallery'
import TexteDefile from '../components/TexteDefile'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Team = props => {
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
        setIsFavorite={props.setIsFavorite}
        isFavorite={props.isFavorite}
        isRead={props.isRead}
        setIsRead={props.setIsRead}
        changeIsRead={props.changeIsRead}
        openPartage={props.openPartage}
        urlPartage={props.urlPartage}
        clickClosePartage={props.clickClosePartage}
        setUrlPartage={props.setUrlPartage}
        clickOpenPartage={props.clickOpenPartage}
      />
    </div>
  )
}
export default Team
