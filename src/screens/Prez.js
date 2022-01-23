import axios from "axios";
import GalleryPrez from "../components/GalleryPrez"
import {useState, useEffect} from 'react'
import '../components/styles/Prez.css'
import {weekNumber} from 'weeknumber'

const Prez = (props) => {
  const [result, setResult] = useState([]);
  const [link, setLink] = useState("");
  console.log(link)
  console.log(link.length)

  useEffect(() => {
    axios
      .put('http://localhost:3030/articles/search/date', {
        year: new Date().getFullYear(),
        week: weekNumber(new Date())
      })
      .then(response => response.data)
      .then(data => setResult(data))
  }, [])

  useEffect(() => {
    console.log(link)
    //document.getElementById('myframe').contentWindow.location.reload()
  },[link])

return (
  <div className="prez">
    <div className="ensemble">
      <div className="frame">
        {/*<iframe name="presentation" id="myframe" sanbox="allow-same-origin" src={link} ></iframe>*/}
        <object data={link} height="90%">
          <embed src={link} height="100vh"></embed>
          Erreur : Le site refuse de s'ouvrir dans la page. <a href={link} target="_blank" >Cliquez ici pour l'ouvrir dans un nouvel onglet</a>
        </object>

      </div>
      <div className="list">
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