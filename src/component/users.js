import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import AddUser from './addUser';

export default class Users extends Component {

    constructor(props){
        super(props);

        this.state = {
            userList: [],
            isLoaded: false
        }
    }

    render() {
        let ret;

        if(this.state.isLoaded == true)
        {
            ret = (
                <div className="container">
                    
                    <h1>User List</h1>
                    <AddUser/>
                    <hr></hr>
                    <div className="row">
                        { 
                            this.state.userList.map(item=>{
                                return(
                                <div className="col-sm-6" key={item.id}>
                                    <div className="card" style={{width:25 + 'rem'}} key={item.id}>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Username: {item.username}</h6>
                                            <p className="card-text"><b>Street: </b> {item.address.street}
                                                                    <b> Suite: </b> {item.address.suite}
                                                                    <b> City: </b> {item.address.city}
                                                                    <b> Zipcode: </b> {item.address.zipcode}</p>
                                            <p className="card-text"><b>Phone: </b>{item.phone}</p>
                                            <p className="card-text"><b>Website: </b>{item.website}</p>
                                            
                                            <Link className="card-link"  to={`todos/${item.id}`}>Todos details</Link>
                                            <Link className="card-link"  to={`posts/${item.id}`}>Posts details</Link>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }
        else
        {
            ret = (
                <div className="container">
                    <h1>Error</h1>
                </div>
            )
        }

        return ret;
    }

    componentDidMount = async () => {
        await axios.get("https://jsonplaceholder.typicode.com/users")
        .then(result => {
            this.setState({
                userList: result.data,
                isLoaded: true
            });
            
        }).catch(err => {
            this.setState({
                userList: [],
                isLoaded: false
            });
        });        
    }
}
