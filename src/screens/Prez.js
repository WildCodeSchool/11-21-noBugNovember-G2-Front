import axios from 'axios'
import GalleryPrez from '../components/GalleryPrez'
import { useState, useEffect } from 'react'
import { weekNumber } from 'weeknumber'
import '../components/styles/Prez.css'

const Prez = (props) => {
  const [result, setResult] = useState([])
  const [link, setLink] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('admin') == 1) {
      axios
        .put('http://localhost:3030/articles/search/date', {
          year: new Date().getFullYear(),
          week: weekNumber(new Date()),
        })
        .then((response) => response.data)
        .then((data) => setResult(data))
      setIsAdmin(true)
    }
  }, [])

  useEffect(() => {}, [link])

  return (
    <div className='prez'>
      <div className={!isAdmin ? 'ptdr' : 'cache'}>
        Vous devez être administrateur pour accéder à cette partie
      </div>
      <div className={isAdmin ? 'ensemble' : 'cache'}>
        <div className='frame'>
          {/*<iframe name="presentation" id="myframe" sanbox="allow-same-origin" src={link} ></iframe>*/}
          <object data={link} height='95%'>
            <embed src={link} height='100vh'></embed>
            {link.length > 5 ? (
              <div className='messages'>
                <a href={link} target='_blank'>
                  Hélas, le site refuse de s'ouvrir. Cliquez ici pour l'ouvrir
                  dans un nouvel onglet
                </a>
              </div>
            ) : (
              <div className='messages'>
                Pour commencer, cliquez sur une carte situé à droite
              </div>
            )}
          </object>
        </div>
        <div className='list'>
          <GalleryPrez
            articles={result}
            isFavorite={props.isFavorite}
            setIsFavorite={props.setIsFavorite}
            isRead={props.isRead}
            setIsRead={props.setIsRead}
            changeIsRead={props.changeIsRead}
            setLink={setLink}
          />
        </div>
      </div>
    </div>
  )
}

export default Prez
