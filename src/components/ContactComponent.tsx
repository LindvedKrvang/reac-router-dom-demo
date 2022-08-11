import React, { Component, ComponentClass } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavigateFunction } from 'react-router/lib/hooks'

export const  withNavigation = (Component : ComponentClass<NavigateProps>) => {
    return (props: any) => <Component {...props} navigate={useNavigate()} />;
}

interface NavigateProps {
    navigate: (to: string) => NavigateFunction
}

class Contact extends React.Component<NavigateProps> {

    constructor(props: NavigateProps) {
        super(props)
    }

    navigateHome() {
        this.props.navigate('/')
    }

    test() {
        console.log('Hello World')
    }


    render() {
        return (
            <>
                <h1>Contact</h1>
                <button onClick={() => this.navigateHome()}>Home</button>
            </>
        )
    }
}
export default withNavigation(Contact)



