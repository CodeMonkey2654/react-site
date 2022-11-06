import './styles/App.scss';
import "./Components/splitButton";
import {Accordion} from "react-bootstrap";
import {Card} from "react-bootstrap";
import Navigation from "./Components/Navigation";
import React from "react";
import Footer from "./Components/Footer";

function App() {
    return (
            <div className="App">
                <div className={"navBarSet"}>
                    <h3>Caleb Gray</h3>
                    <Navigation className="navigation"/>
                </div>

                <div className="Gradient-box">
                    <header className="App-header">
                        <h1>Caleb Gray</h1>
                        <h2>Computer Scientist</h2>
                    </header>
                </div>
                <h3 className={"aboutMeHeader"}>About Me</h3>
                <div className={"aboutMe"}>
                    <img className={"personalphoto"} src="/git/personal/portfolio-site-final/public/Images/Personal Photo.jpg" alt={"Me in a sleeping bag giving a thumbs up during quarantine"}/>
                    <p>
                        Hi! My name is Caleb Gray and I am a Computer Science Student at the Milwaukee school of engineering.
                        I love learning new languages, finding useful libraries, and spending time watching superhero movies with
                        my girlfriend. I prefer to code in Object Oriented Languages, but have been working on learning asynchronous, parallel,
                        and functional languages more and becoming more comfortable with them. I am currently working on learning Go, Rust, Carbon,
                        and C++. I plan on graduating spring of 2025 with a Bachelor's in Computer Science.
                        If you're wondering why I have a link to this website on my resume, it's because I made it! Feel free
                        to take a look around at some of my projects and skills and if you have any questions, shoot me an email or a call!
                    </p>
                </div>
                <div className="Accordion-Collection">
                    <Accordion className={"accordionSet"}>
                        <Accordion.Item eventKey={"0"}>
                            <Accordion.Header>Skills</Accordion.Header>
                            <Accordion.Body className={"cardsGroup"}>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src={"./Images/c-sharp.png"}/>
                                    <Card.Title>C# and .NET</Card.Title>
                                    <Card.Text>Experience with MVC patterns, .NET 2.1 through .NET6 LTS. Up to date on
                                        current features of C# 10 and possible upcoming features of C# 11. Strong familiarity with standard
                                        object oriented design patterns and testing procedures. Strong understanding of interacting with SQL using C#,
                                        asynchronous programming, and LINQ. Basic familiarity with ASP.NET, REST API,
                                        and Blazor and Razor pages.</Card.Text>
                                </Card>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src={"./Images/java.png"}/>
                                    <Card.Title>Java</Card.Title>
                                    <Card.Text>Strong experience with Java backend development including asynchronous programming,
                                        functional programming, and MVC patterns and practices. Also familiar with making API calls, JavaFX frontend, Intellij IDE,
                                        Data Structures, and package building tools such as Gradle and Maven. Understanding of JUnit, JVM Internals, polymorphism, and other
                                        Object Oriented concepts.
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
                                    <Card.Img className={"cardImg"} variant="top" src={"./Images/mssms.png"}/>
                                    <Card.Title>SQL</Card.Title>
                                    <Card.Text>
                                        Familiar with relational database basic syntax, best practices, aggregate functions,
                                        joins, basic query optimization and stored procedures and their connections to MVC design patterns. Also familiar with
                                        order of execution of Select Statements, Subqueries, and Common Table Expressions.
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
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey={"1"}>
                            <Accordion.Header>Projects</Accordion.Header>
                            <Accordion.Body className={"cardsGroup"}>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src="./Images/codeproject-photo.avif"/>
                                    <Card.Title className={"cardTitle"}>This Website!</Card.Title>
                                    <Card.Text className={"cardText"}>
                                        The most recent of my projects has been coding this website! I have used
                                        React, React Router, BootStrap, Sass, CSS, and HTML for the construction of this site. If this website
                                        were to expand in scale, I would implement redux, and lean further into the stateful benefits of react and generating
                                        OOP classes and templates using typescript.
                                    </Card.Text>
                                    <Card.Body>
                                        <a href="/projects#this-site" className="btn">Learn More</a>
                                    </Card.Body>
                                </Card>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src="./Images/deepracer.jpg"/>
                                    <Card.Title className={"cardTitle"}>AWS Deep Racer</Card.Title>
                                    <Card.Text className={"cardText"}>
                                        Used reinforcement learning and Jupyter Notebooks to create and analyze the performance
                                        of a 1/18th scale race care. Involved designing a reward function, analyzing model performance, and
                                        learning machine learning and python AIML fundamentals.
                                    </Card.Text>
                                    <Card.Body>
                                        <a href="/projects#deep-racer" className="btn">Learn More</a>
                                    </Card.Body>
                                </Card>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src="./Images/angular-logo.png"/>
                                    <Card.Title className={"cardTitle"}>Angular 1.x to React Refactor</Card.Title>
                                    <Card.Text className={"cardText"}>
                                        Led a refactoring effort in an industry setting to convert a set of angular directives and
                                        controllers into React components and then connecting those pages to C# Model View Controller patterns.
                                        Also involved implementing Redux, using more complex features of react router, version control, and architecture
                                        development and redesign efforts to reduce impact on developers.
                                    </Card.Text>
                                    <Card.Body>
                                        <a href="/projects#angular-react" className="btn">Learn More</a>
                                    </Card.Body>
                                </Card>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src="./Images/biodiversity.jpg"/>
                                    <Card.Title className={"cardTitle"}>Biodiversity in National Parks</Card.Title>
                                    <Card.Text className={"cardText"}>
                                        Used Jupyter Notebooks, Pandas, Numpy, and matplotlib to analyze the biodiversity statistics
                                        of various national parks and crosschecking this against recent observations to measure
                                        climate change and its effects on animal endangerment status.
                                    </Card.Text>
                                    <Card.Body>
                                        <a href="/projects#biodiversity" className="btn">Learn More</a>
                                    </Card.Body>
                                </Card>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src="./Images/recharts.png"/>
                                    <Card.Title className={"cardTitle"}>Data Visualization Software</Card.Title>
                                    <Card.Text className={"cardText"}>
                                        Utilized JavaScript Libraries, React, and Typescript React as well as python to read data
                                        and create a UI of various plots to make a simple, personal data analysis tool. The results
                                        of this project have been expanded uses of python, JavaScript, and making API calls and using other libraries.
                                    </Card.Text>
                                    <Card.Body>
                                        <a href="/projects#datavis" className="btn">Learn More</a>
                                    </Card.Body>
                                </Card>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey={"2"}>
                            <Accordion.Header>Work Experience</Accordion.Header>
                            <Accordion.Body className={"cardsGroup"}>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src={"./Images/direct-supply.png"}/>
                                    <Card.Title>Direct Supply</Card.Title>
                                    <Card.Text>
                                        Junior Software Engineer<br /><br />
                                        Participated in daily workflow. Regular refactor, design , and architecture work.
                                        Significant usage of TypeScript React, C#, and Microsoft SQL Server Management Studio.
                                    </Card.Text>
                                    <Card.Body>
                                        <a href="/workexp" className="btn">Learn More</a>
                                    </Card.Body>
                                </Card>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src={"./Images/geek-squad.jpg"}/>
                                    <Card.Title>Best Buy Geek Squad</Card.Title>
                                    <Card.Text>
                                        Consultation Agent<br /><br />
                                        Managed system performance by monitoring oeprations and correcting routine issues.
                                        Collaborated on investigation, diagnosis, and delivery of customer issues in hardware,
                                        software, and peripherals.
                                    </Card.Text>
                                    <Card.Body>
                                        <a href="/workexp" className="btn">Learn More</a>
                                    </Card.Body>
                                </Card>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src={"./Images/MSOE.png"}/>
                                    <Card.Title>MSOE IT Department March-June 2022</Card.Title>
                                    <Card.Text>
                                        IT Technician<br /><br />
                                        Regularly interacted with customers and users to correct software and hardware issues.
                                        Focused on diagnosis and correction of software issues and hardware interactions
                                        with exterior vendors.
                                    </Card.Text>
                                    <Card.Body>
                                        <a href="/workexp" className="btn">Learn More</a>
                                    </Card.Body>
                                </Card>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src={"./Images/first-church.jpg"}/>
                                    <Card.Title>First Church of Squantum 2013-2021</Card.Title>
                                    <Card.Text>
                                        IT Coordinator<br /><br />
                                        Volunteered, used, and adapted high-powered presentation software in real time.
                                        Assisted with creating a mesh Wi-Fi and Ethernet system network.
                                        Focused on accessibility of information.
                                    </Card.Text>
                                    <Card.Body>
                                        <a href="/workexp" className="btn">Learn More</a>
                                    </Card.Body>
                                </Card>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey={"3"}>
                            <Accordion.Header>Education</Accordion.Header>
                            <Accordion.Body className={"cardsGroup"}>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src={"./Images/MSOE.png"}/>
                                    <Card.Title>Milwaukee School of Engineering</Card.Title>
                                    <Card.Text>Bachelor's in Computer Science</Card.Text>
                                    <Card.Body>
                                        <p>3.6 GPA, Honor Roll, Expected Graduation Date: May 2025</p>
                                        <a href="/education#MSOE" className="btn">Learn More</a>
                                    </Card.Body>
                                </Card>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src={"./Images/NQHS.png"}/>
                                    <Card.Title>North Quincy High School</Card.Title>
                                    <Card.Text>High School Diploma</Card.Text>
                                    <Card.Body>
                                        <p>4.3 GPA, 1200+ Hours of Community Service, Graduated with Distinction</p>
                                        <a href="/education#NQHS" className="btn">Learn More</a>
                                    </Card.Body>
                                </Card>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <Footer />
            </div>
  );
}

export default App;
