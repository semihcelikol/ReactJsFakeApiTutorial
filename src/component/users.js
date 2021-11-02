import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import AddUser from './addUser';

const Users = (props) => {

    const [userList, setUserlist] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const getData = () => {

        fetch("https://jsonplaceholder.typicode.com/users",{
            method:"GET"
        })
        .then(response => response.json())
        .then(data => {
            setUserlist(data);
            setIsLoaded(true);
        })
        .catch(error => alert(error));
    }

    useEffect(() => {
        getData()
    },[])

    return (
        <div className="container">
        <h1>User List</h1>
        <AddUser/>
        <hr></hr>
            <div className="row">
                { 
                    userList.map(item=>{
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
export default Users