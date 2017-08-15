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
                <h1>{this.props.user.username}'s profile</h1>
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
            </Switch>
        );
    }
}

export default Main;