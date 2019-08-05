import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import * as ROUTES from '../../constants/routes'
import '../../styles/style.css'

const ARRAY = Object.values(ROUTES);


function App() {
    return (
        <Router>
            {ARRAY.map((item, index) => (
                <Route
                    id={`route-${index}`}
                    exact
                    path={item.route}
                    component={item.component}
                />
            ))}
        </Router>
    );
}

export default App;
