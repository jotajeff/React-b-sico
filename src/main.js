/* component  */

var Nav = React.createClass({
    render:function (){
        return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
	 <div className="navbar-header">
	 
	 <a href={this.props.linkURL} className="navbar-brand">
	 {this.props.title}
	 </a>
	
	</div>
	
	</nav>
        );
    }
});


/*  component Title  */
var Title = React.createClass({

    render:function (){
    return(
        <div className="container">
            <div className="row">
                <h1>{ this.props.title }</h1>
            </div>
        </div>

    );
    }
    });

    /* Rendering  */

    ReactDOM.render(
        <Nav title="React" linkURL="index.html" />,
        document.getElementById('nav')
    );    

ReactDOM.render(
    <Title title="Welcome to React, let's start ? " />,
    document.getElementById('title')
);