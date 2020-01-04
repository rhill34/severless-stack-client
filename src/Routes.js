import React from "react";
import { Route, Switch } from "react-router-dom";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import ResetPassword from "./containers/ResetPassword";
import Signup from "./containers/Signup";
import ChangePassword from "./containers/ChangePassword";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";

// This component uses this Switch component from React-Router that renders the first matching route that is defined within it. For now we only have a single route, it looks for / and renders the Home component when matched. We are also using the exact prop to ensure that it matches the / route exactly. This is because the path / will also match any route that starts with a /.

export default function Routes({ appProps, childProps }) {
    return (
        <Switch>
            <AppliedRoute
                path="/"
                exact component={Home}
                appProps={appProps}
            />
            <AppliedRoute
                path="/login"
                exact component={Login}
                appProps={appProps}
            />
            <AppliedRoute
                path="/signup"
                exact component={Signup}
                appProps={appProps}
            />
            <AppliedRoute
                path="/settings"
                exact component={Settings}
                appProps={appProps}
            />
            <AppliedRoute
                path="/notes/new"
                exact component={NewNote}
                appProps={appProps}
            />
            <AppliedRoute
                path="/notes/:id"
                exact component={Notes}
                appProps={appProps}
            />
            <AuthenticatedRoute
                path="/settings"
                exact
                component={Settings}
                props={childProps}
            />
            <AuthenticatedRoute
                path="/settings/password"
                exact
                component={ChangePassword}
                props={childProps}
            />
            <UnauthenticatedRoute
                path="/login/reset"
                exact
                component={ResetPassword}
                props={childProps}
            />
            { /* Finally, catch all unmatched routes */}
            <Route component={NotFound} />
        </Switch>
    );
}