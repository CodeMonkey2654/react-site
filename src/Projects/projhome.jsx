import React from "react";
import Navigation from "../Components/Navigation";
import {Accordion, Card} from "react-bootstrap";
import '../styles/App.scss';
import AngularToReact from "./angulartoreact";
import Biodiversity from "./biodiversity";
import Datavis from "./datavis";
import AWSDeepRacer from "./deepracer";
import Thiswebsite from "./thiswebsite";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function ProjHome() {
    const [accordionId] = React.useState(window.location.href.split("#")[2]);
    let activeKey;
    switch (accordionId) {
        case "angular-react":
            activeKey = "0";
            break;
        case "biodiversity":
            activeKey = "1";
            break;
        case "this-site":
            activeKey = "4";
            break;
        case "datavis":
            activeKey = "2";
            break;
        case "deep-racer":
            activeKey = "3";
            break;
    }
    const accordions = () => {
        return (
            <Accordion className={"accordionSet"} defaultActiveKey={activeKey}>
                <AngularToReact />
                <Biodiversity />
                <Thiswebsite />
                <Datavis />
                <AWSDeepRacer />
            </Accordion>
        );
    }
    return(
        <div>
            <Navigation />
            <Header title={"Projects"} subtitle={""} imgUrl={"./Images/project-bg.avif"} />
            <div className={"Accordion-Collection"}>
                {accordions()}
            </div>
            <Footer />
        </div>
    );
}