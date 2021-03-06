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
       