import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, Auth, Signup } from './Auth';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component = { Auth } />
                <Route exact path = "/Login" component ={ Login } />
                <Route exact path = "/Signup" component ={ Signup } />
            </Switch>
        </BrowserRouter>
    );
}

export default App;