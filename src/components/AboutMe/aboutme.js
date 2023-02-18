import "./aboutme.css"
import me from "../../assets/me4.jpg"
import MenuButton from "../Menu/menuButton";

function AboutMe() {
    return <div className="main-container">
        <MenuButton />

        <div className="main-content-25 red">
            <img className="aboutme-img" src={me}></img>

        </div>

        <div className="main-content-50">
            <div className="aboutme-section">
                <h1>Who I am? </h1>
                <p>Hello, I’m Fevzi. I’m 20 years old. I’m 2nd years
                    Computer Engineering in Bandirma 17 Eylül University. </p>
                <p>
                    I like to improve myself and learn new skills. I
                    learn fast.
                </p>
                <p>
                    I'm interested in web development for about 1 year.
                </p>
                <p>
                    My first priority is to take part in projects as much
                    as possible and get experience.
                </p>
            </div>

            <div className="aboutme-section">
                <h1>My Skills</h1>
                <div className="skills-container">
                    <div className="skill">React</div>
                    <div className="skill">JavaScript</div>
                    <div className="skill">HTML</div>
                    <div className="skill">CSS</div>
                    <div className="skill">Bootstrap</div>
                    <div className="skill">NodeJS</div>
                    <div className="skill">B2 English</div>
                </div>
            </div>

        </div>



    </div>
}

export default AboutMe;