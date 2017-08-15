import {
    ADD_USER, REMOVE_USER, USERNAME_FILL_LOGIN, PASSWORD_FILL_LOGIN, LOGIN_PRESS, LOGOUT_PRESS,
    NAME_FILL_ORDER, FROM_FILL_ORDER, TO_FILL_ORDER, PHONE_FILL_ORDER, CARCLASS_CHANGE_ORDER,
    USERNAME_FILL_PASSENGER, PASSWORD_FILL_PASSENGER, NAME_FILL_PASSENGER, PHONE_FILL_PASSENGER,
    USERNAME_FILL_DRIVER, PASSWORD_FILL_DRIVER, NAME_FILL_DRIVER, PHONE_FILL_DRIVER,
    CAR_FILL_DRIVER, CARCLASS_CHANGE_DRIVER, LICENSENO_FILL_DRIVER} from './constants';
import {addUser, removeUser} from "./reducer_functions/userlist";
import {username_fill_login, password_fill_login, login_press, logout_press} from "./reducer_functions/loginwindow";
import {username_fill_pass, password_fill_pass, name_fill_pass, phone_fill_pass} from './reducer_functions/regpassenger';
import {username_fill_driver, password_fill_driver, name_fill_driver, phone_fill_driver,
car_fill_driver, carclass_set_driver, licenseNo_fill_driver} from './reducer_functions/regdriver';
import {name_fill_order, from_fill_order, to_fill_order, phone_fill_order, carclass_change_order} from './reducer_functions/orderform';
import {initialState} from './initialstate';

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return addUser(state, action);
        case REMOVE_USER:
            return removeUser(state, action);
        case USERNAME_FILL_LOGIN:
            return username_fill_login(state, action);
        case PASSWORD_FILL_LOGIN:
            return password_fill_login(state, action);
        case LOGIN_PRESS:
            return login_press(state);
        case LOGOUT_PRESS:
            return logout_press(state);
        case NAME_FILL_ORDER:
            return name_fill_order(state, action);
        case FROM_FILL_ORDER:
            return from_fill_order(state, action);
        case TO_FILL_ORDER:
            return to_fill_order(state, action);
        case PHONE_FILL_ORDER:
            return phone_fill_order(state, action);
        case CARCLASS_CHANGE_ORDER:
            return carclass_change_order(state, action);
        case USERNAME_FILL_PASSENGER:
            return username_fill_pass(state, action);
        case PASSWORD_FILL_PASSENGER:
            return password_fill_pass(state, action);
        case NAME_FILL_PASSENGER:
            return name_fill_pass(state, action);
        case PHONE_FILL_PASSENGER:
            return phone_fill_pass(state, action);
        case USERNAME_FILL_DRIVER:
            return username_fill_driver(state, action);
        case PASSWORD_FILL_DRIVER:
            return password_fill_driver(state, action);
        case NAME_FILL_DRIVER:
            return name_fill_driver(state, action);
        case PHONE_FILL_DRIVER:
            return phone_fill_driver(state, action);
        case CAR_FILL_DRIVER:
            return car_fill_driver(state, action);
        case CARCLASS_CHANGE_DRIVER:
            return carclass_set_driver(state, action);
        case LICENSENO_FILL_DRIVER:
            return licenseNo_fill_driver(state, action);
        default:
            return state;
    }
};