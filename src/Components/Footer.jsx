import '../styles/footer.css'
import Button from "react-bootstrap/Button";

export default function Footer() {
    return(
        <div className={"footer"}>
            <div className={"contactMeText"}>
                <h2>Contact Me</h2>
                <p>
                    Thank you for taking a look at my page! If you have any questions, please feel free to
                    get in touch using the information to the right.
                </p>
            </div>
            <div className={"links"}>
                <div className={"contactLinks"}>
                    <p>Email</p>
                    <a href={"mailto:grayc@msoe.edu"}>grayc@msoe.edu</a>
                </div>
                <div className={"contactLinks"}>
                    <p>Phone</p>
                    <a href={"tel:+16083461940"}>(608) 346-1940</a>
                </div>
            </div>
        </div>
    );
}