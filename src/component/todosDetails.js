import React, { Component } from 'react';
import axios from "axios";

export default class TodosDetails extends Component {

    constructor(props){
        super(props);

        this.state = {
            todoList: [],
            isLoaded: false
        }
    }

    render() {
        let ret;

        if(this.state.isLoaded == true)
        {
            ret = (
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">User Id</th>
                                <th scope="col">Title</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.todoList.map(item => {
                                        return (
                                            <tr key={item.id}>
                                                <th scope="row">{item.id}</th>
                                                <td>{item.userId}</td>
                                                <td>{item.title}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                    </table>
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

        let userId = this.props.match.params.id;

        await axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(result => {
            this.setState({
                todoList: result.data.filter(x=>x.userId == userId),
                isLoaded: true
            });
        })
        .catch(err => {
            this.setState({
                todoList:[],
                isLoaded:false
            })
        });
    }
}
