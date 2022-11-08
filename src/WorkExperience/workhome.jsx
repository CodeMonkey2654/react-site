import '../styles/App.scss';
import {Accordion} from "react-bootstrap";
import Navigation from "../Components/Navigation";
import AccordionBody from "react-bootstrap/AccordionBody";
import DirectSupply from "../Components/DirectSupply";
import FirstChurch from "../Components/FirstChurch";
import GeekSquad from "../Components/GeekSquad";
import MSOEIT from "../Components/msoeit";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import React from "react";

export default function workhome () {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [accordionId] = React.useState(window.location.href.split("#")[2]);
    let activeKey;
    switch (accordionId) {
        case "direct-supply":
            activeKey = "0";
            break;
        case "first-church":
            activeKey = "1";
            break;
        case "geek-squad":
            activeKey = "2";
            break;
        case "msoe-it":
            activeKey = "3";
            break;
    }
    const accordions = () => {
        return(
            <Accordion className={"accordionSet"} defaultActiveKey={activeKey}>
                <Accordion.Item eventKey={"0"} id={"direct-supply"} className={"accordionSet"}>
                    <Accordion.Header>Direct Supply</Accordion.Header>
                    <AccordionBody>
                        <DirectSupply />
                    </AccordionBody>
                </Accordion.Item>
                <Accordion.Item eventKey={"1"} id={"first-church"} className={"accordionSet"}>
                    <Accordion.Header>First Church of Squantum</Accordion.Header>
                    <AccordionBody>
                        <FirstChurch />
                    </AccordionBody>
                </Accordion.Item>
                <Accordion.Item eventKey={"2"} id={"geek-squad"} className={"accordionSet"}>
                    <Accordion.Header>Geek Squad</Accordion.Header>
                    <AccordionBody>
                        <GeekSquad />
                    </AccordionBody>
                </Accordion.Item>
                <Accordion.Item eventKey={"3"} id={"msoe-it"} className={"accordionSet"}>
                    <Accordion.Header>Milwaukee School of Engineering</Accordion.Header >
                    <AccordionBody>
                        <MSOEIT />
                    </AccordionBody>
                </Accordion.Item>
            </Accordion>
        );
    }
    return (
        <div className="App">
            <Navigation />
            <Header title={"Work Experience"} subtitle={""} imgUrl={"./Images/workexp-bg.avif"} />
            <div className="Accordion-Collection">
                {accordions()}
            </div>
            <Footer />
        </div>
    );
}
