import React from 'react'
import { useState, UseEffect } from 'react'
import './styles/SearchDateCharacter.css'
import cog from '../assets/cog.svg'
import cross from '../assets/cross.svg'
import trash from '../assets/trash.svg'

export default function SearchDateCharacter(props) {
  const [yearTemp, setYearTemp] = useState(0)
  const [weekTemp, setWeekTemp] = useState(0)
  const [userTemp, setUserTemp] = useState('')

  const handleSearch = () => {
    props.setSelectWeek(weekTemp)
    props.setSelectUser(userTemp)
    props.setSelectYear(yearTemp)
  }
  const resetHandleSearch = () => {
    props.setSelectWeek(0)
    props.setSelectYear(0)
    props.setSelectUser('')
    setWeekTemp(0)
    setYearTemp(0)
    setUserTemp('')
  }

  return (
    <>
      <div className='searchRowbuttonBox '>
        <div
          className={props.visibility ? 'buttonSearch active' : 'buttonSearch'}
        >
          <img
            className={props.visibility && 'cross'}
            src={props.visibility ? cross : cog}
            alt='cog'
            onClick={() => props.deroule()}
          />
          {/* <i className='fas fa-search' onClick={() => props.deroule()} /> */}
          {/*Selection de l'année et de la semaine*/}

          <form
            className={props.visibility ? 'searchFormulaire' : 'searchcache'}
          >
            <div className='searchDate'>
              <select
                onChange={e => setYearTemp(parseInt(e.target.value))}
                className={props.visibility && 'searchyear'}
                className='searchyear'
                name='choixyear'
                id='choixyear'
              >
                {props.year.map((options, i) => (
                  <option key={i} value={options}>
                    {options}
                  </option>
                ))}
              </select>
              <select
                onChange={e => setWeekTemp(parseInt(e.target.value))}
                className={props.visibility ? 'searchWeek' : 'searchcache'}
                name='choixweek'
                id='choixweek'
              >
                {props.week.map((options, i) => (
                  <option key={i} value={options}>
                    {options}
                  </option>
                ))}
              </select>
            </div>

            <select
              onChange={e => setUserTemp(e.target.value)}
              className={props.visibility ? 'searchyear' : 'searchcache'}
              name='choixStudent'
              id='choixStudent'
            >
              {props.user.map((options, i) => (
                <option key={i} value={options}>
                  {options}
                </option>
              ))}
            </select>
          </form>
          {/* <div
            className={props.visibility ? 'searchseparateur' : 'searchcache'}
          >
            {' '}
            ||{' '}
          </div> */}
          <div className='searchIconBox'>
            <i
              className={
                props.visibility ? 'fas fa-arrow-circle-right' : 'searchcache'
              }
              type='button'
              onClick={() => handleSearch()}
            />

            <img
              src={trash}
              onClick={() => resetHandleSearch()}
              //on recharge tous les favoris
              className={
                props.visibility
                  ? 'searchfas searchfa-times-circle yo'
                  : 'searchcache'
              }
            />
          </div>
        </div>
      </div>
    </>
  )
}
