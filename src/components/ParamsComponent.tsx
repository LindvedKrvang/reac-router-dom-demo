import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const ParamsComponent = () => {
    const navigate = useNavigate()
    const { parameter } = useParams()

    return (
        <>
            <h1>This is the parameter: {parameter}</h1>
            <button onClick={() => navigate('/')}>Home</button>
        </>
    )
}

export default ParamsComponent
