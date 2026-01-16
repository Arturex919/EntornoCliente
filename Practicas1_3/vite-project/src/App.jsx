import Profile from './Components/Profile.jsx'
import Header from "./Components/Header.jsx";
import Skill from "./Components/Skill.jsx";
import Footer from "./Components/Footer.jsx";
import Skills from "./Components/Skills.jsx"
import {useState} from "react";
import Contact from "./Components/Contact.jsx";

export default function App() {
    const skills = ["Javascript", "jQuery", "Vue", "Angular", "React", "Node.js"]
    const [showSkills, setShowSkills] = useState(false);
    const [showContacto, setShowContacto] = useState(false);
    return (
        <>
            <Header />
            <Profile
                name="Arturo"
                age={23}
                profession="Desarrollador" />
            <ul>
                <Skill text="JavaScript" />
                <Skill text="Angular" />
            </ul>
            <p>Ejercicio 2</p>

            <button onClick={() => setShowSkills(!showSkills)}>
                click me
            </button>
            <Skills array={skills} show={showSkills} />

            <p> Ejercicio 3</p>
            <button onClick={() => setShowContacto(!showContacto)}>{showContacto?"ocultar":"mostar"}</button>
            {showContacto && <Contact email="ana@email.com" phone="600 123 456"/>}

            <Footer />
        </>
    )
}