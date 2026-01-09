import Profile from './Components/Profile.jsx'
import Header from "./Components/Header.jsx";
import Skill from "./Components/Skill.jsx";
import Footer from "./Components/Footer.jsx";

export default function App() {
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
            <Footer />
        </>
    )
}