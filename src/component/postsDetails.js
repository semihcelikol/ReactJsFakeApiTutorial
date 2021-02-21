import React, { Component } from 'react'
import axios from "axios";

export default class PostsDetails extends Component {

    constructor(props){
        super(props);

        this.state = {
            postList: [],
            isLoaded: false
        }
    }

    render() {
        let ret;

        if (this.state.isLoaded == true) {
            ret = (
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

        await axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(x=> {
            const ret = x.data.filter(x=>x.userId == userId);
            
            this.setState({
                postList: ret,
                isLoaded: true
            });
        }).catch(err=>{
            this.setState({
                postList: [],
                isLoaded: false
            });
        });
    }
}
