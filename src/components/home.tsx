import React from 'react'
import {Link, RouteComponentProps} from 'react-router-dom'
import { Header } from './header'
import "../css/main.css"

interface Props extends RouteComponentProps {}
const Home =  ({match, history, location}:Props) => {
    console.log(match)
    console.log(history)
    console.log(location)
    return (
        <>
            <Header />
            <div className="main-body">
                <h1 className="title">Home</h1>
            </div>
            <p>あなたのツイート</p>
            <p>大丈夫ですか？</p>
        </>
    )
}

export {Home}