import { useState , useEffect } from 'react'
import axios from 'axios'
import sha256 from 'crypto-js/sha256'
import Disconnect from '../components/Disconnect.js'
import '../App.css'
import '../components/styles/Connect.css'
import imgDisco from '../assets/croix_rouge.png'

const Connect = ({setAvatar}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFocusedPass, setIsFocusedPass] = useState(false)
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [reponse, setReponse] = useState([])
  const [isConnected, setIsConnected] = useState(false)
  const [isValue, setisValue] = useState()

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
    if (localStorage.getItem("id_user") === null) {
      axios
        .put("http://localhost:3030/members/connect", {
          name: name,
          password: sha256(password).toString()
        })
      //.then(response => console.log("response ",response.data))
      .then(response => response.data)
      .then(data => setReponse(data))
    }
    else {
      setIsConnected(true)
    }
  }

  // const disconnect = () => {
  //   localStorage.clear();
  //   setAvatar(imgDisco);
  //   setIsConnected(false)
  // }

  let ignoreClickOnMeElement = document.querySelector('.input');
  document.addEventListener('click', function(event) {
    let isClickInsideElement = ignoreClickOnMeElement.contains(event.target)
    if (!isClickInsideElement && isFocused === true && name.length == 0) {
      //Do something click is outside specified element
      setIsFocused(!isFocused)
    }
  });

  useEffect(() => {
    if (reponse.length == 1) {
      localStorage.setItem('id_user', reponse[0].id)
      localStorage.setItem('avatar', reponse[0].avatar)
      localStorage.setItem('name', reponse[0].name)
      setAvatar(reponse[0].avatar)
      setIsConnected(true)
    }
  }, [reponse])

  return (
    <div className='pageConnect'>
      {localStorage.getItem('id_user')
        ?
        <Disconnect 
          setIsConnected={setIsConnected}
          setAvatar={setAvatar}
        />
        :
        <form className="form"> 
          <h2>Connection</h2>
          <div className='fieldCollection'>
            <div className={`field ${ isFocused && 'focus'}` }>
              <label for="username" className="label">Username</label>
              <input type="text" name="username" className="input" value={name} required onChange={(e) => changeName(e)} onClick={() => changeFocus()}></input>
            </div>
            <div className={`field ${ isFocused && 'focus'}` }>
              <label for="password" className="label">Password</label>
              <input type="password" className="input" name="password" required onChange={(e) => changePassword(e)} onClick={() => changeFocus()}></input>
            </div>
            <input type="button" id='submit' onClick={() => connect()} value='LOGIN'></input>
          </div>
        </form>
      }
    </div>
  )
}

export default Connect
