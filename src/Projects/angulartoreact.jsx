import AccordionHeader from "react-bootstrap/AccordionHeader";
import {Accordion, Card} from "react-bootstrap";
import React from "react";
import '../styles/App.scss';
import AccordionBody from "react-bootstrap/AccordionBody";

export default function AngularToReact() {
    return(<Accordion.Item eventKey={"0"} id={"angular-react"}>
        <AccordionHeader>Angular To React Refactor</AccordionHeader>
        <AccordionBody>
            <div className={"EducationAccordion"}>
                <img src={"./Images/angular-logo.avif"} alt={"Angular logo"} className={"cardImg"}/>
                <p className={'workExperienceParagraph'}>
                    Led a refactoring effort in an industry setting to convert a set of angular directives and
                    controllers into React components and then connecting those pages to C# Model View Controller patterns.
                    Also involved implementing Redux, using more complex features of react router, version control, and architecture
                    development and redesign efforts to reduce impact on developers.
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
                    <Card.Img className={"cardImg"} variant="top" src={"./Images/logo192.png"}/>
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
                    <Card.Img className={"cardImg"} variant="top" src={"./Images/powerhsell.png"}/>
                    <Card.Title>Shell Scripting</Card.Title>
                    <Card.Text>Basic CI/CD, automating common procedures in windows powershell, use of GitHub
                        and GitLab, and searching for terms with files and command pipelines. Additional familiarity with redirection operators,
                        brace expansion, and grep consoles. Main usages have been basic commands and file searching.</Card.Text>
                </Card>
            </div>
        </AccordionBody>
    </Accordion.Item>);
}