import React from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {Header} from './header'
import "../css/main.css"

interface Props extends RouteComponentProps {}

const  Report = ({history}:Props) => {
    return (
        <>
            <Header />
            <div className="main-body">
                <h1 className="title">Report</h1>
                <a onClick={history.goBack}>Back</a>
            </div>
        </>
    )
}

export {Report}