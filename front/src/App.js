import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, Auth } from './Auth';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component = { Auth } />
                <Route exact path = "/Login" component ={ Login } />
            </Switch>
        </BrowserRouter>
    );
}

export default App;