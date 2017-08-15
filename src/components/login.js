/**
 * Created by michael on 15.07.17.
 */
import React, { Component } from 'react';
import '../App.css';
import {FormControl, FormGroup, Col, Button, ControlLabel, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {USERNAME_FILL_LOGIN, PASSWORD_FILL_LOGIN, LOGIN_PRESS} from '../redux/constants';
import store from '../index';


class Login extends Component {
    constructor() {
        super();
        this.usernameFill = this.usernameFill.bind(this);
        this.passwordFill = this.passwordFill.bind(this);
        this.signIn = this.signIn.bind(this);
    }
    usernameFill(event) {
        store.dispatch({
            type: USERNAME_FILL_LOGIN,
            payload: event.target.value
        });
    }
    passwordFill(event) {
        store.dispatch({
            type: PASSWORD_FILL_LOGIN,
            payload: event.target.value
        });
    }
    signIn() {
        store.dispatch({
            type: LOGIN_PRESS
        });
        console.log(store.getState());
    }
    render() {
        const state_tree = store.getState();
        const wrong_data = (state_tree.loginWindow.wrong !== null && state_tree.loginWindow.wrong === true);
        const valid_data = (state_tree.loginWindow.valid == null || state_tree.loginWindow.valid === true);
        let error_msg;
        if(wrong_data) {
            error_msg = <p className="error-msg">Wrong username or password!</p>
        }
        if(!valid_data) {
            error_msg = <p className="error-msg">Username or password must be at least 6 characters long!</p>
        }
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
                        <Col sm={3} md={3} lg={3} smOffset={9} mdOffset={9} lgOffset={9}>
                            <div id="#wrapper">
                                <Link to="/">
                                    <Button type="submit" className="login-button" onClick={this.signIn}>
                                        Sign in!
                                    </Button>
                                </Link>
                            </div>
                        </Col>
                    </FormGroup>
                    {error_msg}
                    <p className="small-text">New here? Please complete <Link to="/register/passengers">registration</Link> (it's fast and fancy!)</p>
                </Navbar.Form>
            </div>
        );
    }
}

export default Login;