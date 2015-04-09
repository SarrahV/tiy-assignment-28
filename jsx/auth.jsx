(function(views){

  var TwitterLoggedIn = React.createClass({

    render: function(){
      return (
        <div>
          <div className="logged-in" onClick={signapp.logout.bind(signapp)}>
            <img className="profile-image" src={this.props.img} alt=""/>
            {" "}
            <span>{this.props.name}</span>
            {" "}
            <views.Icon fa="sign-out"/>
          </div>
          <div className="board-nav">
            <MyBoard/>
            <SaveBoard/>
          </div>
        </div>
      )
    }
  }); //end logged in

   var TwitterNotLoggedIn = React.createClass({

    render: function() {
      return (
        <div className="not-logged-in" onClick={signapp.twitterLogin.bind(signapp)}>
          <span>Sign In With</span>
          {" "}
          <views.Icon fa="twitter"/>
          {" "}
          <span>to Save</span>
        </div>
      );
    }

  });// end not logged in

  var TwitterLogIn = React.createBackboneClass({
    getChild: function(){
      if(signapp.isLoggedIn()) {
        var name = this.props.model.get("name");
        var img = this.props.model.get("profile_image_url");
        return <views.TwitterLoggedIn name={name} img={img}/>
      }
      else{
        return <views.TwitterNotLoggedIn/>
      }
    },

    render: function(){
      return (
        <div className="twitter-login">
          <div className="logo">
            <h2>SignApp</h2>
          </div>
          { this.getChild() }
        </div>
      );
    }
  });// end Log in

  var BoardForm = React.createBackboneClass({

    showForm: function() {

    },

    render: function() {
      return(
        <form className="board-save">
           <input placeholder="Name Your Board"/>
           <input type="submit" value="Submit"/>
        </form>
      );
    }

  });// end board form

  var SaveBoard = React.createBackboneClass({

    onClick: function() {

    },

    render: function() {
      return(
        <div>
          <BoardForm/>
          <button className="save" onClick={this.onClick}>Save Current Board</button>
        </div>
      );
    }

  });// end save board

  var MyBoard = React.createBackboneClass({
    render: function() {
      return(
         <button className="myboard">My Boards</button>
      );
    }
  });// end my board

  var Header = React.createBackboneClass({
    render: function() {
      return (
        <div>
            <views.TwitterLogIn model={this.props.model}/>
        </div>
      );
    }
  }); //end header


  views.TwitterLoggedIn    = TwitterLoggedIn;
  views.TwitterNotLoggedIn = TwitterNotLoggedIn;
  views.TwitterLogIn       = TwitterLogIn;
  views.Header             = Header;

})(signapp.views);






