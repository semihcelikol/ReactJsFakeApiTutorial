import React, { Component } from 'react'
import axios from "axios";

export default class Todos extends Component {

    constructor(props){
        super(props);

        this.state = {
            todoList: [],
            isLoaded: false
        }
    }

    render() {
        return (
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

    componentDidMount = async () => {

        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");

        this.setState({
            todoList: response.data,
            isLoaded: true
        });
    }
}
