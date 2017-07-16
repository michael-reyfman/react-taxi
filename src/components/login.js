/**
 * Created by michael on 15.07.17.
 */
import React, { Component } from 'react';
import '../App.css';
import {FormControl, FormGroup, Col, Button, ControlLabel, Navbar} from 'react-bootstrap';
import Passenger from '../models/passenger';
import Driver from '../models/driver';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        };
        this.usernameFill = this.usernameFill.bind(this);
        this.passwordFill = this.passwordFill.bind(this);
        this.signInPassenger = this.signInPassenger.bind(this);
        this.signInDriver = this.signInDriver.bind(this);
    }
    usernameFill(event) {
        this.setState({username: event.target.value});
    }
    passwordFill(event) {
        this.setState({password: event.target.value});
    }
    signInPassenger() {
        const users = this.props.users;
        let flag = false;
        for(let i = 0; i < users.length; i++)
            flag = flag || (users[i].username === this.state.username && users[i].password === this.state.password && users[i] instanceof Passenger);
        flag ? this.props.returnData(this.state.username, this.state.password) : console.log("Wrong login/password or user not a passenger");
    }
    signInDriver() {
        const users = this.props.users;
        let flag = false;
        for(let i = 0; i < users.length; i++)
            flag = flag || (users[i].username === this.state.username && users[i].password === this.state.password && users[i] instanceof Driver);
        flag ? this.props.returnData(this.state.username, this.state.password) : console.log("Wrong login/password or user not a driver");
    }
    render() {
        return(
            <div className="login-panel">
                <h4 className="form-header">Login</h4>
                <Navbar.Form>
                    <FormGroup controlId="formHorizontalEmail" className="form-element">
                        <Col componentClass={ControlLabel} sm={3}>
                            Username
                        </Col>
                        <Col sm={6}>
                            <FormControl type="text" placeholder="Username" onChange={this.usernameFill}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword" className="form-element">
                        <Col componentClass={ControlLabel} sm={3}>
                            Password
                        </Col>
                        <Col sm={6}>
                            <FormControl type="password" placeholder="Password" onChange={this.passwordFill}/>
                        </Col>
                    </FormGroup>

                    <FormGroup className="form-element">
                        <Col sm={6}>
                            <Button type="submit" className="login-button" onClick={this.signInPassenger}>
                                Sign as passenger
                            </Button>
                        </Col>
                        <Col sm={6}>
                            <Button type="submit" className="login-button" onClick={this.signInDriver}>
                                Sign as driver
                            </Button>
                        </Col>
                    </FormGroup>

                    <p className="small-text">New here? Please complete registration (it's fast and fancy!)</p>
                </Navbar.Form>
            </div>
        );
    }
}

export default Login;