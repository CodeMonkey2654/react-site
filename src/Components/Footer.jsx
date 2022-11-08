import '../styles/footer.css'

export default function Footer() {
    return(
        <div className={"footer"}>
            <div className={"contactMeText"}>
                <h2>Get in Touch!</h2>
                <p className={"footerText"}>
                    Thank you for taking the time to go through my page! To the right you will see my ,
                    phone number, and my LinkedIn. Feel free to send me an email, a text, or connect with me on social media.
                </p>
            </div>
            <div className={"links"}>
                <div className={"contactLinks"}>
                    <p className={"footerText"}>Email                                       <a href={"mailto:grayc@msoe.edu"}>grayc@msoe.edu</a></p>
                </div>
                <div className={"contactLinks"}>
                    <p className={"footerText"}>Phone                                       <a href={"tel:6083461940"}>(608) 346-1940</a></p>
                </div>
                <div className={"contactLinks"}>
                    <p className={"footerText"}>LinkedIn                                    <a href={"https://www.linkedin.com/in/caleb-gray-219116243/"}>caleb-gray</a></p>
                </div>
            </div>
        </div>
    );
}