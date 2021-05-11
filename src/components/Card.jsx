import React from 'react'
import '../public/css/Card.css'

const Card = (props)=>{
    return(
        <div className="card">
            <div className="card-title">
                <div className="title"><h1 >{props.name}</h1></div>
                <img className="img" src={`${props.imageURL}`} alt={`Card picture of ${props.name}`} />
            </div>
            <div className="card-body">
                <p className="phone">{props.phone}</p>
                <p className="email">{props.email}</p>
            </div>
        </div>
    )
}

export default Card;