import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import * as ROUTES from '../../constants/routes'
import Navigation from './Navigation'
import Footer from './Footer'
// import NoPage from './NoPage'

import '../../styles/style.css'

const ARRAY = Object.values(ROUTES);


function App() {
    return (
        <Router>
            <Navigation />
            {ARRAY.map((item, index) => (
                <Route
                    key={`route-${index}`}
                    exact
                    path={item.route}
                    component={item.component}
                />
            ))}
            {/* <Route
                exact
                component={NoPage}
            /> */}
            <Footer />
        </Router>
    );
}

export default App;
