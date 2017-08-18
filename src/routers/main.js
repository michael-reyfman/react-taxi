import { Switch, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Home from '../components/home';
import PassRegForm from '../components/passregform';
import DriverRegForm from '../components/driverregform';
import Profile from '../components/profile';
import store from '../index';


class AuthenticatedProfile extends Component {
    render() {
        const loggedIn = store.getState().activeUserID >= 0;
        return loggedIn ? <Profile/> : <Home/>;
    }
}


class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/register/passengers' component={PassRegForm}/>
                <Route exact path='/register/drivers' component={DriverRegForm}/>
                <Route exact path='/user/:id' component={AuthenticatedProfile}/>
            </Switch>
        );
    }
}

export default Main;