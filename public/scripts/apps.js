"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var juego1 = {
    name: "Minecraft",
    img: "../../src/img/1.jpg",
    description: "Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."
};

var juego2 = {
    name: "Valorant",
    img: "../../src/img/2.jpg",
    description: "Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."
};

var juego3 = {
    name: "God of War",
    img: "../../src/img/3.jpg",
    description: "Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."
};

var juego4 = {
    name: "Assasins Creed",
    img: "../../src/img/4.jpg",
    description: "Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."
};

var juego5 = {
    name: "Rocket League",
    img: "../../src/img/5.jpg",
    description: "Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."
};

var juego6 = {
    name: "Sims",
    img: "../../src/img/6.jpg",
    description: "Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."
};
var juego7 = {
    name: "Mario Kart",
    img: "../../src/img/7.jpg",
    description: "Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."
};

var juego8 = {
    name: "Resistence 3",
    img: "../../src/img/8.jpg",
    description: "Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."
};

var juego9 = {
    name: "Destiny",
    img: "../../src/img/9.jpg",
    description: "Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."
};

var Game = function (_React$Component) {
    _inherits(Game, _React$Component);

    function Game() {
        _classCallCheck(this, Game);

        return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
    }

    _createClass(Game, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "gameBox" },
                React.createElement(
                    "div",
                    { "class": "col" },
                    React.createElement(
                        "div",
                        { id: "col", "class": "card shadow-sm" },
                        React.createElement("img", { "class": "bd-placeholder-img card-img-top", width: "100%", height: "225", preserveAspectRatio: "xMidYMid slice", src: this.props.img }),
                        React.createElement(
                            "div",
                            { "class": "card-body" },
                            React.createElement(
                                "h2",
                                { "class": "gameTitle" },
                                this.props.name
                            ),
                            React.createElement(
                                "p",
                                { "class": "card-text" },
                                this.props.description
                            ),
                            React.createElement(
                                "div",
                                { "class": "d-flex justify-content-between align-items-center" },
                                React.createElement("div", { "class": "btn-group" })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Game;
}(React.Component);

var ReactElements = function (_React$Component2) {
    _inherits(ReactElements, _React$Component2);

    function ReactElements() {
        _classCallCheck(this, ReactElements);

        return _possibleConstructorReturn(this, (ReactElements.__proto__ || Object.getPrototypeOf(ReactElements)).apply(this, arguments));
    }

    _createClass(ReactElements, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Game, { name: juego1.name, img: juego1.img, description: juego1.description }),
                React.createElement(Game, { name: juego2.name, img: juego2.img, description: juego2.description }),
                React.createElement(Game, { name: juego3.name, img: juego3.img, description: juego3.description }),
                React.createElement(Game, { name: juego4.name, img: juego4.img, description: juego4.description }),
                React.createElement(Game, { name: juego5.name, img: juego5.img, description: juego5.description }),
                React.createElement(Game, { name: juego6.name, img: juego6.img, description: juego6.description }),
                React.createElement(Game, { name: juego7.name, img: juego7.img, description: juego7.description }),
                React.createElement(Game, { name: juego8.name, img: juego8.img, description: juego8.description }),
                React.createElement(Game, { name: juego9.name, img: juego9.img, description: juego9.description })
            );
        }
    }]);

    return ReactElements;
}(React.Component);

var appRoot = document.getElementById('react');

ReactDOM.render(React.createElement(ReactElements, null), appRoot);
