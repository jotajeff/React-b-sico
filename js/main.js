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

/* Rendering  */

ReactDOM.render(React.createElement(Nav, { title: "React", linkURL: "index.html" }), document.getElementById('nav'));

ReactDOM.render(React.createElement(Title, { title: "Welcome to React, let's start ? " }), document.getElementById('title'));