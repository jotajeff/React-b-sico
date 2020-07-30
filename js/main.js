/* component  */

var Nav = React.createClass({
    displayName: "Nav",

    render: function () {
        return React.createElement(
            "nav",
            { className: "navbar navbar-expand-lg navbar-dark bg-dark" },
            React.createElement(
                "div",
                { className: "navbar-header" },
                React.createElement(
                    "a",
                    { href: this.props.linkURL, className: "navbar-brand" },
                    this.props.title
                )
            )
        );
    }
});

/*  component Title  */
var Title = React.createClass({
    displayName: "Title",


    render: function () {
        return React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                )
            )
        );
    }
});

var Button = React.createClass({
    displayName: "Button",


    getInitialState: function () {
        return {
            click: false
        };
    },

    toggleClick: function () {
        this.setState({
            click: !this.state.click
        });
    },

    render: function () {

        var btnClass = this.state.click ? "btn btn-primary" : "btn btn-success";
        var title = this.state.click ? this.props.textActive : this.props.title;
        return React.createElement(
            "button",
            { onClick: this.toggleClick, className: btnClass },
            title
        );
    }

});

/* Rendering  */

ReactDOM.render(React.createElement(Nav, { title: "React", linkURL: "index.html" }), document.getElementById('nav'));

ReactDOM.render(React.createElement(Title, { title: "Welcome to React, let's start ? " }), document.getElementById('title'));

ReactDOM.render(React.createElement(Button, { title: "Click Me", textActive: "Hello, guys !" }), document.getElementById('button'));