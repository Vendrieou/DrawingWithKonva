import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Bus from './Bus'
import Home from './Home'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/bus" component={Bus} />
            </Switch>
        </Router>
    )
}

export default App
