import React, { useState, useEffect } from 'react'

const Todos = (props) => {

    const [todoList, setTodoList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const getData = async () => {
        
        await fetch("https://jsonplaceholder.typicode.com/todos",{
            method:"GET"
        })
        .then(response => response.json())
        .then(data => {
            setTodoList(data);
            setIsLoaded(true);
        })
        .catch(error => alert(error));
    }

    useEffect(() => {
        getData();
    }, [])

    return (<div className="container">
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
                                isLoaded &&
                                
                                todoList.map(item => {
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

export default Todos