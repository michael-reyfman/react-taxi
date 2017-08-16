import React, { Component } from 'react';
import '../App.css';
import {Form, FormControl, FormGroup, Col, Button, ControlLabel} from 'react-bootstrap';
import MaskedFormControl from 'react-bootstrap-maskedinput';
import {NAME_FILL_ORDER, FROM_FILL_ORDER, TO_FILL_ORDER, PHONE_FILL_ORDER, CARCLASS_CHANGE_ORDER} from '../redux/constants';
import store from '../index';
import { Link } from 'react-router-dom';


const getUserbyID = (id) => {
    const state = store.getState();
    for(let i = 0; i < state.userList.length; i++) {
        if(state.userList[i].id === id)
            return state.userList[i];
    }
    return -1;
};

class OrderForm extends Component {
    constructor() {
        super();
        this.nameFill       = this.nameFill.bind(this);
        this.fromFill       = this.fromFill.bind(this);
        this.toFill         = this.toFill.bind(this);
        this.phoneFill      = this.phoneFill.bind(this);
        this.carClassChange = this.carClassChange.bind(this);
    }
    nameFill(event) {
        store.dispatch({type: NAME_FILL_ORDER, payload: event.target.value});
    }
    fromFill(event) {
        store.dispatch({type: FROM_FILL_ORDER, payload: event.target.value});
    }
    toFill(event) {
        store.dispatch({type: TO_FILL_ORDER, payload: event.target.value});
    }
    phoneFill(event) {
        store.dispatch({type: PHONE_FILL_ORDER, payload: event.target.value});
    }
    carClassChange(event) {
        store.dispatch({type: CARCLASS_CHANGE_ORDER, payload: event.target.value});
    }
    render() {
        const state = store.getState();
        const user = getUserbyID(state.activeUserID);
        return(
            <div>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={3}>
                            Your name
                        </Col>
                        <Col sm={6}>
                            <FormControl type="text" onChange={this.nameFill} defaultValue={user.name}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalFrom">
                        <Col componentClass={ControlLabel} sm={3}>
                            From
                        </Col>
                        <Col sm={6}>
                            <FormControl type="text" placeholder="From" onChange={this.fromFill}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalTo">
                        <Col componentClass={ControlLabel} sm={3}>
                            To
                        </Col>
                        <Col sm={6}>
                            <FormControl type="text" placeholder="To" onChange={this.toFill}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPhone">
                        <Col componentClass={ControlLabel} sm={3}>
                            Phone number
                        </Col>
                        <Col sm={6}>
                            <MaskedFormControl
                                type='text'
                                name='phoneNumber'
                                mask='+38(111)111-11-11'
                                value={user.phone}
                                onChange={this.phoneFill}
                                placeholder={user.phone}
                            />
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
                        <Col sm={3} smOffset={3}>
                            <Button type="submit">
                                Show on map
                            </Button>
                        </Col>
                        <Col sm={3}>
                            <Link to="/">
                                <Button type="submit">
                                    Make an order!
                                </Button>
                            </Link>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default class OrderFormOverlay extends Component {
    render() {
        const error_msg = <p className="error-msg">
            You have to proceed a <Link to="/register/passengers">registration</Link> or sign in to make an order!
        </p>;
        const state = store.getState();
        const user = getUserbyID(state.activeUserID);
        const order_form = state.activeUserID >= 0 && user.usertype === "PASSENGER" ? <OrderForm/> : error_msg;
        return (
            <div className="order-form">
                <h2>Order form</h2>
                {order_form}
            </div>
        );
    }
}
