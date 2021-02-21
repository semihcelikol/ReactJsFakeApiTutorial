import React from 'react';
import axios from 'axios';

export default class AddUser extends React.Component {
  state = {
    name: "",
    addedUser: "",
    isLoaded: false
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        alert(user.name + " Added to users.");
        this.setState({
          addedUser:user.name,
          isLoaded:true
        });
      }).catch(err=>{
        alert(user.name + " Couldn't added to users.");
        this.setState({isLoaded:false});
      })
  }

  render() {
    let ret;

    if(this.state.isLoaded == true)
    {
      ret = (
          <div className="container">
            <h4>{this.state.addedUser} Added to users</h4>
              <form className="row g-2" onSubmit={this.handleSubmit}>
                <div className="col-auto">
                  <input type="name" className="form-control" id="name" name="name" placeholder="Semih" onChange={this.handleChange}/>
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary" type="submit">Add User</button>
                </div>
                </form>
            </div>
      );
    }
    else{
      ret = (
        <div className="container">
          <form className="row g-2" onSubmit={this.handleSubmit}>
            <div className="col-auto">
              <input type="name" className="form-control" id="name" name="name" placeholder="Semih" onChange={this.handleChange}/>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary" type="submit">Add User</button>
            </div>
            </form>
        </div>
      )
    }
    return ret;
  }
}