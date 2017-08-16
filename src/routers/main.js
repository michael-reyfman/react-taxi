import { Switch, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Home from '../components/home';
import PassRegForm from '../components/passregform';
import DriverRegForm from '../components/driverregform';


class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>User's profile</h1>
            </div>
        )
    }
}


class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/register/passengers' component={PassRegForm}/>
                <Route exact path='/register/drivers' component={DriverRegForm}/>
                <Route exact path='/user/:id' component={Profile}/>
            </Switch>
        );
    }
}

export default Main;