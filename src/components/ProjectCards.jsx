import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/project-card.css'

const ProjectCards = (props) => {
    const navigate = useNavigate();
    const handleDetails = (id) => {
        navigate(`/projects/${id}`)
    }

    console.log(props.value)
    return (
        <div className='project-container' onClick={() => handleDetails(props.value.id)}>
            <div className='project-img'>
                <img src={props.value.img} alt="" />
            </div>
            <h3>{props.value.title}</h3>
            <p>{props.value.short}</p>
        </div>
    )
}

export default ProjectCards