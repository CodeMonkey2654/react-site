import { Routes, Route } from "react-router-dom"

import Eduhome from "./Education/eduhome";
import Workhome from "./WorkExperience/workhome";
import ProjHome from "./Projects/projhome";
import React from "react";
import App from "./App";

function RouterRoot() {
    return (
        <div className="App">
            <Routes>
                <Route path="/react-site" exact element={ <App />} />
                <Route path="/react-site/education" element={<Eduhome />} />
                <Route path="/react-site/workexp" element={<Workhome/>} />
                <Route path="/react-site/projects" element={<ProjHome/>} />
            </Routes>
        </div>
    )
}

export default RouterRoot;