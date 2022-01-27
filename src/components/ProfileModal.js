import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import { NavLink } from 'react-router-dom'
import './styles/ProfileModal.css'

export default function ProfileModal({ active, setActive, disconnect }) {
  return (
    <>
      <div id='wrapperModalID' className='wrapperModal'>
        <div
          className={`bodyProfileModal ${
            active ? '' : 'bodyProfileModalHidden'
          }`}
        >
          <NavLink to='/connect'>
            <div className='wrapDisconnect wrapOptionMenuProfile'>
              <button
                className='buttonOptionMenuProfile'
                onClick={() => setActive(!active)}
              >
                <AccountCircleIcon color='var(--thirdColor)' />
                <label>Profil</label>
              </button>
            </div>
          </NavLink>
          <div className='wrapDisconnect wrapOptionMenuProfile'>
            {localStorage.getItem('id_user') ? (
              <button
                className='buttonOptionMenuProfile'
                onClick={() => setActive(!active)}
                onClick={disconnect}
              >
                <LogoutIcon color='var(--thirdColor)' />
                <label>Déconnexion</label>
              </button>
            ) : (
              <NavLink to='/connect'>
                <button
                  className='buttonOptionMenuProfile'
                  onClick={() => setActive(!active)}
                >
                  <LoginIcon color='var(--thirdColor)' />
                  <label>Connexion</label>
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
