import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import MastHead from "./components/MastHead";
import IconsGrid from "./components/IconsGrid";
import Showcase from "./components/ShowCase";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <div>
                <Navigation/>
                <Route exact path="/" component={MainScreen}/>
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
            <MastHead/>
            <IconsGrid/>
            <Showcase/>
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
