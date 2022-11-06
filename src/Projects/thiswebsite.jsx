import AccordionHeader from "react-bootstrap/AccordionHeader";
import {Accordion, Card} from "react-bootstrap";
import React from "react";
import '../styles/App.scss';
import AccordionBody from "react-bootstrap/AccordionBody";

export default function Thiswebsite() {
    return(<Accordion.Item eventKey={"4"} id={"this-site"}>
        <AccordionHeader>This Website!</AccordionHeader>
        <AccordionBody>
            <div className={"EducationAccordion"}>
                <img src={"./Images/logo512.png"} alt={"React Logo"} className={"cardImg"}/>
                <p className={"workExperienceParagraph"}>
                    The most recent of my projects has been coding this website! I have used
                    React, React Router, BootStrap, Sass, CSS, and HTML for the construction of this site. If this website
                    were to expand in scale, I would implement redux, and lean further into the stateful benefits of react and generating
                    OOP classes and templates using typescript.
                </p>
            </div>
            <div className={"emptyDiv"}></div>
            <h3>Skills Used For This Project</h3>
            <div className={"cardsGroup"}>
                <Card className={"Card"}>
                    <Card.Img className={"cardImg"} variant="top" src={"./Images/logo512.png"}/>
                    <Card.Title>React and Typescript React</Card.Title>
                    <Card.Text>
                        Familiar with connecting React front end structures to Java and C# as well as other
                        JavaScript frameworks such as Angular 1.x. Experience with refactoring, design, TDD and making
                        more interactive web applications. Also familiar with usage of TypeScript React (preferred to
                        vanilla), Redux, functional and class components, lazy loading and suspense, and react hook fundamentals.
                    </Card.Text>

                </Card>
                <Card className={"Card"}>
                    <Card.Img className={"cardImg"} variant="top" src={"./Images/css-html.avif"}/>
                    <Card.Title>HTML & CSS</Card.Title>
                    <Card.Text>
                        Experienced with FlexBox, Grid display, Bootstrap, form creation, and UX to create
                        user-friendly applications in both team and individual settings. Also familiar with semantic HTML,
                        CSS functions and variables, and basic animations. Currently transfering more to Sass, JSX or TSX usage
                        instead of CSS and HTML.
                    </Card.Text>
                </Card>
            </div>
        </AccordionBody>

    </Accordion.Item>);
}