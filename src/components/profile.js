/**
 * Created by michael on 18.08.17.
 */
import React, { Component } from 'react';
import '../App.css';
import store from '../index';
import {Grid, Button} from 'react-bootstrap';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


const getUserbyID = (id) => {
    const state = store.getState();
    for(let i = 0; i < state.userList.length; i++) {
        if(state.userList[i].id === id)
            return state.userList[i];
    }
    return -1;
};


const OrderTable = (user) => (
    <BootstrapTable data={user.orders} striped hover>
        <TableHeaderColumn isKey dataField='id'>Order ID</TableHeaderColumn>
        <TableHeaderColumn dataField='ordertime'>Date</TableHeaderColumn>
        <TableHeaderColumn dataField='from'>From</TableHeaderColumn>
        <TableHeaderColumn dataField='to'>To</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
        <TableHeaderColumn dataField='driver'>Driver</TableHeaderColumn>
        <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
    </BootstrapTable>
);

export default class Profile extends Component {
    changePassword(event) {
        event.preventDefault();
    }
    render() {
        const state = store.getState();
        const user = getUserbyID(state.activeUserID);
        return (
            <div className="profile">
                <h1>{user.username}'s profile</h1>
                <Grid>
                    <p>Here you can change your settings (WIP) and check your orders</p>
                    <div className="profile-info">
                        <ul>
                            <li>Username: {user.username}</li>
                            <li>Name: {user.name}</li>
                            <li>Phone: {user.phone}</li>
                            <Button onClick={this.changePassword.bind(this)} id="change-password">Change password (WIP)</Button>
                            <OrderTable user={user}/>
                        </ul>
                    </div>
                </Grid>
            </div>
        )
    }
}