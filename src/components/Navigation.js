import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light static-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">DonauTech</Link>
                    <div>
                        {/*<Link  style={{marginRight:10}}>About us</Link>*/}
                        {/*<Link  style={{marginRight:10}}>Contacts</Link>*/}
                        <a className="btn btn-primary"
                           href="mailto:keith@siilats.com?subject=I want free AI consultancy&body=Hello DonauTech!%0d%0dWe would like to receive free AI consultancy regarding our company/product!%0d%0d Please contact us by any of the contacts below:"
                           style={{marginRight:10}}>Free AI consultancy</a>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navigation
