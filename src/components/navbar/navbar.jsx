import { useParams } from "react-router-dom";
import './navbar.css'
import { Link } from 'react-router-dom'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Acerca, About } from "../about/about";
import { Habilidades, Skills } from "../skills/skills";
import { Contactame, ContactMe } from "../contact/contact";
import { Estudios, Studies } from "../studies/studies";
import { Experiencia, Experience } from "../experience/experience";
import { Proyectos, Projects } from "../projects/projects";
import Portfolio from "../portfolio/portfolio";

const NavBar = () => {
    const { lan } = useParams()
    return (
        <div >
            {lan === "es" ?
                <div>
                    <Tabs className="mb-3">
                        <Tab eventKey="home" title="Intro">
                            <Portfolio />
                        </Tab>
                        <Tab eventKey="description" title="¿Quien soy?">
                            <Acerca />
                        </Tab>
                        <Tab eventKey="profile" title="Skills">
                            <Habilidades />
                        </Tab>
                        <Tab eventKey="estudios" title="Academicas">
                            <Estudios />
                        </Tab>
                        <Tab eventKey="experience" title="Experiencia">
                            <Experiencia />
                        </Tab>
                        <Tab eventKey="projects" title="Proyectos">
                            <Proyectos />
                        </Tab>
                        <Tab eventKey="contact" title="Contactos">
                            <Contactame />
                        </Tab>
                    </Tabs>
                </div> :
                <div>
                    <Tabs className="mb-3">
                        <Tab eventKey="home" title="Intro">
                            <Portfolio />
                        </Tab>
                        <Tab eventKey="description" title="Who am I?">
                            <About />
                        </Tab>
                        <Tab eventKey="skills" title="Skills">
                            <Skills />
                        </Tab>
                        <Tab eventKey="studies" title="Academics">
                            <Studies />
                        </Tab>
                        <Tab eventKey="experience" title="Experience">
                            <Experience />
                        </Tab>
                        <Tab eventKey="projects" title="Projects">
                            <Projects />
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                            <ContactMe />
                        </Tab>
                    </Tabs>
                </div>
            }
        </div>
    )
}

export default NavBar;
