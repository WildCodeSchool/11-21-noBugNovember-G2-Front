import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Gallery from '../components/Gallery'
import '../components/styles/Bookmark.css'

const Bookmark = ({ isFavorite, setIsFavorite }) => {
  const [api, setApi] = useState([]) //stock first data API
  const [db, setDb] = useState([]) // stock final data API
  const [visibility, setVisibility] = useState(false) //
  const [year, setYear] = useState([])
  const [week, setWeek] = useState([])
  const [selectWeek, setSelectWeek] = useState(0)
  const [selectYear, setSelectYear] = useState(0)
  let temp = [] // stock temporaire
  let tempWeek = [] //stock temporaire tri par date
  let tempYear = [] //stock temporaire tri par date

  const selectData = () => {
    temp = []
    for (let i = 0; i < isFavorite.length; i++) {
      for (let y = 0; y < api.length; y++) {
        if (isFavorite[i] === api[y].id) {
          temp.push(api[y])
          /*console.log(api[y].week.indexOf(api[y].week))*/
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

  const deroule = () => {
    setVisibility(!visibility)
  }

  const selectDate = () => {
    temp = []
    for (let i = 0; i < db.length; i++) {
      if (db[i].year === selectYear && db[i].week === selectWeek) {
        temp.push(db[i])
      }
    }
    setDb(temp)
  }
  console.log('setDb')
  console.log(selectYear)
  console.log(selectWeek)

  return (
    <div className='bookmark'>
      <h1>Bookmark</h1>
      <div className='rowbutton'>
        <div className='buttonselect'>
          <i className='fas fa-search' onClick={() => deroule()} />
          <form onSubmit={() => selectDate()}>
            <div className={visibility ? 'year active' : 'cache'}>
              <select name='year'>
                {year.map(options => (
                  <option
                    onClick={e => setSelectYear(e.target.value)}
                    value={selectYear}
                  >
                    {options}
                  </option>
                ))}
              </select>
            </div>
            <div className={visibility ? 'week active' : 'cache'}>
              <select name='week'>
                {week.map(options => (
                  <option
                    onClick={e => setSelectWeek(e.target.value)}
                    value={selectWeek}
                  >
                    {options}
                  </option>
                ))}
              </select>
            </div>
          </form>
          <i
            className={visibility ? 'fas fa-arrow-circle-right' : 'cache'}
            type='submit'
            onClick={() => selectDate()}
          />
          <div className={visibility ? 'separateur' : 'cache'}> || </div>
          <i
            onClick={() => selectData()}
            className={visibility ? 'fas fa-times-circle' : 'cache'}
          />
        </div>
      </div>
      {db != [] && <Gallery isFavorite={db} setIsFavorite={setIsFavorite} />}
    </div>
  )
}

export default Bookmark
