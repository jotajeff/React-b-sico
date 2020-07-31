    var Page = React.createClass({
        render : function (){
            return(
                <myElement>
                    <Nav title="React" linkURL="index.html" />
                    <div className="container">
                        <Title title="Welcome to React, let's start ? " />,
                        <Button title = "Click Me" textActive = "Hello, guys !" />
                    </div>
                </myElement>
            );
        }
    });

    /* Rendering  */
    ReactDOM.render(
        <Page />,
        document.getElementById('page')
    );   

    