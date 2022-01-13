import { useState , useEffect } from 'react'
import '../App.css'
import '../components/styles/Connect.css'


const Connect = () => {
    const [isFocused, setIsFocused] = useState(false)
    const [isFocusedPass, setIsFocusedPass] = useState(false)

    const [name, setName] = useState("");
    const [isValue, setisValue] = useState()

    const changeFocus = () => {
        if (isFocused === false) {
            setIsFocused(!isFocused)
        }
    }
    
    const changeName = (e) => {
        setName(e.target.value)
        
    }

    const changeValue = () => {   

    }

    let ignoreClickOnMeElement = document.querySelector('.input');

    document.addEventListener('click', function(event) {
        let isClickInsideElement = ignoreClickOnMeElement.contains(event.target)
        console.log(event.target);
        if (!isClickInsideElement && isFocused === true && name.length == 0) {
            //Do something click is outside specified element
            setIsFocused(!isFocused)
        }
    });

    return (
        <div className='pageConnect'>
            <form className="form"> 
                <h2>Connection</h2>
                <div className='fieldCollection'>
                <div className={`field ${ isFocused && 'focus'}` }>
                <label for="username" className="label">Username</label>
               <input type="text" name="username" className="input" value={name} required onChange={(e) => changeName(e)} onClick={() => changeFocus()}></input>
               </div>
                <div className={`field ${ isFocused && 'focus'}` }>
                <label for="password" className="label">Password</label>
                <input type="password" className="input" name="password" required onChange={(e) => changeName(e)} onClick={() => changeFocus()}></input>
               </div>
               <input type="submit" id='submit' value='LOGIN'></input>
               </div>
            </form>

        </div>
    )
} 
export default Connect
