import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import '../styles/navigation.css';
import {Link} from "react-router-dom";
import {HashLink} from 'react-router-hash-link';
import React from "react";
import ProjHome from "../Projects/projhome";

export default function Navigation() {
    return(
        <div className={"navigation"}>
            <h3><a href={"/react-site/#/react-site"} className={"btnLogo"}>Caleb Gray</a></h3>
            <div className={"menu"}>
                <Button className="navButton" href={"/react-site/#/react-site"} variant="primary">Home</Button>
                <Button className="navButton" href={"/react-site/#/react-site/about-me"} variant="primary">About Me</Button>
                <Dropdown as={ButtonGroup}>
                    <Button className="navButton" variant="primary" href={"/react-site/#/react-site/projects"}>Projects</Button>
                    <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" className="navButton"/>
                    <Dropdown.Menu className={"DropDown"}>
                        <Dropdown.Item className={"DropDown"}><HashLink to={"/react-site/projects#angular-react"} className={"hashLink"}>Angular to React Refactor</HashLink></Dropdown.Item>
                        <Dropdown.Item className={"DropDown"}><HashLink to={"/react-site/projects#biodiversity"} className={"hashLink"}>Biodiversity Data Analysis</HashLink></Dropdown.Item>
                        <Dropdown.Item className={"DropDown"}><HashLink to={"/react-site/projects#this-site"} className={"hashLink"}>This website!</HashLink></Dropdown.Item>
                        <Dropdown.Item className={"DropDown"}><HashLink to={"/react-site/projects#datavis"} className={"hashLink"}>DataVis</HashLink></Dropdown.Item>
                        <Dropdown.Item className={"DropDown"}><HashLink to={"/react-site/projects#deep-racer"} className={"hashLink"}>AWS DeepRacer</HashLink></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={ButtonGroup}>
                    <Button className="navButton" variant="primary" href={"/react-site/#/react-site/workexp"}>Work Experience</Button>
                    <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" className="navButton"/>
                    <Dropdown.Menu className={"DropDown"}>
                        <Dropdown.Item className={"DropDown"}><HashLink to={"/react-site/workexp#direct-supply"} className={"hashLink"}>Direct Supply</HashLink></Dropdown.Item>
                        <Dropdown.Item className={"DropDown"}><HashLink to={"/react-site/workexp#first-church"} className={"hashLink"}>First Church of Squantum</HashLink></Dropdown.Item>
                        <Dropdown.Item className={"DropDown"}><HashLink to={"/react-site/workexp#geek-squad"} className={"hashLink"}>Geek Squad</HashLink></Dropdown.Item>
                        <Dropdown.Item className={"DropDown"}><HashLink to={"/react-site/workexp#msoe-it"} className={"hashLink"}>MSOE IT Department</HashLink></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={ButtonGroup}>
                    <Button className="navButton" variant="primary" href="/react-site/#/react-site/education">Education</Button>
                    <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" className="navButton"/>
                    <Dropdown.Menu className={"DropDown"}>
                        <Dropdown.Item className={"DropDown"}><HashLink to={"/react-site/education#MSOE"} className={"hashLink"}>Milwaukee School of Engineering</HashLink></Dropdown.Item>
                        <Dropdown.Item className={"DropDown"}><HashLink to={"/react-site/education#NQHS"} className={"hashLink"}>North Quincy High School</HashLink></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button className="navButton" href={"./caleb-gray-resume.pdf"} download variant="primary">Download Resume</Button>
            </div>
        </div>
    );
}