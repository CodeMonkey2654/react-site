import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import '../styles/navigation.css';

export default function Navigation() {
    return(
        <nav>
            <div className={"menu"}>
                <Button className="navButton" href={"/"} variant="primary">Home</Button>
                <Dropdown as={ButtonGroup}>
                    <Button className="navButton" variant="primary" href={"/projects"}>Projects</Button>
                    <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" className="navButton"/>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/projects#angular-react">Angular to React Refactor</Dropdown.Item>
                        <Dropdown.Item href="/projects#biodiversity">Biodiversity Data Analysis</Dropdown.Item>
                        <Dropdown.Item href="/projects#this-site">This website!</Dropdown.Item>
                        <Dropdown.Item href="/projects#datavis">DataVis</Dropdown.Item>
                        <Dropdown.Item href="/projects#deep-racer">AWS DeepRacer</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={ButtonGroup}>
                    <Button className="navButton" variant="primary" href={"/workexp"}>Work Experience</Button>
                    <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" className="navButton"/>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/workexp#direct-supply" >Direct Supply</Dropdown.Item>
                        <Dropdown.Item href="/workexp#first-church">First Church of Squantum</Dropdown.Item>
                        <Dropdown.Item href="/workexp#geek-squad">Geek Squad</Dropdown.Item>
                        <Dropdown.Item href="/workexp#msoe-it">MSOE IT Department</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={ButtonGroup}>
                    <Button className="navButton" variant="primary" href="/education">Education</Button>
                    <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" className="navButton"/>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/education#MSOE">Milwaukee School of Engineering</Dropdown.Item>
                        <Dropdown.Item href="/education#NQHS">North Quincy High School</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </nav>
    );
}