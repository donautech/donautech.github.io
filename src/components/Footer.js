import React from 'react';

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
export default Footer