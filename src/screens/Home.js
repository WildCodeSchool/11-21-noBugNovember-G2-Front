import React from 'react'
import Gallery from '../components/Gallery'
import TexteDefile from '../components/TexteDefile'
import axios from 'axios'

import { useState, useEffect } from 'react'

const Home = (props) => {
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
      <TexteDefile title='les veilleurs de news |' />
      <Gallery
        articles={result}
        isFavorite={props.isFavorite}
        setIsFavorite={props.setIsFavorite}
        isRead={props.isRead}
        setIsrRead={props.setIsRead}
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
export default Home
