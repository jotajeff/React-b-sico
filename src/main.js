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
        
            <div className="row">
                <h1>{ this.props.title }</h1>
            </div>
        

    );
    }
    });


    var Button = React.createClass({

        getInitialState : function(){
            return {
                click:false
            };
        },

        toggleClick : function(){
            this.setState({
                click : !this.state.click
            })
        },

        render : function (){
        
        var btnClass = this.state.click ? "btn btn-primary" : "btn btn-success"; 
        var title = this.state.click ? this.props.textActive : this.props.title; 
        return (
        
        <button onClick={ this.toggleClick } className={ btnClass }>{ title }</button>
        
        );
        }
       
       });
       

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

    /*
    ReactDOM.render(
        <Nav title="React" linkURL="index.html" />,
        document.getElementById('nav')
    );    

    ReactDOM.render(
    <Title title="Welcome to React, let's start ? " />,
    document.getElementById('title')
);

ReactDOM.render(
    <Button title = "Click Me" textActive = "Hello, guys !" />,
    document.getElementById('button')
);
*/