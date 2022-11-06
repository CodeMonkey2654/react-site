import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import '../styles/navigation.css';

export default function Navigation() {
    return(
        <nav>
            <div className={"menu"}>
                <Button className="navButton" href={"/react-site"} variant="primary">Home</Button>
                <Dropdown as={ButtonGroup}>
                    <Button className="navButton" variant="primary" href={"/react-site/projects"}>Projects</Button>
                    <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" className="navButton"/>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/react-site/projects#angular-react">Angular to React Refactor</Dropdown.Item>
                        <Dropdown.Item href="/react-site/projects#biodiversity">Biodiversity Data Analysis</Dropdown.Item>
                        <Dropdown.Item href="/react-site/projects#this-site">This website!</Dropdown.Item>
                        <Dropdown.Item href="/react-site/projects#datavis">DataVis</Dropdown.Item>
                        <Dropdown.Item href="/react-site/projects#deep-racer">AWS DeepRacer</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={ButtonGroup}>
                    <Button className="navButton" variant="primary" href={"/react-site/workexp"}>Work Experience</Button>
                    <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" className="navButton"/>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/react-site/workexp#direct-supply" >Direct Supply</Dropdown.Item>
                        <Dropdown.Item href="/react-site/workexp#first-church">First Church of Squantum</Dropdown.Item>
                        <Dropdown.Item href="/react-site/workexp#geek-squad">Geek Squad</Dropdown.Item>
                        <Dropdown.Item href="/react-site/workexp#msoe-it">MSOE IT Department</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={ButtonGroup}>
                    <Button className="navButton" variant="primary" href="/react-site/education">Education</Button>
                    <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" className="navButton"/>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/react-site/education#MSOE">Milwaukee School of Engineering</Dropdown.Item>
                        <Dropdown.Item href="/react-site/education#NQHS">North Quincy High School</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </nav>
    );
}