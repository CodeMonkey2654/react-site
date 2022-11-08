import AccordionHeader from "react-bootstrap/AccordionHeader";
import {Accordion, Card} from "react-bootstrap";
import React from "react";
import '../styles/App.scss';
import AccordionBody from "react-bootstrap/AccordionBody";

export default function Biodiversity() {
    return(<Accordion.Item eventKey={"1"} id={"biodiversity"} className={"accordionSet"}>
        <AccordionHeader>Biodiversity Data Analysis Project</AccordionHeader>
        <AccordionBody>
            <h2 className={'workExperienceParagraph'}>Biodiversity Data Analysis</h2 >
            <div className={"EducationAccordion"}>
                <img src={"./Images/codeproject-photo.avif"} alt={"Nature Photo"} className={"largeImage"}/>
                <div className={"projectDescription"}>
                    <h3 className={'workExperienceParagraph'}>Summary</h3>
                    <p className={"workExperienceParagraph"}>
                        Since data analysis has always been something that I enjoy, I chose this project to practice using newer skills
                        in python such as graphing with matplotlib, using Jupyter Notebooks to display content and results incrementally,
                        reading data and processing it using the pandas and numpy libraries, and using analytical skills to see the trends
                        the data shows. The process for this project was to take a look at species data and a weeks worth of observations
                        from our national parks. After this data was loaded into a two-dimensional array, I plotted bar graphs of categorical data
                        to see connections, and plotted numerical data against each other to measure correlation. I then used all correlated
                        data values to look at trends and then explained what the data said. The results at the end were not shocking, but
                        certainly alarming as a large portion of species in the national parks are facing endangerment which shows a sharp decline
                        in biodiversity over time. Birds were the biggest victims as a larger portion of their species are endangered
                        than any other categories.
                    </p>

                </div>
            </div>
            <div className={"projectDescription"}>
                <h3 className={'workExperienceParagraph'}>Analysis</h3>
                <p className={"workExperienceParagraph"}>
                    I think the most impressive part of the project was the speed in which it was completed. Since I was learning
                    new skills, I was expecting this project to take about a week. Instead, it took only 2 hours. This was partially
                    because the data set had a more limited number of columns which drastically decreased the length of time it took to process
                    the data. I also underestimated how powerful Python is. I have been coding in C# and Java primarily for the past year and a
                    half. Python takes about half to a quarter of the time to code than those languages. In the future, I would probably find
                    a better way to show my results at the end of the project. I feel that project data should be understood by nearly anyone,
                    and so, rather than use Jupyter Notebooks, I would probably store the data in powerpoint and outline my process,
                    show the results, and even frame future questions that should be asked. I would also investigate further into data by
                    asking and searching for possible answers to why the biodiversity is homogenizing across national parks, why
                    the majority of these species fall into a few categories, and whether all of these trends apply to a larger sample.
                    Showing data in different forms would also add scope to the project in a way that would improve user understanding
                    of the data, and the situation that it represents.
                </p>
            </div>

            <div className={"emptyDiv"}></div>
            <h3>Skills Used For This Project</h3>
            <div className={"cardsGroup"}>
                <Card className={"Card"}>
                    <Card.Img className={"cardImg"} variant="top" src={"./Images/python.jpg"}/>
                    <Card.Title>Python</Card.Title>
                    <Card.Text>
                        Experienced with basic python frameworks and environments such as Jupyter Notebooks,
                        Terminal Execution, and Pycharm IDE. Familiar with type hinting, testing and documentation aid libraries, Network Protocols,
                        asyncio and multithreading, data structures, decorators and generators, and scientific libraries.  Currently learning more in depth
                        AI and ML theory and the performance of numpy internals.
                    </Card.Text>
                </Card>
            </div>
        </AccordionBody>
    </Accordion.Item>);
}