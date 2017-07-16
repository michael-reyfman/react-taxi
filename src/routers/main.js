import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from '../components/home';
import RegForm from '../components/regform';


class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/registration' render={(props) => (
                    <RegForm
                        activereg={this.props.activereg}
                        userlist={this.props.userlist}
                        addUser={this.props.addUser}
                        changeForm={this.props.changeForm}
                    />
                )}/>
            </Switch>
        );
    }
}

export default Main;