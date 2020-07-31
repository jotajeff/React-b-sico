var Page = React.createClass({
    displayName: "Page",

    render: function () {
        return React.createElement(
            "myElement",
            null,
            React.createElement(Nav, { title: "React", linkURL: "index.html" }),
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(Title, { title: "Welcome to React, let's start ? " }),
                ",",
                React.createElement(Button, { title: "Click Me", textActive: "Hello, guys !" })
            )
        );
    }
});

/* Rendering  */
ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));