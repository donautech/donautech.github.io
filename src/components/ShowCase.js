import React from 'react';

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

export default Showcase