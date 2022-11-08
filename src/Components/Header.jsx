import React from "react";
import '../styles/header.css'

export default function Header(props) {
    const gradiantStyle = {
        backgroundImage: 'url(' + props.imgUrl + ')',
    }
    return(
        <div className="Gradient-box" style={gradiantStyle}>
            <div className={"App-header"}>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        </div>
    );
}