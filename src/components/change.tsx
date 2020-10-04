import React from 'react'
import {Link, RouteComponentProps} from 'react-router-dom'
import {Header} from './header'
import "../css/main.css"

interface Props extends RouteComponentProps {}

const  Change = ({history}:Props) => {
    return (
        <>
            <Header />
            <div className="main-body">
                <h1 className="title">Change</h1>
                <a onClick={history.goBack}>Back</a>
            </div>
        </>
    )
}

export {Change}