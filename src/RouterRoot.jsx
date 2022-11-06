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
                <Route path="/react-site" element={ <App />} />
                <Route path="/education" element={<Eduhome />} />
                <Route path="/workexp" element={<Workhome/>} />
                <Route path="/projects" element={<ProjHome/>} />
            </Routes>
        </div>
    )
}

export default RouterRoot;