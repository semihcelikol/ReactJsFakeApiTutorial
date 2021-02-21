import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
                <li>
                    <Link to="/"> Home</Link>
                </li>
                <li>
                    <Link to="/todos">Todos</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
            </ul>
        </div>
    )
}
