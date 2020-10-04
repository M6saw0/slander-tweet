import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import {Home} from './components/home'
import {Diagnosis} from './components/diagnosis'
import {Change} from './components/change'
import {Slander} from './components/slander'
import {BeSlandered} from './components/be-slandered'
import {Report} from './components/report'
import {Ranking} from './components/ranking'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/diagnosis" component={Diagnosis} />
                <Route path="/change" component={Change} />
                <Route path="/slander" component={Slander} />
                <Route path="/be-slandered" component={BeSlandered} />
                <Route path="/report" component={Report} />
                <Route path="/ranking" component={Ranking} />
                {/* Not Found */}
                <Route component={() => <Redirect to="/"/>} />
            </Switch>
        </BrowserRouter>
    )
}

export {Router}