import AccordionHeader from "react-bootstrap/AccordionHeader";
import {Accordion, Card} from "react-bootstrap";
import React from "react";
import '../styles/App.scss';
import AccordionBody from "react-bootstrap/AccordionBody";

export default function Thiswebsite() {
    return(<Accordion.Item eventKey={"4"} id={"this-site"} className={"accordionSet"}>
        <AccordionHeader>This Website!</AccordionHeader>
        <AccordionBody>
            <h2 className={'workExperienceParagraph'}>This Website!</h2 >
            <div className={"EducationAccordion"}>
                <img src={"./Images/react.jpg"} alt={"React Logo"} className={"largeImage"}/>
                <div className={"projectDescription"}>
                    <h3 className={'workExperienceParagraph'}>Summary</h3>
                    <p className={"workExperienceParagraph"}>
                        The website you are on now is actually something that I have coded myself for this class.
                        Over the past week or so, I have designed, developed, and tested the code on this website and
                        deployed it using github pages. The process for design started with wire framing the website,
                        coding a static, non-responsive page that loads properly. After this, I had to code each
                        individual component, abstract the header, and Navigation, then try to reuse as much code as
                        possible. After the home page was designed, I had to link all elements together, which took a
                        long time. This time was mainly spent on configuring a hash router, package.json, and then
                        allowing the site to be deployed and redeployed. The final deliverable is, well, it is this
                        website. I completed this in about a week counting design, but the coding for this website
                        was about a full weekend of nonstop coding. The largest constraints were cooperating with React
                        Router, configuring this website to appear static even if it is dynamic using gh-pages react,
                        and then of course trouble shooting the elements of this site.
                    </p>
                </div>
            </div>
            <div className={"projectDescription"}>
                <h3 className={'workExperienceParagraph'}>Analysis</h3>
                <p className={"workExperienceParagraph"}>
                    I think this project was done well in that it works, and it is hosted on a site that is accessible
                    by anyone. I also think that my design process was good. If I were to do this project again, I would
                    work harder on url linking so that all URLs would connect, I would also spend more time patching bugs
                    and CSS to make it visible and aligned so Users can use this website on mobile and it looks normal.
                    Given more time, I would also go more in depth for using images, linking code snippets to the website
                    so that users can see and run my projects rather than just hear about them.
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
                        CSS functions and variables, and basic animations. Currently transferring more to Sass, JSX or TSX usage
                        instead of CSS and HTML.
                    </Card.Text>
                </Card>
            </div>
        </AccordionBody>

    </Accordion.Item>);
}