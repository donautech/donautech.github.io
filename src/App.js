import React from 'react';
import './App.css';
import {HashRouter as Router, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import MastHead from "./components/MastHead";
import IconsGrid from "./components/IconsGrid";
import Showcase from "./components/ShowCase";
import Footer from "./components/Footer";
import AiWeekly from "./components/AiWeekly";

function App() {
    return (
        <Router>
            <div>
                <Navigation/>
                <Route exact path="/" component={MainScreen}/>
                <Route path="/aiweekly" component={WeeklyAiScreen}/>
                {/*<Route path="/about" component={AboutScreen}/>*/}
                {/*<Route path="/contacts" component={ContactsScreen}/>*/}
                <Footer/>
            </div>
        </Router>
    );
}

function MainScreen() {
    return (
        <div>
            <MastHead title="IOT support and services to the scooter businesses"/>
            <IconsGrid/>
            <Showcase/>
        </div>
    )
}

function WeeklyAiScreen() {
    return (
        <div>
            <MastHead title="AI Weekly newsletter" fieldEnabled={true}/>
            <AiWeekly/>
        </div>
    )
}

function AboutScreen() {
    return (
        <div>
        </div>
    )

}

function ContactsScreen() {
    return (
        <div>
        </div>
    )

}

export default App;
