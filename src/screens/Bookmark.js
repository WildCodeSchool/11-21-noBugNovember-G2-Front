import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Gallery from '../components/Gallery'
import TexteDefile from '../components/TexteDefile'
import '../components/styles/Bookmark.css'

const Bookmark = (props) => {
  const [bdd, setBdd] = useState([]) //stock data venant de la base de données
  const [filter, setFilter] = useState([]) //stock des donnes triées par date par rapport à DB
  const [isFilter, setIsFilter] = useState(false) //si un tri a lieu, sert à changer les données envoyer en gallery
  const [visibility, setVisibility] = useState(false) //sert à cacher ou non l'ensemble de la barre de recherche
  const [year, setYear] = useState([])
  const [week, setWeek] = useState([])
  const [selectWeek, setSelectWeek] = useState(0)
  const [selectYear, setSelectYear] = useState(0)
  let temp = [] // stock temporaire
  let tempWeek = [] //stock temporaire tri par semaine
  let tempYear = [] //stock temporaire tri par annee

  //selectData permet de filtrer les données en favoris
  //On enregistre aussi les semaines et années des favoris
  const selectData = () => {
    temp = []
    tempWeek = []
    tempYear = []
    setIsFilter(false)
    for (let i = 0; i < bdd.length; i++) {
      temp.push(bdd[i].id_article)
      if (tempWeek.indexOf(bdd[i].week) === -1) {
        tempWeek.push(bdd[i].week)
      }
      if (tempYear.indexOf(bdd[i].year) === -1) {
        tempYear.push(bdd[i].year)
      }
    }
    setYear(tempYear)
    setWeek(tempWeek)
    setSelectYear(tempYear[0])
    setSelectWeek(tempWeek[0])
    props.setIsFavorite(temp)
  }

  //Ecoute de la state API, quand elle modifié, on lance le premier tri, celle des favoris
  useEffect(() => {
    selectData()
  }, [bdd])

  useEffect(() => {
    axios
      .put("http://localhost:3030/favorite/bookmark", {
        id_user: localStorage.getItem('id_user')
      })
      .then(response => response.data)
      .then(data => setBdd(data))
  }, [])

  //Affiche ou non la barre de recherche
  const deroule = () => {
    setVisibility(!visibility)
  }

  //Lance un tri dans DB par rapport aux dates sélectionnées
  const selectDate = () => {
    temp = []
    for (let i = 0; i < bdd.length; i++) {
      if (bdd[i].year === selectYear && bdd[i].week === selectWeek) {
        temp.push(bdd[i])
      }
    }
    setFilter(temp)
    setIsFilter(true)
  }

  return (
    <div className='bookmark'>
      <TexteDefile title=' mes bookmarks | mes bookmarks | ' />
      <div className='rowbutton'>
        <div className={visibility ? 'buttonselect active' : 'buttonselect'}>
          <i className='fas fa-search' onClick={() => deroule()} />
          {/*Selection de l'année et de la semaine*/}
          <form className={visibility ? 'formulaire' : 'cache'}>
            <select
              className={visibility ? 'year' : 'cache'}
              name='choixyear'
              id='choixyear'
              onChange={e => setSelectYear(parseInt(e.target.value))}
            >
              {year.map((options, i) => (
                <option key={i} value={options}>
                  {options}
                </option>
              ))}
            </select>
            <select
              className={visibility ? 'year' : 'cache'}
              name='choixweek'
              id='choixweek'
              onChange={e => setSelectWeek(parseInt(e.target.value))}
            >
              {week.map((options, i) => (
                <option key={i} value={options}>
                  {options}
                </option>
              ))}
            </select>
            <i
              className={visibility ? 'fas fa-arrow-circle-right' : 'cache'}
              type='button'
              onClick={() => selectDate()}
            />
          </form>
          <div className={visibility ? 'separateur' : 'cache'}> || </div>
          <i
            onClick={() => selectData()} //on recharge tous les favoris
            className={visibility ? 'fas fa-times-circle' : 'cache'}
          />
        </div>
      </div>
      <Gallery
        articles={isFilter ? filter : bdd}
        isFavorite={props.isFavorite}
        setIsFavorite={props.setIsFavorite}
        isRead={props.isRead}
        setIsRead={props.setIsRead}
        changeIsRead={props.changeIsRead}
      />
    </div>
  )
}

export default Bookmark
