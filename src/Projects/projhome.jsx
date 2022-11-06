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

export default function ProjHome() {
    return(
        <div>
            <div className={"navBarSet"}>
                <h3>Caleb Gray</h3>
                <Navigation className="navigation"/>
            </div>
            <div className="Gradient-box">
                <header className="App-header">
                    <h1>Projects</h1>
                </header>
            </div>
            <div className={"Accordion-Collection"}>
                <Accordion className={"accordionSet"}>
                    <AngularToReact />
                    <Biodiversity />
                    <Thiswebsite />
                    <Datavis />
                    <AWSDeepRacer />
                </Accordion>
            </div>
            <Footer />
        </div>
    );
}