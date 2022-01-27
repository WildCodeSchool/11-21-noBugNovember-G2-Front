import { useState, useRef } from 'react'
import SearchContainer from './SearchContainer'
import './styles/Search.css'
import './styles/SearchContainer.css'

export default function Search(props) {
  // State pour checker le contenu de la barre de recherche
  const [searchTemp, setSearchTemp] = useState('')

  //State des valeurs temporaires de recherches
  const [weekTemp, setWeekTemp] = useState(0)
  const [userTemp, setUserTemp] = useState('')

  //State de la loupe (open/close)
  const [isSearchButton, setIsSearchButton] = useState(false)

  //State des modales de recherches
  const [isYearOpen, setIsYearOpen] = useState(false)
  const [isWeekOpen, setIsWeekOpen] = useState(false)
  const [isUserOpen, setIsUserOpen] = useState(false)

  //Valeur des input
  const [yearInput, setYearInput] = useState('Année')
  const [weekInput, setWeekInput] = useState('Semaine')
  const [userInput, setUserInput] = useState('Elève')

  // Focus de la barre de recherche
  const searchInput = useRef(null)

  //Changement du focus dans la barre de recherche + Envoie de la recherche gâce aux valeurs temporaires quand on clique sur le bouton recherche
  function handleFocus() {
    !isSearchButton && searchInput.current.focus()
    !isSearchButton && setIsSearchButton(true)
    props.setSelectWeek(weekTemp)
    props.setSelectUser(userTemp)
    props.setSelectYear(props.yearTemp)
    props.setSearchValue(searchTemp)
  }

  //  Lancer la recherche en appuyant sur entrée
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleFocus()
    }
  }

  // Supprimer la recherche en cliquant sur la poubelle (trash)
  const resetHandleSearch = () => {
    setYearInput('Année')
    setWeekInput('Semaine')
    setUserInput('Elève')
    setIsYearOpen(false)
    setIsWeekOpen(false)
    setIsUserOpen(false)
    setWeekTemp(0)
    props.setYearTemp(0)
    setUserTemp('')
    setSearchTemp('')
    setIsSearchButton(false)
    props.setSelectWeek(0)
    props.setSelectYear(0)
    props.setSelectUser('')
    props.setSearchValue('')
  }

  return (
    <div className='searchBigContainer'>
      {/* Barre de Recherche en mode Desktop */}
      <div className='searchBoxDesktop'>
        <input
          onKeyDown={(e) => handleKeyDown(e)}
          placeholder='Recherche'
          value={searchTemp}
          ref={searchInput}
          className={`searchWrite searchHover ${searchTemp && 'modalOpen'}`}
          onChange={(e) => setSearchTemp(e.target.value)}
          onClick={() => !isSearchButton && setIsSearchButton(true)}
        />
        <div
          className={`searchHover ${isYearOpen && 'modalOpen'}`}
          onClick={() => setIsYearOpen(!isYearOpen)}
        >
          <p className='bulle'>Année</p>
          <p>{yearInput !== 'Année' && yearInput}</p>
          <SearchContainer
            isSearchButton={isSearchButton}
            setIsSearchButton={setIsSearchButton}
            setInput={setYearInput}
            display={isYearOpen ? '' : 'searchContainerHide'}
            handleSearch={props.setYearTemp}
            tab={props.year.sort((a, b) => a - b)}
          />
        </div>

        <div
          className={`searchHover ${isWeekOpen && 'modalOpen'}`}
          onClick={() => setIsWeekOpen(!isWeekOpen)}
        >
          <p className='bulle'>Semaine</p>
          <p>{weekInput !== 'Semaine' && weekInput}</p>
          <SearchContainer
            isSearchButton={isSearchButton}
            setIsSearchButton={setIsSearchButton}
            setInput={setWeekInput}
            display={isWeekOpen ? '' : 'searchContainerHide'}
            handleSearch={setWeekTemp}
            tab={props.week.sort((a, b) => a - b)}
          />
        </div>

        <div
          className={`searchUserBox searchHover ${
            isSearchButton && 'searchUserBoxOpen'
          } ${isUserOpen && 'modalOpen'}`}
          onClick={() => setIsUserOpen(!isUserOpen)}
        >
          <SearchContainer
            isSearchButton={isSearchButton}
            setIsSearchButton={setIsSearchButton}
            setInput={setUserInput}
            handleSearch={setUserTemp}
            display={isUserOpen ? '' : 'searchContainerHide'}
            tab={props.user.sort()}
          />
          <p className='searchUser bulle'>Elève</p>
          <p>{userInput !== 'Elève' && userInput}</p>
        </div>
        <button
          value={searchTemp}
          type='submit'
          onClick={() => handleFocus()}
          className={
            isSearchButton ? 'searchButtonOpen searchButton' : 'searchButton'
          }
        >
          <i class='fas fa-search'></i>
          <div
            className={
              isSearchButton
                ? 'searchRechercherOpen searchRechercherClosed'
                : 'searchRechercherClosed'
            }
          >
            {isSearchButton && 'Rechercher'}
          </div>
        </button>
      </div>

      {/* Barre de recherche en mode telephone */}
      <div className='searchPhone'>
        <input
          onKeyDown={(e) => handleKeyDown(e)}
          placeholder='Recherche'
          value={searchTemp}
          ref={searchInput}
          className={`searchWrite searchHover ${searchTemp && 'modalOpen'}`}
          onChange={(e) => setSearchTemp(e.target.value)}
          onClick={() => !isSearchButton && setIsSearchButton(true)}
        />

        <button
          value={searchTemp}
          type='submit'
          onClick={() => handleFocus()}
          className={'searchButton'}
        >
          <i id='' class='fas fa-search'></i>
          <div className={'searchRechercherClosed'}></div>
        </button>
      </div>
      <div
        className={
          searchTemp || weekTemp || userTemp || props.yearTemp
            ? 'trash2'
            : 'trash2Hide'
        }
        onClick={() => resetHandleSearch()}
      >
        <i class='fas fa-undo-alt'></i>
      </div>
    </div>
  )
}
