import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './styles/CardArticle.css'
import bookEmpty from '../assets/bookEmpty.png'
import bookFull from '../assets/bookFull.png'
import bookEmptyW from '../assets/bookEmptyW.png'
import bookFullW from '../assets/bookFullW.png'

const FavoriteButton = props => {
  const [isBookFull, setIsBookFull] = useState(false)
  const [myId, setMyId] = useState()
  const [bookImg, setBookImg ] = useState(bookEmpty)

  const bookChange = () => {
    if (localStorage.getItem('id_user') === null) {
      alert("Veuillez d'abord vous connecter à votre compte pour ajouter des articles dans vos favoris")
    }
    else if (localStorage.getItem('id_user') !== null && !isBookFull) {
      setIsBookFull(true)
      axios
        .post('http://localhost:3030/favorite/add', {
          id_user: parseInt(localStorage.getItem('id_user')),
          id_article: props.id
        })
      localStorage.getItem('theme') === 'light' ? setBookImg(bookFull) : setBookImg(bookFullW)
    }
    else if (localStorage.getItem('id_user') !== null && isBookFull) {
      let temp = props.isFavorite
      setIsBookFull(false)
      axios
        .delete('http://localhost:3030/favorite/delete',
        {data: {id: myId}})
        temp = props.isFavorite.filter(el => el != props.id)
        props.setIsFavorite(temp)
        localStorage.getItem('theme') === 'light' ? setBookImg(bookEmpty) : setBookImg(bookEmptyW)

    }
  }
//Check le theme et si le bookmark est bookmarke 
  const bookControl = () => {
    if (isBookFull && localStorage.getItem('theme') == 'light') {
      setBookImg(bookFull)
    } else if (isBookFull && localStorage.getItem('theme') == 'dark') {
      setBookImg(bookFullW)
    } else if (!isBookFull && localStorage.getItem('theme') == 'light') {
      setBookImg(bookEmpty)
    } else {
      setBookImg(bookEmptyW)
    }
  }

  useEffect(() => {
    bookControl()
  }, [isBookFull])

  //Sert à mettre en true ou non si l'article est en favori
  const changeMyId = (params) => {
    if (params[0] !== undefined) {
      setMyId(params[0].id)
      setIsBookFull(true)
      console.log(isBookFull);
      bookControl()
    }
  }

  //Au chargement du composant, recherche dans la BDD l'id du favoris (utile pour sa suppresion)
  useEffect(() => {
    if (localStorage.getItem('id_user') !== undefined) {
      axios
        .put('http://localhost:3030/favorite/getid', {
          id_user: localStorage.getItem('id_user'),
          id_article: String(props.id)
        })
        .then(response => response.data)
        .then(data => changeMyId(data))
        console.log(localStorage.getItem('theme'));
    }
  },[])

  return (
    <div className='cardBottomFavorite cardBottomLink'>
      <a className='cardBottomLink' target='_blank' rel='noreferrer'>
        <img
          className='bookmarkIcon'
          src={bookImg}
          onClick={() => bookChange()}
          alt=''
        />
      </a>
    </div>
  )
}

export default FavoriteButton
