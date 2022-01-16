import React from 'react'
import './styles/PopupSocial.css'
import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
  } from "react-share";
  import cross from "../assets/blackioscross.svg"
  
  export default function PopupSocial(props) {
    // const urlArticle = props.urlPartage
    const CopyClipboard = () => {          
            navigator.clipboard.writeText(props.urlPartage);            
            alert("Copied the text: " + props.urlPartage);
          }
      if(!props.openPartage) {
        return null
      }
      return (
        <div className="globalPopupPage" onClick={props.clickClosePartage}>
          <div id="holderShareActive" onClick={e => e.stopPropagation()}> 
              {/* <div className={props.openPartage ? "HolderShareActive" : "HolderShare"} >  */}
                  <a id="popupButtonExit"
                  onClick={() => props.clickClosePartage()}><img src={cross}/></a>
                  <p> Partagez ! </p>
                <div id='shareSocial'>
                    <EmailShareButton  url={props.urlPartage}><EmailIcon size={32} round={true} /></EmailShareButton>
                    <FacebookShareButton  url={props.urlPartage}><FacebookIcon size={32} round={true} /></FacebookShareButton>
                    <TwitterShareButton  url={props.urlPartage}><TwitterIcon size={32} round={true} /></TwitterShareButton>
                    <LinkedinShareButton  url={props.urlPartage}><LinkedinIcon size={32} round={true} /></LinkedinShareButton>
                </div>
                <div id="popupLine">
                    <div id="popupLineLeft"></div>  
                    <p> OU </p>
                    <div id="popupLineRight"></div> 
                </div>                
                <div id="clipboard">
                    <input value={props.urlPartage} id="myInput"/>
                    <button onClick={() => CopyClipboard()}>Copy link</button>
                </div>
          </div>
        </div>
    )
  }