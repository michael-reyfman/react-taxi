/**
 * Created by michael on 13.08.17.
 */
import Passenger from '../../models/passenger';
import Driver from '../../models/driver';
import {PASSENGER, DRIVER} from '../constants';


const isValid = (username, name, password) => {
    return username.length >= 6 && name.length >= 6 && password.length >= 6;
};

export const addUser = (state, action) => {
    const usernames = state.userList.map(item => item.username);
    let tempUser;
    if(isValid(action.username, action.name, action.password)){
        if(action.usertype === PASSENGER)
            tempUser = new Passenger(state.avalId, action.username, action.name, action.password, action.phone);
        else if(action.usertype === DRIVER)
            tempUser = new Driver(
                state.avalId,
                action.username,
                action.name,
                action.password,
                action.phone,
                action.car,
                action.carclass,
                action.licenseNo);
        if(!usernames.includes(tempUser.username)){
            return Object.assign({}, state, {
                userList: [...state.userList, tempUser],
                avalId: state.avalId + 1
            });
        }
    }
    else {
        return state;
    }
};


export const removeUser = (state, action) => {
    const tempUserList = [...state.userList.slice(0, action.index), ...state.userList.slice(action.index + 1)];
    return Object.assign({}, state, {
        userList: tempUserList
    });
};
