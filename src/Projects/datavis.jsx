import AccordionHeader from "react-bootstrap/AccordionHeader";
import {Accordion, Card} from "react-bootstrap";
import React from "react";
import '../styles/App.scss';
import AccordionBody from "react-bootstrap/AccordionBody";

export default function Datavis() {
    return(<Accordion.Item eventKey={"2"} id={"datavis"}>
        <AccordionHeader>DataVis</AccordionHeader>
        <AccordionBody>
            <div className={"EducationAccordion"}>
                <img src={"./Images/recharts.png"} alt={"Rechart API example"} className={"cardImg"}/>
                <p className={'workExperienceParagraph'}>
                    Utilized JavaScript Libraries, React, and Typescript React as well as python to read data
                    and create a UI of various plots to make a simple, personal data analysis tool. The results
                    of this project have been expanded uses of python, JavaScript, and making API calls and using other libraries.
                </p>
            </div>
            <div className={"emptyDiv"}></div>
            <h3>Skills Used For This Project</h3>
            <div className={"cardsGroup"}>
                <Card className={"Card"}>
                    <Card.Img className={"cardImg"} variant="top" src={"./Images/logo192.png"}/>
                    <Card.Title>React and Typescript React</Card.Title>
                    <Card.Text>
                        Familiar with connecting React front end structures to Java and C# as well as other
                        JavaScript frameworks such as Angular 1.x. Experience with refactoring, design, TDD and making
                        more interactive web applications. Also familiar with usage of TypeScript React (preferred to
                        vanilla), Redux, functional and class components, lazy loading and suspense, and react hook fundamentals.
                    </Card.Text>
                </Card>
                <Card className={"Card"}>
                    <Card.Img className={"cardImg"} variant="top" src={"./Images/css-html.jpg"}/>
                    <Card.Title>HTML & CSS</Card.Title>
                    <Card.Text>
                        Experienced with FlexBox, Grid display, Bootstrap, form creation, and UX to create
                        user-friendly applications in both team and individual settings. Also familiar with semantic HTML,
                        CSS functions and variables, and basic animations. Currently transfering more to Sass, JSX or TSX usage
                        instead of CSS and HTML.
                    </Card.Text>
                </Card>
                <Card className={"Card"}>
                    <Card.Img className={"cardImg"} variant="top" src={"./Images/r-lang.jpg"}/>
                    <Card.Title>R</Card.Title>
                    <Card.Text>Familiar with basic R syntax and practices, GGPlot2, functional programming practices,
                        lambda calculus fundamentals, and basic algorithmic data analysis. Currently learning about typecasting, data frames,
                        file handling, working with inbuilt databases, conditional statements, and loops as well as connecting R with Python.
                    </Card.Text>
                    <Card.Body>
                        <a className="btn">Learn More</a>
                    </Card.Body>
                </Card>
                <Card className={"Card"}>
                    <Card.Img className={"cardImg"} variant="top" src={"./Images/python.jpg"}/>
                    <Card.Title>Python</Card.Title>
                    <Card.Text>Experienced with basic python frameworks and environments such as Jupyter Notebooks,
                        Terminal Execution, and Pycharm IDE. Familiar with type hinting, testing and documentation aid libraries, Network Protocols,
                        asyncio and multithreading, data structures, decorators and generators, and scientific libraries.  Currently learning more in depth
                        AI and ML theory and the performance of numpy internals.
                    </Card.Text>
                </Card>
            </div>
        </AccordionBody>
    </Accordion.Item>);
}