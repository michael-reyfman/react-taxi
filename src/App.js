import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import Passenger from './models/passenger';
import Driver from './models/driver';
import PassRegistrationForm from './components/passregistration';
import DriverRegistrationForm from './components/driverregistration';
// import Login from './components/login';
// import {
//     FormControl, FormGroup, Col, Button, ControlLabel, Nav, Navbar, NavDropdown, NavItem, MenuItem
// } from 'react-bootstrap';

let Users = [
    new Passenger("anal123", "Michael", "h27a123", "+38(093)911-91-19"),
    new Passenger("pashapidor", "Alexander", "asasa", "+38(050)184-14-88"),
    new Driver("dayapidor", "Pavel", "qwerty78", "+38(095)232-23-32", "Nissan Qashqai", "classic", "AA2728PI")
];

let TerminalOrders = [];


class App extends Component {
    constructor() {
        super();
        this.state = {
            login: false,
            activeuser: {},
            usertype: undefined,
            userlist: Users,
            activereg: "left",
        };
        this.changeForm = this.changeForm.bind(this);
    }
    returnInfo(_user) {
        const _type = _user instanceof Passenger ? "Passenger" : "Driver";
        this.setState({login: true, activeuser: _user, usertype: _type});
    }
    addUser(user) {
        let users = this.state.userlist;
        users.push(user);
        this.setState({userlist: users});
    }
    changeForm() {
        const newstate = this.state.activereg === "left" ? "right" : "left";
        this.setState({activereg: newstate});
    }
    render() {
        console.log(this.state.login, this.state.activeuser, this.state.usertype);
        console.log(this.state.userlist);
        let regform;
        if(this.state.activereg === "left")
            regform = <PassRegistrationForm users={this.state.userlist} addUser={this.addUser.bind(this)}/>;
            else
                regform = <DriverRegistrationForm users={this.state.userlist} addUser={this.addUser.bind(this)}/>;
        const left = <a href="#" className={"active-" + (this.state.activereg === "left")} onClick={this.changeForm}>passengers</a>;
        const right = <a href="#" className={"active-" + (this.state.activereg === "right")} onClick={this.changeForm}>drivers</a>;
        return (
            <div className="App">
                <Navigation users={this.state.userlist} returnInfo={this.returnInfo.bind(this)}/>
                <h2> Registration for {left} | {right}</h2>
                {regform}
            </div>
        );
    }
}

export default App;
