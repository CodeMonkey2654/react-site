import AccordionHeader from "react-bootstrap/AccordionHeader";
import {Accordion, Card} from "react-bootstrap";
import React from "react";
import '../styles/App.scss';
import AccordionBody from "react-bootstrap/AccordionBody";

export default function Datavis() {
    return(<Accordion.Item eventKey={"2"} id={"datavis"} className={"accordionSet"}>
        <AccordionHeader>DataVis</AccordionHeader>
        <AccordionBody>
            <h2 className={'workExperienceParagraph'}>Data Visualization Software</h2 >
            <div className={"EducationAccordion"}>
                <img src={"./Images/recharts.png"} alt={"Rechart API example"} className={"largeImage"}/>
                <div className={"projectDescription"}>
                    <h3 className={'workExperienceParagraph'}>Project Summary</h3>
                    <p className={'workExperienceParagraph'}>
                        Datavis was a group project done here at MSOE with some friends a couple of months ago designed to
                        help us practice using react and some external libraries. The process was simple, but incredibly
                        effective. We started by writing out the steps of the project, to have a way to import the data,
                        import the data, populate models, display the data, and allow the user to modify the data and for
                        charts to update automatically in that situation. My role was to help other team members learn the
                        tools we were using, help with designing the backend, make training sets of data, and then verify
                        that all data points were effective. At the end of the meeting, we did not finish, but I went back
                        a couple of weeks later and finished and tested parts of the project to make sure that our libraries
                        worked well. All in all, this project took about 8-10 hours to complete our product. Our largest
                        challenges were facing new technical skills and making sure that our understanding of the tasks
                        were equivalent to avoid overlap.
                    </p>
                </div>
            </div>
            <div className={"projectDescription"}>
                <h3 className={'workExperienceParagraph'}>Project Analysis</h3>
                <p className={'workExperienceParagraph'}>
                    I think what we did best in the project was having fun. It is always nice to have a good product,
                    but the goal with side projects is to learn something new and have fun doing it with a team, which
                    I think was accomplished. I also thought that the rate team members learned the new skills was incredible.
                    Out of the four team members, 3 of them had never encountered the language or the other devops tools we used.
                    By the end of the project, many were coding quickly and effectively providing solutions to problems
                    as we encountered them. Revisiting old skills and polishing knowledge such as React JS, API usage,
                    and designing test data to effectively test the application and its reactions to error. In future
                    attempts at this project, I would use a stronger backend rather than storing all logic and
                    information in React. This makes the application more secure and would have been easier to
                    use as I am more familiar with backend development in C#, Java, or Python.
                </p>
            </div>
            <div className={"emptyDiv"}></div>
            <h3>Skills Used For This Project</h3>
            <div className={"cardsGroup"}>
                <Card className={"Card"}>
                    <Card.Img className={"cardImg"} variant="top" src={"./Images/react.jpg"}/>
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
                <Card className={"Card"}>
                    <Card.Img className={"cardImg"} variant="top" src={"./Images/rlang.avif"}/>
                    <Card.Title>R</Card.Title>
                    <Card.Text>Familiar with basic R syntax and practices, GGPlot2, functional programming practices,
                        lambda calculus fundamentals, and basic algorithmic data analysis. Currently learning about typecasting, data frames,
                        file handling, working with inbuilt databases, conditional statements, and loops as well as connecting R with Python.
                    </Card.Text>
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