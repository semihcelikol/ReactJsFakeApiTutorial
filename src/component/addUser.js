import React from 'react';
import axios from 'axios';

export default class AddUser extends React.Component {
  state = {
    name: "",
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
        console.log(res.data);
        alert(user.name + " added to users.");
      })
  }

  render() {
    return (
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
}