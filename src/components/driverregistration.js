/**
 * Created by michael on 16.07.17.
 */
import React, { Component } from 'react';
import '../App.css';
import {Form, FormControl, FormGroup, Col, Button, ControlLabel} from 'react-bootstrap';
import MaskedFormControl from 'react-bootstrap-maskedinput';
import Driver from '../models/driver';


class DriverRegistrationForm extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            name: "",
            phone: "",
            car: "",
            carclass: "Economy",
            carnumber: ""
        };
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
        this.setState({username: event.target.value});
    }
    passwordFill(event) {
        this.setState({password: event.target.value});
    }
    nameFill(event) {
        this.setState({name: event.target.value});
    }
    phoneFill(event) {
        this.setState({phone: event.target.value});
    }
    carModelFill(event) {
        this.setState({car: event.target.value});
    }
    carNumberFill(event) {
        this.setState({carnumber: event.target.value});
    }
    carClassChange(event) {
        this.setState({carclass: event.target.value});
    }
    extractUser(event) {
        this.props.addUser(
            new Driver(
                this.state.username,
                this.state.name,
                this.state.password,
                this.state.phone,
                this.state.car,
                this.state.carclass,
                this.state.carnumber
            ));
        event.preventDefault();
    }
    render() {
        return(
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
                    <Col sm={12}>
                        <Button type="submit" onClick={this.extractUser}>
                            Sign up!
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default DriverRegistrationForm;