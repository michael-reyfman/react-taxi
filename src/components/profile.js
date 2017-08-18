/**
 * Created by michael on 18.08.17.
 */
import React, { Component } from 'react';
import '../App.css';
import store from '../index';


const getUserbyID = (id) => {
    const state = store.getState();
    for(let i = 0; i < state.userList.length; i++) {
        if(state.userList[i].id === id)
            return state.userList[i];
    }
    return -1;
};


export default class Profile extends Component {
    render() {
        const state = store.getState();
        const user = getUserbyID(state.activeUserID);
        return (
            <div className="profile">
                <h1>{user.username}'s profile</h1>
            </div>
        )
    }
}