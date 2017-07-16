/**
 * Created by michael on 15.07.17.
 */
import React, { Component } from 'react';
import '../App.css';
import {Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap';
import  '../App.js';
import Login from './login';

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            signed: false,
            user: {},
        };
    }
    returnData(login, password) {
        let users = this.props.users;
        for(let i = 0; i < users.length; i++) {
            if(users[i].username === login && users[i].password === password) {
                this.setState({signed: true, user: users[i]});
                this.props.returnInfo(users[i]);
            }
        }
    }
    render() {
        const users = this.props.users;
        let WelcomePanel;
        if(this.state.signed)
            WelcomePanel = <p className="nav-welcome">Welcome, {this.state.user.username}!</p>;
            else {
            WelcomePanel = <NavDropdown eventKey={3} title="Login" id="basic-nav-dropdown">
                <Login returnData={this.returnData.bind(this)} users={users}/>
            </NavDropdown>
        }
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Taxi</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                    </Nav>
                    <Nav pullRight>
                        {WelcomePanel}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;