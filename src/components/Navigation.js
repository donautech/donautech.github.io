import React from 'react';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light static-top">
                <div className="container">
                    <a className="navbar-brand" href="#">DonauTech</a>
                    <div><a href="/about" style={{marginRight:10}}>About us</a><a className="btn btn-primary" href="mailto:info@donau.tech">Contact</a></div>
                </div>
            </nav>
        );
    }
}
export default Navigation