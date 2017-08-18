import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import Main from './routers/main';
import {ADD_USER, PASSENGER, DRIVER} from './redux/constants';
import store from './index';
import {Row, Well, Grid, Col, Button} from 'react-bootstrap';


const addInitialUsers = () => {
    store.dispatch({
        type: ADD_USER,
        usertype: PASSENGER,
        username: "mick123",
        name: "Michael",
        password: "123123",
        phone: "+38(093)911-91-19"
    });
    store.dispatch({
        type: ADD_USER,
        usertype: PASSENGER,
        username: "pavel141",
        name: "Alexander",
        password: "asasas",
        phone: "+38(050)184-14-88"
    });
    store.dispatch({
        type: ADD_USER,
        usertype: DRIVER,
        username: "realpavel",
        name: "Pavel",
        password: "qwerty78",
        phone: "+38(095)322-22-22",
        car: "Nissan Qashqai",
        carclass: "classic",
        licenseNo: "FA2928MK"
    })
};

const Footer = () => (
    <footer className="footer-bs">
        <Grid>
            <Col xs={12} sm={6} md={4} lg={4}>
                <h2 className="footer-header">React Taxi</h2>
                <p className="footer-header">
                    React Taxi is a React + Redux application created by Michael Reyfman. You can send feedback using
                    contacts below.
                </p>
            </Col>
            <Col xs={12} sm={6} md={4} lg={4}>
                <div className="footer-nav animated fadeInUp">
                    <h4 className="footer-header">Contacts</h4>
                    <ul className="pages">
                        <li>Telegram</li>
                        <li>GitHub</li>
                        <li>E-mail</li>
                    </ul>
                </div>
            </Col>
            <Col xs={12} sm={0} md={4} lg={4}>
                <div className="footer-ns animated fadeInRight">
                    <h4 className="footer-header">Phone numbers</h4>
                    <p>The best way to call us is to use this magic phone number:</p>
                    <p className="phonenumber-big">4272</p>
                    <p>You can call the taxi using these phone numbers:</p>
                    <p className="phonetext">Kyivstar: <span className="phonenumber">+38 097 97 97 997</span></p>
                    <p className="phonetext">Vodafone: <span className="phonenumber">+38 096 96 96 996</span></p>
                    <p className="phonetext">Lifecell: <span className="phonenumber">+38 093 93 93 993</span></p>
                    <p className="phonetext">Local number: <span className="phonenumber">+38 044 94 94 994</span></p>
                </div>
            </Col>
        </Grid>
    </footer>
);


class App extends Component {
    componentWillMount() {
        addInitialUsers();
    }
    render() {
        return (
            <div>
                <Navigation />
                <Main/>
                <Footer/>
            </div>
        )
    }
}


export default App;
