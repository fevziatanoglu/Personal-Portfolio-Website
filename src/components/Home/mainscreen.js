import "./mainscreen.css"
import me from "../../assets/me1.png"
import CV from "../../assets/cv.pdf"
import {AiFillGithub , AiFillLinkedin , AiOutlineMenu} from "react-icons/ai"
import {SiGmail} from "react-icons/si"
import MenuButton from "../Menu/menuButton"



function MainScreen() {

 
    return <div className="main-container">
            <MenuButton/>       
            <div className="main-content-50">
                <div className="texts-div">
                <p className="hello-text">Hello I'm</p>
                <h1 className="name-text">Fevzi ATANOGLU</h1>
                <p className="job-text">Web Developer</p>
                </div>
                
                <div className="buttons-div">
                    <a className="link-button" href="/aboutme">About Me</a>
                    <a className="link-button" href={CV}>Download CV</a>
                    <a className="link-button" href="getcontact">Get Contact</a>
                </div>
            </div>

            <div className="main-content-50">

                <div>
                    <img className="home-img" src={me} alt="myphoto"></img>
                </div>

                <div className="social-links-div">
                    <a href="https://github.com/fevziatanoglu" className="social-link"><AiFillGithub/></a>
                    <a href="https://www.linkedin.com/in/fevziatanoglu/" className="social-link"><AiFillLinkedin/></a>
                    <a href="getcontact" className="social-link"><SiGmail/></a>
                </div>
            </div>

        

    </div>
}


export default MainScreen;