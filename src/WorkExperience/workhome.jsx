import '../styles/App.scss';
import {Accordion} from "react-bootstrap";
import Navigation from "../Components/Navigation";
import AccordionBody from "react-bootstrap/AccordionBody";
import DirectSupply from "../Components/DirectSupply";
import FirstChurch from "../Components/FirstChurch";
import GeekSquad from "../Components/GeekSquad";
import MSOEIT from "../Components/msoeit";
import Footer from "../Components/Footer";

function App() {

    return (
        <div className="App">
            <div className={"navBarSet"}>
                <h3>Caleb Gray</h3>
                <Navigation className="navigation"/>
            </div>

            <div className="Gradient-box">
                <header className="App-header">
                    <h1>Work Experience</h1>
                </header>
            </div>
            <body>
            <div className="Accordion-Collection">
                <Accordion className={"accordionSet"}>
                    <Accordion.Item eventKey={"0"} id={"direct-supply"}>
                        <Accordion.Header>Direct Supply</Accordion.Header>
                        <AccordionBody>
                            <DirectSupply />
                        </AccordionBody>
                    </Accordion.Item>
                    <Accordion.Item eventKey={"1"} id={"first-church"}>
                        <Accordion.Header>First Church of Squantum</Accordion.Header>
                        <AccordionBody>
                            <FirstChurch />
                        </AccordionBody>
                    </Accordion.Item>
                    <Accordion.Item eventKey={"2"} id={"geek-squad"}>
                        <Accordion.Header>Geek Squad</Accordion.Header>
                        <AccordionBody>
                            <GeekSquad />
                        </AccordionBody>
                    </Accordion.Item>
                    <Accordion.Item eventKey={"3"} id={"msoe-it"}>
                        <Accordion.Header>Milwaukee School of Engineering</Accordion.Header>
                        <AccordionBody>
                            <MSOEIT />
                        </AccordionBody>
                    </Accordion.Item>
                </Accordion>
            </div>
            </body>
            <Footer />
        </div>
    );
}

export default App;
