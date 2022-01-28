import './styles/PopupSocial.css'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'

export default function PopupSocial(props) {
  const CopyClipboard = () => {
    navigator.clipboard.writeText(props.urlPartage)
    alert('Copied the text: ' + props.urlPartage)
  }
  if (!props.openPartage) {
    return null
  }
  return (
    <div className='globalPopupPage' onClick={props.clickClosePartage}>
      <div
        className='holderShareActive'
        id='holderShareActivePrez'
        onClick={(e) => e.stopPropagation()}
      >
        <a id='popupButtonExit' onClick={() => props.clickClosePartage()}>
          <i class='far fa-times'></i>
        </a>
        <p> Partagez ! </p>
        <div id='shareSocial'>
          <EmailShareButton url={props.urlPartage}>
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
          <FacebookShareButton url={props.urlPartage}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <TwitterShareButton url={props.urlPartage}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <LinkedinShareButton url={props.urlPartage}>
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
        </div>
        <div id='popupLine'>
          <div id='popupLineLeft'></div>
          <p> OU </p>
          <div id='popupLineRight'></div>
        </div>
        <div id='clipboard'>
          <input value={props.urlPartage} id='myInput' />
          <button onClick={() => CopyClipboard()}>
            <i class='fas fa-copy'></i>
          </button>
        </div>
      </div>
    </div>
  )
}
