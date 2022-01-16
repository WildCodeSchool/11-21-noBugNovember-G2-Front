import React from 'react'
import Gallery from '../components/Gallery'
import TexteDefile from '../components/TexteDefile'
import axios from 'axios'

import { useState, useEffect } from 'react'

const Home = (props) => {
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
      <TexteDefile title="les veilleurs de news |" />
      <Gallery
        articles={result}
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
