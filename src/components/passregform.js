/**
 * Created by michael on 16.07.17.
 */
import React, { Component } from 'react';
import '../App.css';
import store from '../index';
import {USERNAME_FILL_PASSENGER, PASSWORD_FILL_PASSENGER, NAME_FILL_PASSENGER, PHONE_FILL_PASSENGER, PASSENGER, ADD_USER} from '../redux/constants';
import {Form, FormControl, FormGroup, Col, Button, ControlLabel} from 'react-bootstrap';
import MaskedFormControl from 'react-bootstrap-maskedinput';
import {Link} from 'react-router-dom';


export default class PassRegForm extends Component {
    constructor() {
        super();
        this.usernameFill = this.usernameFill.bind(this);
        this.passwordFill = this.passwordFill.bind(this);
        this.nameFill     = this.nameFill.bind(this);
        this.phoneFill    = this.phoneFill.bind(this);
        this.extractUser  = this.extractUser.bind(this);
    }
    usernameFill(event) {
        store.dispatch({type: USERNAME_FILL_PASSENGER, payload: event.target.value});
    }
    passwordFill(event) {
        store.dispatch({type: PASSWORD_FILL_PASSENGER, payload: event.target.value});
    }
    nameFill(event) {
        store.dispatch({type: NAME_FILL_PASSENGER, payload: event.target.value});
    }
    phoneFill(event) {
        store.dispatch({type: PHONE_FILL_PASSENGER, payload: event.target.value});
    }
    extractUser(event) {
        const state =store.getState();
        store.dispatch({
            type: ADD_USER,
            usertype: PASSENGER,
            username: state.username,
            password: state.password,
            name: state.name,
            phone: state.phone,
        });
    }
    render() {
        return(
            <div>
                <h2 className="form-header">Registration for passengers | <Link to="/register/drivers">drivers</Link></h2>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalUsername">
                        <Col componentClass={ControlLabel} sm={3}>
                            Username
                        </Col>
                        <Col sm={6}>
                            <FormControl type="text" placeholder="Username" onChange={this.usernameFill}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={3}>
                            Password
                        </Col>
                        <Col sm={6}>
                            <FormControl type="password" placeholder="Password" onChange={this.passwordFill}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={3}>
                            Enter your name
                        </Col>
                        <Col sm={6}>
                            <FormControl type="text" placeholder="Name" onChange={this.nameFill}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPhone">
                        <Col componentClass={ControlLabel} sm={3}>
                            Phone number
                        </Col>
                        <Col sm={6}>
                            <MaskedFormControl type='text' name='phoneNumber' mask='+38(111)111-11-11' onChange={this.phoneFill}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col sm={3} smOffset={5}>
                            <Link to="/">
                                <Button type="submit" onClick={this.extractUser}>
                                    Sign up!
                                </Button>
                            </Link>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
