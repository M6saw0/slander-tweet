import React from 'react'
import {Link, RouteComponentProps} from 'react-router-dom'
import {Header} from './header'
import "../css/main.css"

interface Props extends RouteComponentProps {}

const  Slander = ({history}:Props) => {
    return (
        <>
            <Header />
            <div className="main-body">
                <h1 className="title">Slander</h1>
                <a onClick={history.goBack}>Back</a>
            </div>
        </>
    )
}

export {Slander}