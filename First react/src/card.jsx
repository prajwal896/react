import React from 'react'
import './card.css'

const Card = (props) => {
return (
    <div className="card">
    <ul>
        <li>{props.uid}</li>
        <li>{props.id}</li>
        <li>{props.title}</li>
        <li>{props.body}</li>
    </ul>
    </div>
)
}

export default Card