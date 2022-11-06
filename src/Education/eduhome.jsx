import '../styles/App.scss';
import {Accordion} from "react-bootstrap";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

function EduHome() {

    return (
        <div className="App">
            <div className={"navBarSet"}>
                <h3>Caleb Gray</h3>
                <Navigation className="navigation"/>
            </div>
            <div className="Gradient-box">
                <header className="App-header">
                    <h1>Education</h1>
                </header>
            </div>
            <body>
            <div className="Accordion-Collection">
                <Accordion className={"accordionSet"}>
                    <Accordion.Item eventKey={"0"} id={"MSOE"}>
                        <Accordion.Header>Milwaukee School of Engineering</Accordion.Header>
                        <Accordion.Body>
                            <div className={"EducationAccordion"}>
                                <img src={"./Images/MSOE.png"} alt={"MSOE logo"}/>
                                <div className={"msoeInfo"}>
                                    <p>Degree: Bachelor's of Computer Science</p>
                                    <p>Dates of Education: 2021-2025</p>
                                    <p>
                                        Additional Info: Computer science student with 3.6 GPA who spends spare time learning
                                        new programming languages, spending time with my girlfriend, and learning more
                                        about AIML concepts.
                                    </p>
                                </div>
                            </div>
                            <div className={"emptyDiv"}></div>
                            <div className={"EducationAccordionClasses"}>
                                <h3>Classes Taken</h3>
                                <div className={"classListItems"}>
                                    <ul>
                                        <li>Data Structures</li>
                                        <li>Software Engineering Tools and Practices</li>
                                        <li>Network Protocols</li>
                                        <li>Software Development II</li>
                                        <li>Software Development I</li>
                                    </ul>
                                </div>
                                <div className={"classListItems"}>
                                    <ul>
                                        <li>Introduction to User Experience</li>
                                        <li>Calculus III</li>
                                        <li>Calculus II</li>
                                        <li>Calculus I</li>
                                        <li>Discrete Math I</li>
                                    </ul>
                                </div>
                                <div className={"classListItems"}>
                                    <ul>
                                        <li>Foundations of Business Economics</li>
                                        <li>Physics II</li>
                                        <li>Physics I</li>
                                        <li>Chemistry I</li>
                                        <li>General Studies Series (I-III)</li>
                                    </ul>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={"1"} id={"NQHS"}>
                        <Accordion.Header>North Quincy High School</Accordion.Header>
                        <Accordion.Body>
                            <div className={"EducationAccordion"}>
                                <img src={"./Images/NQHS.png"} alt={"North Quincy High Logo"}/>
                                <div>
                                    <p>Degree: High School Diploma</p>
                                    <p>Dates of Education: 2017-2021</p>
                                    <p>
                                        Additional Info: 1200+ hours of community service, involvement in the Boy Scouts of America,
                                        teaching Martial Arts, and Science. Relevant classes include Introduction to Computer science
                                        and Advanced Statistics.
                                    </p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            </body>
            <Footer />
        </div>
    );
}

export default EduHome;
