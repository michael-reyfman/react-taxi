/**
 * Created by michael on 15.07.17.
 */
import React, { Component } from 'react';
import '../App.css';
import {FormControl, FormGroup, Col, Button, ControlLabel, Navbar} from 'react-bootstrap';
import Passenger from '../models/passenger';
import Driver from '../models/driver';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            matching: true,
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
        if(flag) {
            this.props.returnData(this.state.username, this.state.password);
            this.setState({matching: true});
        } else {
            this.setState({matching: false});
        }
    }
    signInDriver() {
        const users = this.props.users;
        let flag = false;
        for(let i = 0; i < users.length; i++)
            flag = flag || (users[i].username === this.state.username && users[i].password === this.state.password && users[i] instanceof Driver);
        if(flag) {
            this.props.returnData(this.state.username, this.state.password);
            this.setState({matching: true});
        } else {
            this.setState({matching: false});
        }
    }
    render() {
        const error = this.state.matching ? null : <p className="small-text error-msg">Error! Wrong username or password!</p>;
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
                                <Link to="/">Sign as passenger</Link>
                            </Button>
                        </Col>
                        <Col sm={6}>
                            <Button type="submit" className="login-button" onClick={this.signInDriver}>
                                <Link to="/">Sign as driver</Link>
                            </Button>
                        </Col>
                    </FormGroup>
                    {error}
                    <p className="small-text">New here? Please complete <Link to={{pathname: '/registration'}}>registration</Link> (it's fast and fancy!)</p>
                </Navbar.Form>
            </div>
        );
    }
}

export default Login;