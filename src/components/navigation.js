/**
 * Created by michael on 15.07.17.
 */
import React, { Component } from 'react';
import '../App.css';
import {Nav, Navbar, NavDropdown, NavItem, MenuItem} from 'react-bootstrap';
import {LOGOUT_PRESS} from '../redux/constants';
import  '../App.js';
import Login from './login';
import { Link } from 'react-router-dom';
import store from '../index';


class WelcomePanel extends Component {
    logOut() {
        store.dispatch({type: LOGOUT_PRESS});
    }
    getUserbyID(id) {
        const state = store.getState();
        for(let i = 0; i < state.userList.length; i++) {
            if(state.userList[i].id === id)
                return state.userList[i];
        }
        return -1;
    }
    render() {
        const activeUserID = store.getState().activeUserID;
        const user = this.getUserbyID(activeUserID);
        if(activeUserID >= 0){
            return(
                <NavDropdown eventKey={3} title={"Welcome, " + user.username + "!"} id="basic-nav-dropdown">
                    <MenuItem eventKey={3}><Link to={"/user/" + activeUserID}>Profile</Link></MenuItem>
                    <MenuItem eventKey={4} onClick={this.logOut.bind(this)}><Link to="/">Logout</Link></MenuItem>
                </NavDropdown>
            );
        }else {
            return(
                <NavDropdown eventKey={3} title="Login" id="basic-nav-dropdown">
                    <Login />
                 </NavDropdown>
            );
        }
    }
}


class Navigation extends Component {
    render() {
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/" className="nav-element">React Taxi</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Make an order!</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <WelcomePanel/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;