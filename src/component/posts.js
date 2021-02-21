import React, { Component } from 'react'
import axios from "axios";

export default class Posts extends Component {

    constructor(props){
        super(props);

        this.state = {
            postList: [],
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
                            <th scope="col">Body</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.postList.map(item => {
                                    return (
                                        <tr key={item.id}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.userId}</td>
                                            <td>{item.title}</td>
                                            <td>{item.body}</td>
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

        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

        this.setState({
            postList: response.data,
            isLoaded: true
        });
    }
}
