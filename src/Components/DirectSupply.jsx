import '../styles/App.scss';
import {Accordion} from "react-bootstrap";
import {Card} from "react-bootstrap";
import React from "react";


function DirectSupply() {

    return (
        <div className="App">
            <div >
                <div className={"EducationAccordion"}>
                    <img className={"cardImg"} src={"./Images/direct-supply.png"} alt={"direct supply company logo"}/>
                    <p className={"workExperienceParagraph"}>
                        Participated in daily workflow with team using version control software, SQL server, and other proprietary tools.
                        Regular refactor, design, and architecture work. Significant usage of TypeScript React, C#,
                        and Microsoft SQL Server Management Studio. Regularly involved in gaining experience and knowledge by actively participating in
                        realistic development environments. Gained knowledge of smtp protocols, SCRUM and Agile practices, and UX work.
                        Employment from May 2022 - Current.
                    </p>
                </div>
            </div>
            <div className="Accordion-Collection">
                        <h2>Languages Used</h2>
                        <div className={"cardsGroupNonAccordion"}>
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
                                <Card.Img className={"cardImg"} variant="top" src={"./Images/python.jpg"}/>
                                <Card.Title>Python</Card.Title>
                                <Card.Text>Experienced with basic python frameworks and environments such as Jupyter Notebooks,
                                    Terminal Execution, and Pycharm IDE. Familiar with type hinting, testing and documentation aid libraries, Network Protocols,
                                    asyncio and multithreading, data structures, decorators and generators, and scientific libraries.  Currently learning more in depth
                                    AI and ML theory and the performance of numpy internals.
                                </Card.Text>
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
                                <Card.Img className={"cardImg"} variant="top" src={"./Images/mssms.png"}/>
                                <Card.Title>SQL</Card.Title>
                                <Card.Text>Familiar with relational database basic syntax, best practices, aggregate functions,
                                    joins, basic query optimization and stored procedures and their connections to MVC design patterns. Also familiar with
                                    order of execution of Select Statements, Subqueries, and Common Table Expressions.</Card.Text>
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
            </div>
        </div>
    );
}

export default DirectSupply;
