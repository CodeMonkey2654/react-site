import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import {Image} from "react-bootstrap";
import React from "react";
import Footer from "./Components/Footer";
import './styles/App.scss'

export default function AboutMe() {
    return(
        <div >
            <Navigation />
            <Header title={"About Me"} subtitle={""} imgUrl={"./Images/about-me.avif"}/>
            <h3 className={"aboutMe"}>Summary</h3>
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
                </p>
            </div>
            <h3 className={"aboutMe"}>Time Line</h3>
            <Image className={"timeline"} src={"./Images/timeline.png"} />
            <Footer />
        </div>
    );
}