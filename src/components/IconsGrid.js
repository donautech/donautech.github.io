import React from 'react';
import Footer from "./Footer";

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
export default IconsGrid
