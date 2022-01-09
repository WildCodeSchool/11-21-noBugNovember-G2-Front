import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Gallery from '../components/Gallery'
import '../components/styles/Bookmark.css'

const Bookmark = ({ isFavorite, setIsFavorite }) => {
  const [api, setApi] = useState([]) //stock data API
  const [db, setDb] = useState([]) // stock data si favoris par rapport à API
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
    setIsFilter(false)
    for (let i = 0; i < isFavorite.length; i++) {
      for (let y = 0; y < api.length; y++) {
        if (isFavorite[i] === api[y].id) {
          temp.push(api[y])
          if (tempWeek.indexOf(api[y].week) === -1) {
            tempWeek.push(api[y].week)
          }
          if (tempYear.indexOf(api[y].year) === -1) {
            tempYear.push(api[y].year)
          }
        }
      }
    }
    setDb(temp)
    setYear(tempYear)
    setWeek(tempWeek)
    setSelectYear(tempYear[0])
    setSelectWeek(tempWeek[0])
  }

  //Axios nous permet de récupérer toutes les données de l'API
  //et nous stockons tout dans la state api
  useEffect(() => {
    axios
      .get('https://yannick-cousin.github.io/veille-api/api/all.json')
      .then(response => response.data)
      .then(data => setApi(data))
  }, [])

  //Ecoute de la state API, quand elle modifié, on lance le premier tri, celle des favoris
  useEffect(() => {
    selectData()
  }, [api])

  //Affiche ou non la barre de recherche
  const deroule = () => {
    setVisibility(!visibility)
  }

  //Lance un tri dans DB sur les dates sélectionnées
  const selectDate = () => {
    temp = []
    for (let i = 0; i < db.length; i++) {
      if (db[i].year === selectYear && db[i].week === selectWeek) {
        temp.push(db[i])
      }
    }
    setFilter(temp)
    setIsFilter(true)
  }

  return (
    <div className='bookmark'>
      <h1>Bookmark</h1>
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
        isFavorite={isFilter ? filter : db}
        setIsFavorite={setIsFavorite}
      />
    </div>
  )
}

export default Bookmark
