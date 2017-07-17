/**
 * Created by michael on 17.07.17.
 */
import React, { Component } from 'react';
import {Form, FormControl, FormGroup, Col, Button, ControlLabel} from 'react-bootstrap';
import MaskedFormControl from 'react-bootstrap-maskedinput';
import '../App.css';
import { Link } from 'react-router-dom';


class OrderForm extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h2>Make an order!</h2>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={3}>
                            Your name
                        </Col>
                        <Col sm={6}>
                            <FormControl type="text" placeholder={this.props.user.name} onChange={this.nameFill} value={this.props.user.name}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalFrom">
                        <Col componentClass={ControlLabel} sm={3}>
                            From
                        </Col>
                        <Col sm={6}>
                            <FormControl type="text" placeholder="From" onChange={this.passwordFill}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalTo">
                        <Col componentClass={ControlLabel} sm={3}>
                            To
                        </Col>
                        <Col sm={6}>
                            <FormControl type="text" placeholder="To" onChange={this.passwordFill}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPhone">
                        <Col componentClass={ControlLabel} sm={3}>
                            Phone number
                        </Col>
                        <Col sm={6}>
                            <MaskedFormControl type='text' name='phoneNumber' mask='+38(111)111-11-11' onChange={this.phoneFill} placeholder={this.props.user.phone}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col sm={3} smOffset={3}>
                            <Button type="submit" onClick={this.extractUser}>
                                Show on map
                            </Button>
                        </Col>
                        <Col sm={3}>
                            <Button type="submit" onClick={this.extractUser}>
                                Make an order!
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}


class Home extends Component {
    render() {
        const orderform = this.props.usertype === "Passenger" ? <OrderForm user={this.props.user}/> : null;
        const error = orderform ? null : <p className="error-msg">You have to proceed a <Link to="/registration">registration</Link> or sign in to make an order!</p>;
        return (
            <div>
                <h1>Welcome to our taxi service!</h1>
                {error}
                {orderform}
            </div>
        );
    }
}

export default Home;