import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import '../styles/navigation.css';
import {Link} from "react-router-dom";
import {HashLink} from 'react-router-hash-link';

export default function Navigation() {
    return(
        <nav>
            <div className={"menu"}>
                <Button className="navButton" href={"/react-site/#/react-site"} variant="primary">Home</Button>
                <Dropdown as={ButtonGroup}>
                    <Button className="navButton" variant="primary"><Link className={'routerLink'} to={"/react-site/projects"}>Projects</Link></Button>
                    <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" className="navButton"/>
                    <Dropdown.Menu>
                        <Dropdown.Item ><HashLink to={"/react-site/projects#angular-react"} classNames={"hashLink"}>Angular to React Refactor</HashLink></Dropdown.Item>
                        <Dropdown.Item ><HashLink to={"/react-site/projects#biodiversity"} classNames={"hashLink"}>Biodiversity Data Analysis</HashLink></Dropdown.Item>
                        <Dropdown.Item ><HashLink to={"/react-site/projects#this-site"} classNames={"hashLink"}>This website!</HashLink></Dropdown.Item>
                        <Dropdown.Item ><HashLink to={"/react-site/projects#datavis"} classNames={"hashLink"}>DataVis</HashLink></Dropdown.Item>
                        <Dropdown.Item ><HashLink to={"/react-site/projects#deep-race"} classNames={"hashLink"}>AWS DeepRacer</HashLink></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={ButtonGroup}>
                    <Button className="navButton" variant="primary" href={"/react-site/#/react-site/workexp"}>Work Experience</Button>
                    <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" className="navButton"/>
                    <Dropdown.Menu>
                        <Dropdown.Item ><HashLink to={"/react-site/workexp#direct-supply"} classNames={"hashLink"}>Direct Supply</HashLink></Dropdown.Item>
                        <Dropdown.Item ><HashLink to={"/react-site/workexp#first-church"} classNames={"hashLink"}>First Church of Squantum</HashLink></Dropdown.Item>
                        <Dropdown.Item ><HashLink to={"/react-site/workexp#geek-squad"} classNames={"hashLink"}>Geek Squad</HashLink></Dropdown.Item>
                        <Dropdown.Item ><HashLink to={"/react-site/workexp#msoe-it"} classNames={"hashLink"}>MSOE IT Department</HashLink></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={ButtonGroup}>
                    <Button className="navButton" variant="primary" href="/react-site/#/react-site/education">Education</Button>
                    <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" className="navButton"/>
                    <Dropdown.Menu>
                        <Dropdown.Item><HashLink to={"/react-site/education#MSOE"} classNames={"hashLink"}>Milwaukee School of Engineering</HashLink></Dropdown.Item>
                        <Dropdown.Item><HashLink to={"/react-site/education#NQHS"} classNames={"hashLink"}>North Quincy High School</HashLink></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </nav>
    );
}