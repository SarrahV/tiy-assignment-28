(function(views){

  // textfield 
  var TextField = React.createBackboneClass({

    onChange: function (event) {
      this.props.model.set("sentence", event.target.value);
    }, 

    render: function(){
      var name = this.props.name;
      var htmlID = "react-textfield-" + name + "-" + Math.random();
      var label = this.props.label || name;
      var type = this.props.type || "text";
      return (
        <div className="textfield">
          <div>
            <label htmlFor={htmlID}>{label}</label>
          </div>
          <div>
            <input type={type} name={name} id={htmlID} placeholder="Enter Text" onChange={this.onChange}/>
          </div>
        </div>
      );
    }

  });// end textfield


  // tracks form
  var TracksInput = React.createBackboneClass({

    //each textfield represents one model
    showTracks: function(model, index){
      return (
        <TextField model={model} key={index} />
      )
    },

    render: function(){
      return (
        <form>
          <div className="size">
            <BoardSize/>
            <LetterSize/>
          </div>
          {this.props.collection.map(this.showTracks)}
          <div className="add-remove">
            <span className="add"><a href="#">+</a></span>
            <span className="delete"><a href="#">-</a></span>
          </div>
          <SelectStyle/>
        </form>
      );
    }
  });// end trackinput

  //style selection
  var SelectStyle = React.createBackboneClass({

    render: function(){
      return (
        <div className="style">
          <div className="standard">
            <a href="#"><span>C</span></a>
            <h3>Standard</h3>
          </div>
          <div className="condensed">
            <a href="#"><span>C</span></a>
            <h3>Condensed</h3>
          </div>
          <div className="modern">
            <a href="#"><span>C</span></a>
            <h3>Modern</h3>
          </div>
        </div>
      );
    }

  });

  //Board width and height selection
  var BoardSize = React.createBackboneClass({

    render: function(){
      return (
        <div className="board-width">
          <select>
            <option value="sixty">60 inch</option>
            <option value="seventy-two">72 inch</option>
            <option value="eighty-eight">88 inch</option>
            <option value="ninety-six">96 inch</option>
            <option value="one-twenty">120 inch</option>
          </select>
        </div>
      )
    }
  });

  //Letter height selection
  var LetterSize = React.createBackboneClass({

    render: function(){
      return (
        <div className="letter-height">
          <select>
            <option value="six">5 inch</option>
            <option value="seven">7 inch</option>
            <option value="ten">10 inch</option>
          </select>
        </div>
      )
    }
  });

  //Count of characters used
  var CharacterCount = React.createBackboneClass({

    render: function(){

    }

  });


  views.TextField  = TextField;
  views.TracksInput = TracksInput;

})(signapp.views);


