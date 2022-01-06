import "./styles/Header.css"
import Blacklogo from "../assets/blacklogo.svg"

function Header() {

    return (
    <header className="Header"> 
        <img id="HeaderLogo" src={Blacklogo} alt="logo"></img>
        {/* <div id="HeaderBorder"></div> */}
        <div id="HeaderUser">
            <img id="HeaderUserPicture" src="https://storage.googleapis.com/quest_editor_uploads/PVfhQLMVOrmJrJYi6dvMUIE775V00sIu.png" alt="logo"></img>
        </div>
    </header>
);}

export default Header