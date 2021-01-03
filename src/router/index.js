import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import routes from "./routes";
import PrivateRoute from "./private_router";

import {
    Home,
    Accounts
} from './../screens'

const RouterApp = (props) => {
    return <Router>
        <Switch>
            <Route exact path={'/accounts'} component={Accounts}/>
            <PrivateRoute exact path={routes.Live} component={Home} />
            <Route component={Accounts}/>
        </Switch>
    </Router>
}

export default RouterApp;