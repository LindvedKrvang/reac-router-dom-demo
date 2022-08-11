import React  from 'react'
import { useNavigate } from 'react-router-dom'

interface tmp {
    title: string
}

export const About: React.FC<tmp> = (title: tmp) => {

    const navigate = useNavigate()

    return (
        <>
            <h1>{title.title}</h1>
            <button onClick={() => navigate('/')}>Home</button>
        </>
    )
}
export default About
