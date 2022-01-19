import React from 'react'
import Gallery from '../components/Gallery'
import TexteDefile from '../components/TexteDefile'
import axios from 'axios'

import { useState, useEffect } from 'react'

const Home = props => {
  const [result, setResult] = useState([])
  const [articleSearchFiltered, setArticleSearchFiltered] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3030/articles/read/all').then(response => {
      setResult(response.data)
      setArticleSearchFiltered(response.data) //récupération des données dans un tableau filtrable
    })
  }, [])

  // State du filtre de recherche 
  const [searchValue, setSearchValue] = useState('')

  let articleFilteredTemp = []
 // UseEffect de la recherche
  useEffect(() => {
    articleFilteredTemp = result.filter(res => {
      return (
        res.description.toLowerCase().includes(searchValue.toLowerCase()) ||
        res.name.toLowerCase().includes(searchValue.toLowerCase()) 
      )
    })

    setArticleSearchFiltered(articleFilteredTemp)
  }, [searchValue])

  console.log("home searchj value :" + searchValue)
  return (
    <div>
      <TexteDefile title='les veilleurs de news |' />
      <Gallery
        articleSearchFiltered={articleSearchFiltered} // tableau filtré
        articles={result} // tableau full resultats
        setArticles={setResult}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
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
