import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';
import '../styles/project-card.css'

const ProjectCards = (props) => {

    /*===== Handle Navigate ke Project yang Dipilih =====*/
    const navigate = useNavigate();
    const handleDetails = (id) => {
        navigate(`/projects/${id}`)
    }

    // Display Data dari Props
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

ProjectCards.propTypes = {
    value: PropTypes.exact({
        id: PropTypes.number,
        img: PropTypes.string,
        long: PropTypes.string,
        short: PropTypes.string,
        title: PropTypes.string
    }).isRequired
}

export default ProjectCards