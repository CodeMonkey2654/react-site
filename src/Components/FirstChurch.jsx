import '../styles/App.scss';

function FirstChurch() {

    return (
        <div>
            <div className={"accordionSet"}>
                <div className={"EducationAccordion"}>
                    <img src={"./Images/first-church.jpg"} alt={"first church landscape"} className={"largeImage"}/>
                    <p className={"workExperienceParagraphFont"}>
                        Volunteered, used, and adapted high-powered presentation software in real time.
                        Assisted with creating a mesh Wi-Fi and ethernet system network. Focused on accessibility
                        of information including printing and creating braille and large print bulletins,
                        coordinating and adjusting to frequent changes including making portable AV setups on a strict budget.
                        Often involved in training, regular meetings and improvements of process.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FirstChurch;
