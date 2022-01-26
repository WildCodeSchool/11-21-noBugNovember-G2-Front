import { useState, useEffect } from 'react'
import axios from 'axios'
import sha256 from 'crypto-js/sha256'
import Profil from '../components/Profil.js'
import '../App.css'
import '../components/styles/Connect.css'

const Connect = ({ setAvatar }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [reponse, setReponse] = useState([])
  const [isConnected, setIsConnected] = useState(false)
  const [admin, setAdmin] = useState(false)
  const [errorConnect, setErrorConnect] = useState(false)

  let hein

  const changeFocus = () => {
    if (isFocused === false) {
      setIsFocused(!isFocused)
    }
  }
  const changeName = (e) => {
    setName(e.target.value)
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
  }

  const connect = () => {
    if (localStorage.getItem('id_user') === null) {
      setErrorConnect(false);
      axios
        .put('http://localhost:3030/members/connect', {
          name: name,
          password: sha256(password).toString(),
        })
        .then(response => response.data)
        .then((data) => setReponse(data))
        .catch(err => { 
          if (err.response) { 
            console.log("accès refusé")
            setErrorConnect(true);
          }
        })
    } else {
      setIsConnected(true)
    }
  }

  useEffect(() => {
    if (reponse.length == 1) {
      localStorage.setItem('id_user', reponse[0].id)
      localStorage.setItem('avatar', reponse[0].avatar)
      localStorage.setItem('name', reponse[0].name)
      localStorage.setItem('admin', reponse[0].admin)
      if (reponse[0].admin == 1) {
        setAdmin(true)
      }
      setAvatar(reponse[0].avatar)
      setIsConnected(true)
    }
  }, [reponse])

  useEffect(() => {
    axios
      .put('http://localhost:3030/members/admin', {
        id: localStorage.getItem('id_user'),
      })
      .then((response) => response.data)
      .then((data) => (hein = data.admin))
    if (hein == 1) {
      setAdmin(true)
    }
  }, [])

  return (
    <div className='pageConnect'>
      {localStorage.getItem('id_user') ? (
        <Profil
          setIsConnected={setIsConnected}
          setAvatar={setAvatar}
          admin={admin}
          setAdmin={setAdmin}
        />
      ) : (
        <div>
          <form className='form'>
            <h2 id='h2Profil'>Connexion</h2>
            <div className='fieldCollection'>
              <input
                type='text'
                name='username'
                className='inputText buttonConnect'
                id='gridCo1'
                value={name}
                placeholder="Nom d'utilisateur"
                onChange={(e) => changeName(e)}
                onClick={() => changeFocus()}
              ></input>
              <input
                type='password'
                className='inputText buttonConnect'
                id='gridCo2'
                name='password'
                placeholder='Mot de passe'
                onChange={(e) => changePassword(e)}
                onClick={() => changeFocus()}
              ></input>
              <button
                type='button'
                className='buttonConnect'
                id='gridCo3'
                onClick={() => connect()}
              >
                ME CONNECTER
              </button>
              {errorConnect && (
                <p className='inputText' id='gridCo4'>
                  ⚠ Mauvais nom d'utilisateur ou mot de passe
                </p>
              )}{' '}
            </div>
          </form>{' '}
        </div>
      )}
    </div>
  )
}

export default Connect
