'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;
var c = React.createClass;

var Navigation = function (_React$Component) {
    _inherits(Navigation, _React$Component);

    function Navigation() {
        _classCallCheck(this, Navigation);

        return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
    }

    _createClass(Navigation, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "nav",
                { className: "navbar navbar-light bg-light static-top" },
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "a",
                        { className: "navbar-brand", href: "#" },
                        "DonauTech"
                    ),
                    React.createElement(
                        "a",
                        { className: "btn btn-primary", href: "mailto:info@donau.tech" },
                        "Email us"
                    )
                )
            );
        }
    }]);

    return Navigation;
}(React.Component);

var MastHead = function (_React$Component2) {
    _inherits(MastHead, _React$Component2);

    function MastHead() {
        _classCallCheck(this, MastHead);

        return _possibleConstructorReturn(this, (MastHead.__proto__ || Object.getPrototypeOf(MastHead)).apply(this, arguments));
    }

    _createClass(MastHead, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "header",
                { className: "masthead text-white text-center" },
                React.createElement("div", { className: "overlay" }),
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-xl-9 mx-auto" },
                            React.createElement(
                                "h1",
                                { className: "mb-5" },
                                "IOT support and services to the scooter businesses"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return MastHead;
}(React.Component);

var IconsGrid = function (_React$Component3) {
    _inherits(IconsGrid, _React$Component3);

    function IconsGrid() {
        _classCallCheck(this, IconsGrid);

        return _possibleConstructorReturn(this, (IconsGrid.__proto__ || Object.getPrototypeOf(IconsGrid)).apply(this, arguments));
    }

    _createClass(IconsGrid, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "section",
                { className: "features-icons bg-light text-center" },
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-lg-4" },
                            React.createElement(
                                "div",
                                { className: "features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3" },
                                React.createElement(
                                    "div",
                                    { className: "features-icons-icon d-flex" },
                                    React.createElement("i", { className: "icon-globe m-auto text-primary" })
                                ),
                                React.createElement(
                                    "h3",
                                    null,
                                    "Worldwide support"
                                ),
                                React.createElement(
                                    "p",
                                    { className: "lead mb-0" },
                                    "We provide services for countries all around the world"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-lg-4" },
                            React.createElement(
                                "div",
                                { className: "features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3" },
                                React.createElement(
                                    "div",
                                    { className: "features-icons-icon d-flex" },
                                    React.createElement("i", { className: "icon-clock m-auto text-primary" })
                                ),
                                React.createElement(
                                    "h3",
                                    null,
                                    "Fast integration"
                                ),
                                React.createElement(
                                    "p",
                                    { className: "lead mb-0" },
                                    "Fastest ready-to-deploy integration for most popular models"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-lg-4" },
                            React.createElement(
                                "div",
                                { className: "features-icons-item mx-auto mb-0 mb-lg-3" },
                                React.createElement(
                                    "div",
                                    { className: "features-icons-icon d-flex" },
                                    React.createElement("i", { className: "icon-check m-auto text-primary" })
                                ),
                                React.createElement(
                                    "h3",
                                    null,
                                    "Easy to Use"
                                ),
                                React.createElement(
                                    "p",
                                    { className: "lead mb-0" },
                                    "We can integrate any scooter with our software"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return IconsGrid;
}(React.Component);

var Showcase = function (_React$Component4) {
    _inherits(Showcase, _React$Component4);

    function Showcase() {
        _classCallCheck(this, Showcase);

        return _possibleConstructorReturn(this, (Showcase.__proto__ || Object.getPrototypeOf(Showcase)).apply(this, arguments));
    }

    _createClass(Showcase, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "section",
                { className: "showcase" },
                React.createElement(
                    "div",
                    { className: "container-fluid p-0" },
                    React.createElement(
                        "div",
                        { className: "row no-gutters" },
                        React.createElement("div", { className: "col-lg-6 order-lg-2 text-white showcase-img",
                            style: { backgroundImage: 'url("img/bg-showcase-1.jpg")' } }),
                        React.createElement(
                            "div",
                            { className: "col-lg-6 order-lg-1 my-auto showcase-text" },
                            React.createElement(
                                "h2",
                                null,
                                "Digitalize mobility"
                            ),
                            React.createElement(
                                "p",
                                { className: "lead mb-0" },
                                "We help businesses digitize scooters and receive the best data insights without hassle"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row no-gutters" },
                        React.createElement("div", { className: "col-lg-6 text-white showcase-img",
                            style: { backgroundImage: 'url("img/bg-showcase-2.jpg")' } }),
                        React.createElement(
                            "div",
                            { className: "col-lg-6 my-auto showcase-text" },
                            React.createElement(
                                "h2",
                                null,
                                "Make mobility smart"
                            ),
                            React.createElement(
                                "p",
                                { className: "lead mb-0" },
                                "With our software scooters can help people get the best user experience on the road"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row no-gutters" },
                        React.createElement("div", { className: "col-lg-6 order-lg-2 text-white showcase-img",
                            style: { backgroundImage: 'url("img/bg-showcase-3.jpg")' } }),
                        React.createElement(
                            "div",
                            { className: "col-lg-6 order-lg-1 my-auto showcase-text" },
                            React.createElement(
                                "h2",
                                null,
                                "Easy to Use & Customize"
                            ),
                            React.createElement(
                                "p",
                                { className: "lead mb-0" },
                                "We supply best tools for companies that can be configured and customized for receiving required data for analysis"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Showcase;
}(React.Component);

var Footer = function (_React$Component5) {
    _inherits(Footer, _React$Component5);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "footer",
                { className: "footer bg-light" },
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-lg-6 h-100 text-center text-lg-left my-auto" },
                            React.createElement(
                                "ul",
                                { className: "list-inline mb-2" },
                                React.createElement(
                                    "li",
                                    { className: "list-inline-item" },
                                    React.createElement(
                                        "a",
                                        { href: "#" },
                                        "About"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    { className: "list-inline-item" },
                                    "\u22C5"
                                ),
                                React.createElement(
                                    "li",
                                    { className: "list-inline-item" },
                                    React.createElement(
                                        "a",
                                        { href: "#" },
                                        "Contact"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    { className: "list-inline-item" },
                                    "\u22C5"
                                ),
                                React.createElement(
                                    "li",
                                    { className: "list-inline-item" },
                                    React.createElement(
                                        "a",
                                        { href: "#" },
                                        "Terms of Use"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    { className: "list-inline-item" },
                                    "\u22C5"
                                ),
                                React.createElement(
                                    "li",
                                    { className: "list-inline-item" },
                                    React.createElement(
                                        "a",
                                        { href: "#" },
                                        "Privacy Policy"
                                    )
                                )
                            ),
                            React.createElement(
                                "p",
                                { className: "text-muted small mb-4 mb-lg-0" },
                                "\xA9 DonauTech 2019. All Rights Reserved."
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-lg-6 h-100 text-center text-lg-right my-auto" },
                            React.createElement(
                                "ul",
                                { className: "list-inline mb-0" },
                                React.createElement(
                                    "li",
                                    { className: "list-inline-item mr-3" },
                                    React.createElement(
                                        "a",
                                        { href: "https://www.facebook.com/donautech/" },
                                        React.createElement("i", { className: "fab fa-facebook fa-2x fa-fw" })
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    { className: "list-inline-item" },
                                    React.createElement(
                                        "a",
                                        { href: "https://www.instagram.com/donautech/" },
                                        React.createElement("i", { className: "fab fa-instagram fa-2x fa-fw" })
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(React.Component);

var App = function (_React$Component6) {
    _inherits(App, _React$Component6);

    function App(props) {
        _classCallCheck(this, App);

        var _this6 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this6.state = { liked: false };
        return _this6;
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            if (this.state.liked) {
                return 'You liked this.';
            }

            return React.createElement(
                "div",
                null,
                React.createElement(Navigation, null),
                React.createElement(MastHead, null),
                React.createElement(IconsGrid, null),
                React.createElement(Showcase, null),
                React.createElement(Footer, null)
            );
        }
    }]);

    return App;
}(React.Component);

var domContainer = document.querySelector('#root');
ReactDOM.render(e(App), domContainer);