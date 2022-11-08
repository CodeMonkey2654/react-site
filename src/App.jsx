import './styles/App.scss';
import {Accordion, Image} from "react-bootstrap";
import {Card} from "react-bootstrap";
import Navigation from "./Components/Navigation";
import React from "react";
import Footer from "./Components/Footer";
import {HashLink} from "react-router-hash-link";
import Header from "./Components/Header";

function App() {
    return (
            <div className="App">
                <Navigation />
                <Header title={"Caleb Gray"} subtitle={"Computer Scientist"} imgUrl={"./Images/home-background.avif"}/>
                <div className={"aboutMe"}>
                    <h3>About Me</h3>
                    <div className={"aboutMeContents"}>
                        <Image className={"cardImg"} src={"./Images/Personal Photo.jpg"} alt={"Me in a sleeping bag giving a thumbs up during quarantine"} roundedCircle/>
                        <p>
                            Thank you for visiting my website! As I’m sure you already know if you’re here and from the
                            obnoxiously large header, my name is Caleb Gray, a sophomore computer science major at the
                            Milwaukee School of Engineering and plan on graduating in the spring of 2025.
                            I currently am employed at Direct Supply as a Software Engineering
                            intern where I work with React, TypeScript React, C#, and a few other things you can read about
                            below. In my spare time, I like to learn new programming languages, keep up to date on Marvel and
                            DC shows and movies, and try learning things with my girlfriend. In terms of computer science,
                            I am working on growing my understanding of Quantum Computing, Artificial Intelligence and Machine
                            Learning concepts, and hopefully one day find a way to keep my dog out of online meetings. If you
                            have any questions, concerns, or just want to talk feel free to send me an email at grayc@msoe.edu
                            or text me at (608) 346-1940. Have fun exploring!
                            <br />
                            <br />
                            <a className={"btn"} href={"/react-site/#/react-site/about-me"}>Learn More</a>
                        </p>
                    </div>
                </div>
                <div className="Accordion-Collection">
                    <Accordion className={"accordionSet"}>
                        <Accordion.Item eventKey={"0"} >
                            <Accordion.Header>Skills</Accordion.Header>
                            <Accordion.Body className={"cardsGroup"}>
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
                                    <Card.Img className={"cardImg"} variant="top" src={"./Images/mssms.png"}/>
                                    <Card.Title>SQL</Card.Title>
                                    <Card.Text>
                                        Familiar with relational database basic syntax, best practices, aggregate functions,
                                        joins, basic query optimization and stored procedures and their connections to MVC design patterns. Also familiar with
                                        order of execution of Select Statements, Subqueries, and Common Table Expressions.
                                    </Card.Text>
                                </Card>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src={"./Images/rlang.avif"}/>
                                    <Card.Title>R</Card.Title>
                                    <Card.Text>
                                        Familiar with basic R syntax and practices, GGPlot2, functional programming practices,
                                        lambda calculus fundamentals, and basic algorithmic data analysis. Currently learning about typecasting, data frames,
                                        file handling, working with inbuilt databases, conditional statements, and loops as well as connecting R with Python.
                                    </Card.Text>
                                </Card>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src={"./Images/shell.jpg"}/>
                                    <Card.Title>Shell Scripting</Card.Title>
                                    <Card.Text>
                                        Basic CI/CD, automating common procedures in windows powershell, use of GitHub
                                        and GitLab, and searching for terms with files and command pipelines. Additional familiarity with redirection operators,
                                        brace expansion, and grep consoles. Main usages have been basic commands and file searching.
                                    </Card.Text>
                                </Card>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src={"./Images/gitbash.png"}/>
                                    <Card.Title>Git Version Control</Card.Title>
                                    <Card.Text>
                                        Experience with GitHub and Gitlab in using GitHub Pages, Continuous Integration and Delivery,
                                        using git in both GitLab and GitHub UI and command line, and working with large groups of people
                                        to limit merge conflicts and improve development speed with other practices. Frequently engaged in
                                        code reviews with team settings.
                                    </Card.Text>
                                </Card>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src={"./Images/team-process.avif"}/>
                                    <Card.Title>Agile Scrum</Card.Title>
                                    <Card.Text>
                                        Frequently engaged in all major SCRUM functions in an AGILE environment including
                                        refinement, daily stand-ups, sprint reviews, Kanban boards, and process improvement
                                        discussions in a retrospective and productive environment.
                                    </Card.Text>
                                </Card>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src={"./Images/skills-growth.avif"}/>
                                    <Card.Title>Growing Skills</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>MounteBank</li>
                                            <li>Design and Architecture</li>
                                            <li>RabbitMQ</li>
                                            <li>Advanced Technology Refactor</li>
                                        </ul>
                                    </Card.Text>
                                </Card>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey={"1"}>
                            <Accordion.Header>Projects</Accordion.Header>
                            <Accordion.Body className={"cardsGroup"}>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src={"./Images/codeproject-photo.avif"}/>
                                    <Card.Title className={"cardTitle"}>This Website!</Card.Title>
                                    <Card.Text className={"cardText"}>
                                        The most recent of my projects has been coding this website! I have used
                                        React, React Router, BootStrap, Sass, CSS, and HTML for the construction of this site. If this website
                                        were to expand in scale, I would implement redux, and lean further into the stateful benefits of react and generating
                                        OOP classes and templates using typescript.
                                    </Card.Text>
                                    <Card.Body>
                                        <a className="btn"><HashLink to={"/react-site/projects#this-site"} classNames={"hashLink"}>Learn More</HashLink></a>
                                    </Card.Body>
                                </Card>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src="./Images/deepracer.avif"/>
                                    <Card.Title className={"cardTitle"}>AWS Deep Racer</Card.Title>
                                    <Card.Text className={"cardText"}>
                                        Used reinforcement learning and Jupyter Notebooks to create and analyze the performance
                                        of a 1/18th scale race care. Involved designing a reward function, analyzing model performance, and
                                        learning machine learning and python AIML fundamentals.
                                    </Card.Text>
                                    <Card.Body>
                                        <a className="btn"><HashLink to={"/react-site/projects#deep-racer"} classNames={"hashLink"}>Learn More</HashLink></a>
                                    </Card.Body>
                                </Card>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src="./Images/angular-logo.avif"/>
                                    <Card.Title className={"cardTitle"}>Angular 1.x to React Refactor</Card.Title>
                                    <Card.Text className={"cardText"}>
                                        Led a refactoring effort in an industry setting to convert a set of angular directives and
                                        controllers into React components and then connecting those pages to C# Model View Controller patterns.
                                        Also involved implementing Redux, using more complex features of react router, version control, and architecture
                                        development and redesign efforts to reduce impact on developers.
                                    </Card.Text>
                                    <Card.Body>
                                        <a className="btn"><HashLink to={"/react-site/projects#angular-react"} classNames={"hashLink"}>Learn More</HashLink></a>
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
                                        <a className="btn"><HashLink to={"/react-site/projects#biodiversity"} classNames={"hashLink"}>Learn More</HashLink></a>
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
                                        <a className="btn"><HashLink to={"/react-site/projects#datavis"} classNames={"hashLink"}>Learn More</HashLink></a>
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
                                        <a className="btn"><HashLink to={"/react-site/workexp#direct-supply"} classNames={"hashLink"}>Learn More</HashLink></a>
                                    </Card.Body>
                                </Card>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src={"./Images/geek-squad.jpg"}/>
                                    <Card.Title>Best Buy Geek Squad</Card.Title>
                                    <Card.Text>
                                        Consultation Agent<br /><br />
                                        Managed system performance by monitoring operations and correcting routine issues.
                                        Collaborated on investigation, diagnosis, and delivery of customer issues in hardware,
                                        software, and peripherals.
                                    </Card.Text>
                                    <Card.Body>
                                        <a className="btn"><HashLink to={"/react-site/workexp#geek-squad"} classNames={"hashLink"}>Learn More</HashLink></a>
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
                                        <a className="btn"><HashLink to={"/react-site/workexp#msoe-it"} classNames={"hashLink"}>Learn More</HashLink></a>
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
                                        <a className="btn"><HashLink to={"/react-site/workexp#first-church"} classNames={"hashLink"}>Learn More</HashLink></a>
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
                                        <a className="btn"><HashLink to={"/react-site/education#MSOE"} classNames={"hashLink"}>Learn More</HashLink></a>
                                    </Card.Body>
                                </Card>
                                <Card className={"Card"}>
                                    <Card.Img className={"cardImg"} variant="top" src={"./Images/NQHS.png"}/>
                                    <Card.Title>North Quincy High School</Card.Title>
                                    <Card.Text>High School Diploma</Card.Text>
                                    <Card.Body>
                                        <p>4.3 GPA, 1200+ Hours of Community Service, Graduated with Distinction</p>
                                        <a className="btn"><HashLink to={"/react-site/education#NQHS"} classNames={"hashLink"}>Learn More</HashLink></a>
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
