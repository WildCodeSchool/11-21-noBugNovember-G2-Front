import React from 'react'
import Gallery from '../components/Gallery'
import TeamGallery from '../components/TeamGallery'
import axios from 'axios'
import { useState, useEffect } from 'react'
import '../components/styles/TextScroll.css'


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

  console.log(isFavorite)

  return (
    <div>
      <section className="titleScroll">
        <div className="conteneurH2" data-text="Articles de la semaine">
          <span>Articles de la semaine</span>
          
        </div>
        <TeamGallery isFavorite={tableau} setIsFavorite={setIsFavorite} />
      </section>
    </div>
  )
}
export default Team