import AccordionHeader from "react-bootstrap/AccordionHeader";
import {Accordion, Card} from "react-bootstrap";
import React from "react";
import '../styles/App.scss';
import AccordionBody from "react-bootstrap/AccordionBody";

export default function Biodiversity() {
    return(<Accordion.Item eventKey={"1"} id={"biodiversity"}>
        <AccordionHeader>Biodiversity Data Analysis Project</AccordionHeader>
        <AccordionBody>
            <div className={"EducationAccordion"}>
                <img src={"./Images/codeproject-photo.avif"} alt={"Nature Photo"} className={"cardImg"}/>
                <p className={"workExperienceParagraph"}>
                    Used Jupyter Notebooks, Pandas, Numpy, and matplotlib to analyze the biodiversity statistics
                    of various national parks and crosschecking this against recent observations to measure
                    climate change and its effects on animal endangerment status.
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
                        AI and ML theory and the performance of numpy internals.</Card.Text>
                </Card>
            </div>
        </AccordionBody>
    </Accordion.Item>);
}