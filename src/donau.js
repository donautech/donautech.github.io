'use strict';

const e = React.createElement;
const c = React.createClass;

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light static-top">
                <div className="container">
                    <a className="navbar-brand" href="#">DonauTech</a>
                    <a className="btn btn-primary" href="mailto:info@donau.tech">Email us</a>
                </div>
            </nav>
        );
    }
}

class MastHead extends React.Component {
    render() {
        return (
            <header className="masthead text-white text-center">
                <div className="overlay"/>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h1 className="mb-5">IOT support and services to the scooter businesses</h1>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

class IconsGrid extends React.Component {
    render() {
        return (
            <section className="features-icons bg-light text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="icon-globe m-auto text-primary"/>
                                </div>
                                <h3>Worldwide support</h3>
                                <p className="lead mb-0">We provide services for countries all around the world</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="icon-clock m-auto text-primary"/>
                                </div>
                                <h3>Fast integration</h3>
                                <p className="lead mb-0">Fastest ready-to-deploy integration for most popular models</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="icon-check m-auto text-primary"/>
                                </div>
                                <h3>Easy to Use</h3>
                                <p className="lead mb-0">We can integrate any scooter with our software</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class Showcase extends React.Component {
    render() {
        return (
            <section className="showcase">
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-6 order-lg-2 text-white showcase-img"
                             style={{backgroundImage: 'url("img/bg-showcase-1.jpg")'}}/>
                        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                            <h2>Digitalize mobility</h2>
                            <p className="lead mb-0">We help businesses digitize scooters and receive the best data
                                insights without
                                hassle</p>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-lg-6 text-white showcase-img"
                             style={{backgroundImage: 'url("img/bg-showcase-2.jpg")'}}/>
                        <div className="col-lg-6 my-auto showcase-text">
                            <h2>Make mobility smart</h2>
                            <p className="lead mb-0">With our software scooters can help people get the best user
                                experience on the
                                road</p>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-lg-6 order-lg-2 text-white showcase-img"
                             style={{backgroundImage: 'url("img/bg-showcase-3.jpg")'}}/>
                        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                            <h2>Easy to Use &amp; Customize</h2>
                            <p className="lead mb-0">We supply best tools for companies that can be configured and
                                customized for
                                receiving required data for analysis</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                            <ul className="list-inline mb-2">
                                <li className="list-inline-item">
                                    <a href="#">About</a>
                                </li>
                                <li className="list-inline-item">⋅</li>
                                <li className="list-inline-item">
                                    <a href="#">Contact</a>
                                </li>
                                <li className="list-inline-item">⋅</li>
                                <li className="list-inline-item">
                                    <a href="#">Terms of Use</a>
                                </li>
                                <li className="list-inline-item">⋅</li>
                                <li className="list-inline-item">
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                            <p className="text-muted small mb-4 mb-lg-0">© DonauTech 2019. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item mr-3">
                                    <a href="https://www.facebook.com/donautech/">
                                        <i className="fab fa-facebook fa-2x fa-fw"/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/donautech/">
                                        <i className="fab fa-instagram fa-2x fa-fw"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return (<div>
            <Navigation/>
            <MastHead/>
            <IconsGrid/>
            <Showcase/>
            <Footer/>
        </div>);
    }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(App), domContainer);