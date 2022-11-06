import AccordionHeader from "react-bootstrap/AccordionHeader";
import {Accordion, Card} from "react-bootstrap";
import React from "react";
import '../styles/App.scss';
import AccordionBody from "react-bootstrap/AccordionBody";

export default function AWSDeepRacer() {
    return(<Accordion.Item eventKey={"3"} id={"deep-racer"}>
        <AccordionHeader>AWS DeepRacer</AccordionHeader>
        <AccordionBody>
            <div className={"EducationAccordion"}>
                <img src={"./Images/deepracer.jpg"} alt={"Amazon DeepRacer Logo"}/>
                <p className={"workExperienceParagraph"}>
                    Used reinforcement learning and Jupyter Notebooks to create and analyze the performance
                    of a 1/18th scale race care. Involved designing a reward function, analyzing model performance, and
                    learning machine learning and python AIML fundamentals.
                </p>
            </div>
            <div className={"emptyDiv"}></div>
            <h3>Skills Used For This Project</h3>
            <div className={"cardsGroup"}>
                <Card className={"Card"}>
                    <Card.Img className={"cardImg"} variant="top" src={"./Images/python.jpg"}/>
                    <Card.Title>Python</Card.Title>
                    <Card.Text>Experienced with basic python frameworks and environments such as Jupyter Notebooks,
                        Terminal Execution, and Pycharm IDE. Familiar with type hinting, testing and documentation aid libraries, Network Protocols,
                        asyncio and multithreading, data structures, decorators and generators, and scientific libraries.  Currently learning more in depth
                        AI and ML theory and the performance of numpy internals.
                    </Card.Text>
                </Card>
                <Card className={"Card"}>
                    <Card.Img className={"cardImg"} variant="top" src={"./Images/r-lang.jpg"}/>
                    <Card.Title>R</Card.Title>
                    <Card.Text>
                        Familiar with basic R syntax and practices, GGPlot2, functional programming practices,
                        lambda calculus fundamentals, and basic algorithmic data analysis. Currently learning about typecasting, data frames,
                        file handling, working with inbuilt databases, conditional statements, and loops as well as connecting R with Python.
                    </Card.Text>
                </Card>
                <Card className={"Card"}>
                    <Card.Img className={"cardImg"} variant="top" src={"./Images/powerhsell.png"}/>
                    <Card.Title>Shell Scripting</Card.Title>
                    <Card.Text>
                        Basic CI/CD, automating common procedures in windows powershell, use of GitHub
                        and GitLab, and searching for terms with files and command pipelines. Additional familiarity with redirection operators,
                        brace expansion, and grep consoles. Main usages have been basic commands and file searching.
                    </Card.Text>
                </Card>
            </div>
        </AccordionBody>

    </Accordion.Item>);
}