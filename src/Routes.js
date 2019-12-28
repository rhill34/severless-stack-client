import React from "react";
import { Route, Switch } from "react-router-dom"; 
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";

// This component uses this Switch component from React-Router that renders the first matching route that is defined within it. For now we only have a single route, it looks for / and renders the Home component when matched. We are also using the exact prop to ensure that it matches the / route exactly. This is because the path / will also match any route that starts with a /.

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            { /* Finally, catch all unmatched routes */ } 
            <Route component={NotFound} />
        </Switch>);
}