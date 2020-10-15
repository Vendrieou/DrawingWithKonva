import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Bus from "./Bus";
import Home from "./Home";

const App = () => {
    return (
        <Router>
            <>
                <Home />
                <Switch>
                    <Route path="/" element={<Home />} />
                    <Route path="/bus" element={<Bus />} />
                </Switch>
            </>
        </Router>
    )
}

export default App
