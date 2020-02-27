import React from 'react';
import './App.css';
import {HashRouter as Router, Route} from "react-router-dom";
import Home from "./v2/Home";
import SignIn from "./v2/SignIn";
import SignUp from "./v2/SignUp";
import OurTeam from "./v2/OurTeam";
import Terms from "./v2/Terms";
import Privacy from "./v2/Privacy";
import ForgotPassword from "./v2/ForgotPassword";
import "./v2/i18n"
import ComingSoon from "./v2/ComingSoon";

function App() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/sign-in" component={ComingSoon}/>
                <Route path="/sign-up" component={ComingSoon}/>
                <Route path="/our-team" component={OurTeam}/>
                <Route path="/terms" component={Terms}/>
                <Route path="/privacy" component={Privacy}/>
                <Route path="/forgot-password" component={ComingSoon}/>
            </div>
        </Router>
    );
}

export default App;
