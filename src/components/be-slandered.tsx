import React from 'react'
import {Link, RouteComponentProps} from 'react-router-dom'
import {Header} from './header'
import "../css/main.css"

interface Props extends RouteComponentProps {}

const  BeSlandered = ({history}:Props) => {
    return (
        <>
            <Header />
            <div className="main-body">
                <h1 className="title">BeSlandered</h1>
                <a onClick={history.goBack}>Back</a>
            </div>
        </>
    )
}

export {BeSlandered}