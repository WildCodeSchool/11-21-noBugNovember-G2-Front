import { useState, useEffect } from 'react'
import '../components/styles/Disconnect.css'
import ProfilAdmin from './ProfilAdmin'
import ProfilUser from './ProfilUser'
import ProfilChangeAvatarAddArticle from './ProfilChangeAvatarAddArticle'
import axios from 'axios'

const Disconnect = (props) => {
  const [stokage, setStokage] = useState([])
  const [reveal, setReveal] = useState(false)
  const [bdd, setBdd] = useState([])
  const [moreArticle, setMoreArticle] = useState(12)

  const deleteArticle = (params) => {
    axios.delete('http://localhost:3030/articles/delete', {
      data: { id: params },
    })
  }

  const seeMoreArticle = () => setMoreArticle(moreArticle + 12)

  useEffect(() => {
    if (localStorage.getItem('admin') == 1) {
      props.setAdmin(true)
    }
  }, [])

  useEffect(() => {}, [stokage, bdd])

  useEffect(() => {
    if (props.admin && reveal) {
      axios
        .get('http://localhost:3030/articles/godmode/read')
        .then((response) => response.data)
        .then((data) => setBdd(data))
    }
    if (!props.admin && reveal) {
      axios
        .post('http://localhost:3030/articles/byuser', {
          id_users: parseInt(localStorage.getItem('id_user')),
        })
        .then((response) => response.data)
        .then((data) => setStokage(data))
    }
  })

  return (
    <div className='Disconnect'>
      <h2 className='textDisconnectPage'>
        Bienvenue {localStorage.getItem('name')}
      </h2>
      <ProfilChangeAvatarAddArticle setAvatar={props.setAvatar} />
      {props.admin ? (
        <ProfilAdmin
          bdd={bdd}
          stokage={stokage}
          moreArticle={moreArticle}
          deleteArticle={deleteArticle}
          admin={props.admin}
          setReveal={setReveal}
          setBdd={setBdd}
          setStokage={setStokage}
          reveal={reveal}
        />
      ) : (
        <ProfilUser
          bdd={bdd}
          stokage={stokage}
          moreArticle={moreArticle}
          deleteArticle={deleteArticle}
          admin={props.admin}
          setReveal={setReveal}
          setBdd={setBdd}
          setStokage={setStokage}
          reveal={reveal}
        />
      )}
      <div className={reveal ? 'seeMore' : 'cache'}>
        <div className='seeMoreArticle' onClick={seeMoreArticle}>
          Voir plus
        </div>
      </div>
    </div>
  )
}

export default Disconnect
