/**
 * Created by michael on 16.07.17.
 */
import React, { Component } from 'react';
import '../App.css';
import store from '../index';
import {USERNAME_FILL_DRIVER, PASSWORD_FILL_DRIVER, NAME_FILL_DRIVER, PHONE_FILL_DRIVER,
CAR_FILL_DRIVER, CARCLASS_CHANGE_DRIVER, LICENSENO_FILL_DRIVER} from '../redux/constants';
import {Form, FormControl, FormGroup, Col, Button, ControlLabel} from 'react-bootstrap';
import MaskedFormControl from 'react-bootstrap-maskedinput';
import { Link } from 'react-router-dom';

export default class DriverRegForm extends Component {
    constructor() {
        super();
        this.usernameFill   = this.usernameFill.bind(this);
        this.passwordFill   = this.passwordFill.bind(this);
        this.nameFill       = this.nameFill.bind(this);
        this.phoneFill      = this.phoneFill.bind(this);
        this.extractUser    = this.extractUser.bind(this);
        this.carModelFill   = this.carModelFill.bind(this);
        this.carNumberFill  = this.carNumberFill.bind(this);
        this.carClassChange = this.carClassChange.bind(this);
    }
    usernameFill(event) {
        store.dispatch({type: USERNAME_FILL_DRIVER, payload: event.target.value});
    }
    passwordFill(event) {
        store.dispatch({type: PASSWORD_FILL_DRIVER, payload: event.target.value});
    }
    nameFill(event) {
        store.dispatch({type: NAME_FILL_DRIVER, payload: event.target.value});
    }
    phoneFill(event) {
        store.dispatch({type: PHONE_FILL_DRIVER, payload: event.target.value});
    }
    carModelFill(event) {
        store.dispatch({type: CAR_FILL_DRIVER, payload: event.target.value});
    }
    carNumberFill(event) {
        store.dispatch({type: LICENSENO_FILL_DRIVER, payload: event.target.value});;
    }
    carClassChange(event) {
        store.dispatch({type: CARCLASS_CHANGE_DRIVER, payload: event.target.value});
    }
    extractUser(event) {
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h2 className="form-header">Registration for <Link to="/register/passengers">passengers</Link> | drivers</h2>
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

                    <FormGroup controlId="formHorizontalCar">
                        <Col componentClass={ControlLabel} sm={3}>
                            Car model
                        </Col>
                        <Col sm={6}>
                            <FormControl type="text" placeholder="Model of your car" onChange={this.carModelFill}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalCarNumber">
                        <Col componentClass={ControlLabel} sm={3}>
                            Car number
                        </Col>
                        <Col sm={6}>
                            <MaskedFormControl type='text' name='carNumber' mask='AA 1111 AA' onChange={this.carNumberFill}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalClassSelect">
                        <Col componentClass={ControlLabel} sm={3}>
                            Car class
                        </Col>
                        <Col sm={6}>
                            <FormControl componentClass="select" placeholder="Car class" onChange={this.carClassChange}>
                                <option value="economy">Economy</option>
                                <option value="classic">Classic</option>
                                <option value="comfort">Comfort</option>
                                <option value="vip">VIP</option>
                            </FormControl>
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
