var NewProfileContainer = React.createClass({


  getInitialState: function(){
    return {first_name: "", last_name: "", sport: "", team: "", position: "", address: "", city: "", state: "",
      country: "", zip: "", phone: "", gender: "", description: ""};
  },

  newProfileSubmit: function(e){
    e.preventDefault();

    console.log("submitted");
  },

  handleFirstNameChange: function(e){
    this.setState({first_name: e.target.value});
  },

  handleLastNameChange: function(e){
    this.setState({last_name: e.target.value});
  },

  handleSportChange: function(e){
    this.setState({sport: e.target.value});
  },

  handleTeamChange: function(e){
    this.setState({team: e.target.value});
  },

  handlePositionChange: function(e){
    this.setState({position: e.target.value});
  },

  handleAddressChange: function(e){
    this.setState({address: e.target.value});
  },

  handleCityChange: function(e){
    this.setState({city: e.target.value});
  },

  handleStateChange: function(e){
    this.setState({state: e.target.value});
  },

  handleZipChange: function(e){
    this.setState({zip: e.target.value});
  },

  handlePhoneChange: function(e){
    this.setState({phone: e.target.value});
  },

  handleGenderChange: function(e){
    this.setState({gender: e.target.value});
  },

  handleDescriptionChange: function(e){
    this.setState({description: e.target.value});
  },




  renderFirstNameField: function(){


    return(

      <div className='row'>

        <div className='col-sm-4'>

          <div className= 'form-group'>

            <input
              name="profile[first_name]"
              type="string"
              placeholder="First Name"
              value={this.state.first_name}
              onChange={this.handleFirstNameChange}
              className="string form-control"
            />

          </div>

        </div>

      </div>
    );
  },

  renderLastNameField: function(){


    return(
      <div className='row'>

        <div className='col-sm-4'>

          <div className= 'form-group'>

            <textarea
              name="profile[last_name]"
              placeholder="Last Name"
              type="string"
              value={this.state.last_name}
              onChange={this.handleLastNameChange}
              className="text form-control"
            />

          </div>

        </div>

      </div>
    );

  },

  renderSportField: function(){

    return(
      <div className='row'>

        <div className='col-sm-4'>

          <div className='form-group'>

            <input
              name="profile[sport]"
              type="string"
              placeholder="Sport"
              value={this.state.sport}
              onChange={this.handleSportChange}
              className="text form-control"
            />

          </div>

        </div>
      </div>
    );

  },

  renderTeamField: function(){

    return(
      <div className='row'>

        <div className='col-sm-4'>

          <div className='form-group'>

            <input
              name="profile[team]"
              type="string"
              placeholder="Team"
              value={this.state.team}
              onChange={this.handleTeamChange}
              className="text form-control"
            />

          </div>

        </div>
      </div>
    );

  },

  renderPositionField: function(){

    return(
      <div className='row'>

        <div className='col-sm-4'>

          <div className='form-group'>

            <input
              name="profile[position]"
              type="string"
              placeholder="Position"
              value={this.state.position}
              onChange={this.handlePositionChange}
              className="text form-control"
            />

          </div>

        </div>
      </div>
    );

  },

  renderAddressField: function(){

    return(
      <div className='row'>

        <div className='col-sm-4'>

          <div className='form-group'>

            <input
              name="profile[address]"
              type="string"
              placeholder="Address"
              value={this.state.address}
              onChange={this.handleAddressChange}
              className="text form-control"
            />

          </div>

        </div>
      </div>
    );

  },

  renderCityField: function(){

    return(
      <div className='row'>

        <div className='col-sm-4'>

          <div className='form-group'>

            <input
              name="profile[city]"
              type="string"
              placeholder="City"
              value={this.state.city}
              onChange={this.handleCityChange}
              className="text form-control"
            />

          </div>

        </div>
      </div>
    );

  },

  renderStateField: function(){

    return(
      <div className='row'>

        <div className='col-sm-4'>

          <div className='form-group'>

            <input
              name="profile[state]"
              type="string"
              placeholder="State"
              value={this.state.state}
              onChange={this.handleStateChange}
              className="text form-control"
            />

          </div>

        </div>
      </div>
    );

  },

  renderCountryField: function(){

    return(
      <div className='row'>

        <div className='col-sm-4'>

          <div className='form-group'>

            <input
              name="profile[country]"
              type="string"
              placeholder="Country"
              value={this.state.country}
              onChange={this.handleCountryChange}
              className="text form-control"
            />

          </div>

        </div>
      </div>
    );

  },

  renderZipField: function(){

    return(
      <div className='row'>

        <div className='col-sm-4'>

          <div className='form-group'>

            <input
              name="profile[zip]"
              type="string"
              placeholder="Zip Code"
              value={this.state.zip}
              onChange={this.handleZipChange}
              className="text form-control"
            />

          </div>

        </div>
      </div>
    );

  },

  renderPhoneField: function(){

    return(
      <div className='row'>

        <div className='col-sm-4'>

          <div className='form-group'>

            <input
              name="profile[phone]"
              type="string"
              placeholder="Phone Number"
              value={this.state.phone}
              onChange={this.handlePhoneChange}
              className="text form-control"
            />

          </div>

        </div>
      </div>
    );

  },

  renderGenderField: function(){

    return(
      <div className='row'>

        <div className='col-sm-4'>

          <div className='form-group'>

            <input
              name="profile[gender]"
              type="string"
              placeholder="Gender"
              value={this.state.gender}
              onChange={this.handleGenderChange}
              className="text form-control"
            />

          </div>

        </div>
      </div>
    );

  },

  renderDescriptionField: function(){

    return(
      <div className='row'>

        <div className='col-sm-4'>

          <div className='form-group'>

            <input
              name="profile[description]"
              type="string"
              placeholder="Player Description"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              className="text form-control"
            />

          </div>

        </div>
      </div>
    );

  },



  render: function() {

    return(
      <div>
        <h4 style={{marginTop: "50px"}}> Create New Profile </h4>

        <form style={{marginTop: "30px"}} onSubmit={this.newProfileSubmit}>

          <div className='form-inputs'/>


            {this.renderFirstNameField()}

            {this.renderLastNameField()}

            {this.renderSportField()}

            {this.renderTeamField()}

            {this.renderPositionField()}

            {this.renderAddressField()}

            {this.renderCityField()}

            {this.renderStateField()}

            {this.renderCountryField()}

            {this.renderZipField()}

            {this.renderPhoneField()}

            {this.renderGenderField()}

            {this.renderDescriptionField()}



            <div className='row'>
              <div className='col-sm-4'>
                <input type="submit" value="Save" className='btn btn-primary' />
              </div>
            </div>

        </form>

      </div>

    );
  }
});

