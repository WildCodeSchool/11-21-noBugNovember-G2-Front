import axios from "axios";
import {useState, useEffect} from 'react';
import '../components/styles/Test.css'

const Test = () => {
  const [reponse, setReponse] = useState([]);
  
  const id_user = 1;
  const rang = 0;

  const sayMyName = "Yannick";
  const sayMyPassword = "NBN";

  const lancerRang = () => {
    axios
    .put("http://localhost:3030/members/rang", {
      rang: rang,
      id: id_user
    })
    //.then(response => console.log("response ",response.data))
    .then(response => response.data)
    .then(data => setReponse(data))
  }
  
  const lancerConnect = () => {
    console.log(sayMyName)
    console.log(sayMyPassword)
    console.log("Axios")
    axios
    .get("http://localhost:3030/members/connect", {
        name: sayMyName,
        password: sayMyPassword
    })
    //.then(response => console.log("response ",response.data))
    .then(response => response.data)
    .then(data => setReponse(data))
  }

  const lancerConnectTwo = () => {
    console.log(sayMyName)
    console.log(sayMyPassword)
    console.log("Axios")

    const params = {name: sayMyName, password: sayMyPassword}

    axios
    .get("http://localhost:3030/members/connect", 
    { params: {
      name: sayMyName,
      password: sayMyPassword
    }})
    //.then(response => console.log("response ",response.data))
    .then(response => response.data)
    .then(data => setReponse(data))
  }

  useEffect(() => {
  }, [reponse])

  console.log(reponse);

  return (
  <div className="test">
    <button onClick={() => lancerConnectTwo()} type="button">Lancer le test</button>
    <div>Result : {reponse?reponse.info:null}</div>
  </div>
  )
}

export default Test;