/**
 * Created by michael on 16.07.17.
 */
import React, { Component } from 'react';
import '../App.css';
import {Form, FormControl, FormGroup, Col, Button, ControlLabel} from 'react-bootstrap';
import MaskedFormControl from 'react-bootstrap-maskedinput';
import Passenger from '../models/passenger';


class PassRegistrationForm extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            name: "",
            phone: "",
        };
        this.usernameFill = this.usernameFill.bind(this);
        this.passwordFill = this.passwordFill.bind(this);
        this.nameFill     = this.nameFill.bind(this);
        this.phoneFill    = this.phoneFill.bind(this);
        this.extractUser  = this.extractUser.bind(this);
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
    extractUser(event) {
        this.props.addUser(new Passenger(this.state.username, this.state.name, this.state.password, this.state.phone));
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

export default PassRegistrationForm;