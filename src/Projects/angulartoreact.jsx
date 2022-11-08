import AccordionHeader from "react-bootstrap/AccordionHeader";
import {Accordion, Card} from "react-bootstrap";
import React from "react";
import '../styles/App.scss';
import AccordionBody from "react-bootstrap/AccordionBody";

export default function AngularToReact() {
    return(
        <Accordion.Item eventKey={"0"} id={"angular-react"} className={"accordionSet"}>
        <AccordionHeader>Angular To React Refactor</AccordionHeader>
        <AccordionBody>
            <h2 className={'workExperienceParagraph'}>Angular to React Refactor</h2 >
            <div className={"EducationAccordion"}>
                <img src={"./Images/angular-logo.avif"} alt={"Angular logo"} className={"largeImage"}/>
                <div className={"projectDescription"}>
                    <h3 className={'workExperienceParagraph'}>Project Summary</h3>
                    <p className={'workExperienceParagraph'}>
                        This project has been done and is even still in progress through a company initiative to refactor
                        and changes the language and technology used for a specific part of a website so that it is easier
                        to develop in a team setting. The process for this was to identify the elements that are easiest to
                        transfer to React and then for each component, refactor it and testing functionality. This process is
                        quite exhaustive and takes lots of time, so the project is still ongoing. There is no good estimation for how long
                        it will take, the goal is to process chunks of the project in a timely manner so that more time can be
                        spent better supporting the users. There are lots of constraints in the project, for example the site must always
                        be operational, and the new sites must look nearly identical to the last one. This is very complex when coding
                        languages change, and has been a limiting factor in development. This is a huge team project and I am taking control
                        over this set of chunks and relying on others to review my work.
                    </p>
                </div>
            </div>
            <div className={"projectDescription"}>
                <h3 className={'workExperienceParagraph'}>Project Analysis</h3>
                <p className={'workExperienceParagraph'}>
                    This project has been incredibly educational in lots of ways and has improved my skills in React, Typescript,
                    Javascript, React Router, and lots of other technologies as well as more abstract skills like software architecture,
                    design, and good engineering practices for design. It has also involved cooperating with a UX department which
                    has also helped me learn about interdepartmental cooperation. I got to revisit HTML, CSS, and Sass which was
                    integral to the project. As this process continues, I try to improve the development process by trying different
                    methods of communication, searching for new tools that may make development easier and faster. I plan on using
                    the skills I learned during this project and apply them to future projects in related fields such as data analysis
                    using powerful react libraries, or creating more efficient websites using React Router, and of course, more aesthetically
                    pleasing content using my interactions with team mates in the UX department.
                </p>
            </div>

            <div className={"emptyDiv"}></div>
            <h3>Skills Used For This Project</h3>
            <div className={"cardsGroup"}>
                <Card className={"Card"}>
                    <Card.Img className={"cardImg"} variant="top" src={"./Images/c-sharp.avif"}/>
                    <Card.Title>C# and .NET</Card.Title>
                    <Card.Text>Experience with MVC patterns, .NET 2.1 through .NET6 LTS. Up to date on
                        current features of C# 10 and possible upcoming features of C# 11. Strong familiarity with standard
                        object oriented design patterns and testing procedures. Strong understanding of interacting with SQL using C#,
                        asynchronous programming, and LINQ. Basic familiarity with ASP.NET, REST API,
                        and Blazor and Razor pages.</Card.Text>
                </Card>
                <Card className={"Card"}>
                    <Card.Img className={"cardImg"} variant="top" src={"./Images/react.jpg"}/>
                    <Card.Title>React and Typescript React</Card.Title>
                    <Card.Text>Familiar with connecting React front end structures to Java and C# as well as other
                        JavaScript frameworks such as Angular 1.x. Experience with refactoring, design, TDD and making
                        more interactive web applications. Also familiar with usage of TypeScript React (preferred to
                        vanilla), Redux, functional and class components, lazy loading and suspense, and react hook fundamentals.</Card.Text>
                </Card>
                <Card className={"Card"}>
                    <Card.Img className={"cardImg"} variant="top" src={"./Images/css-html.avif"}/>
                    <Card.Title>HTML & CSS</Card.Title>
                    <Card.Text>Experienced with FlexBox, Grid display, Bootstrap, form creation, and UX to create
                        user-friendly applications in both team and individual settings. Also familiar with semantic HTML,
                        CSS functions and variables, and basic animations. Currently transfering more to Sass, JSX or TSX usage
                        instead of CSS and HTML.</Card.Text>
                </Card>
                <Card className={"Card"}>
                    <Card.Img className={"cardImg"} variant="top" src={"./Images/shell.jpg"}/>
                    <Card.Title>Shell Scripting</Card.Title>
                    <Card.Text>Basic CI/CD, automating common procedures in windows powershell, use of GitHub
                        and GitLab, and searching for terms with files and command pipelines. Additional familiarity with redirection operators,
                        brace expansion, and grep consoles. Main usages have been basic commands and file searching.</Card.Text>
                </Card>
            </div>
        </AccordionBody>
    </Accordion.Item>);
}