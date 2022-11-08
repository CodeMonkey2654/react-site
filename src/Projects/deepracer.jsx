import AccordionHeader from "react-bootstrap/AccordionHeader";
import {Accordion, Card} from "react-bootstrap";
import React from "react";
import '../styles/App.scss';
import AccordionBody from "react-bootstrap/AccordionBody";

export default function AWSDeepRacer() {
    return(<Accordion.Item eventKey={"3"} id={"deep-racer"} className={"accordionSet"}>
        <AccordionHeader>AWS DeepRacer</AccordionHeader>
        <AccordionBody>
            <div className={"EducationAccordion"}>
                <img src={"./Images/deepracer.avif"} alt={"Amazon DeepRacer Logo"} className={"largeImage"}/>
                <div className={"projectDescription"}>
                    <h3 className={'workExperienceParagraph'}>Project Summary</h3>
                    <p className={'workExperienceParagraph'}>
                        This was a project that I completed during a hackathon over the summer with a partner who I
                        worked in my department on another team. The goal of this project was to gain an introduction
                        into reinforcement learning, how to optimize reward functions, and then how to train a model
                        appropriately using that same function. Our process for this was a lot of research, trial and
                        error, and testing. Since neither of us had really encountered reinforcement learning, we spent
                        the first few hours reading about all of our parameters and which models and types of models were
                        going to be the most optimal. The second step of our process was to design our reward function
                        using python and researching ways to measure our models progress outside of the provided statistics.
                        This was done using an online repository that measured the training files and gave statistics
                        for the car such as where it was crashing the most, where it received the largest rewards, its
                        average path, etc. The goal then became to get our 1/18th scale race car to get around the track
                        using the model we created. Unfortunately, the hardware for the car was struggling in the room,
                        but our model's performance was close to a 98% completion rate at a relatively high speed.
                        We completed this project over the course of about 2 work days, and had a great time.
                    </p>
                </div>
            </div>
            <div className={"projectDescription"}>
                <h3 className={'workExperienceParagraph'}>Project Analysis</h3>
                <p className={'workExperienceParagraph'}>
                    I think what we did best in this project was working together well and improving incrementally,
                    our goal was to keep the model from over fitting, and analyzing the data we had as much as possible
                    to correct its progress frequently. This project gave me time to learn a lot more about data science,
                    python, and working using AWS platform for computing. If I were to do this project again, I would change
                    our base model to have different rates of entropy and cut itself off to keep from over fitting using
                    early stop, which I had not encountered at that time. It was also nice to get to use R and Python,
                    skills which I had not used in a while, so it gave me room to refresh and practice. Spending time with
                    my teammate was also a benefit of this project as he had a unique perspective on computer learning.
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
            </div>
        </AccordionBody>

    </Accordion.Item>);
}