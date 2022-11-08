import '../styles/App.scss';

function GeekSquad() {

    return (
        <div className="App">
            <div className={"accordionSet"}>
                <div className={"EducationAccordion"}>
                    <img src={"./Images/geek-squad.jpg"} alt={"geek squad logo"} className={"largeImage"}/>
                    <p className={'workExperienceParagraphFont'}>
                        Managed system performance by monitoring operations and correcting
                        routine issues. Collaborated on investigation, diagnosis, and delivery of
                        customer issues in hardware, software, and peripherals. Regularly involved in customer service,
                        quality management, and using detail-oriented proprietary software.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default GeekSquad;
