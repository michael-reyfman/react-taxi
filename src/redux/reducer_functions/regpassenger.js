/**
 * Created by michael on 15.08.17.
 */

function $set(...objects) {
    return Object.assign({}, ...objects);
}

export const username_fill_pass = (state, action) => {
    return $set(state, {
        regPassenger: $set(state.regPassenger, {
            username: action.payload
        })
    });
};

export const password_fill_pass = (state, action) => {
    return $set(state, {
        regPassenger: $set(state.regPassenger, {
            password: action.payload
        })
    });
};

export const name_fill_pass = (state, action) => {
    return $set(state, {
        regPassenger: $set(state.regPassenger, {
            name: action.payload
        })
    });
};

export const phone_fill_pass = (state, action) => {
    return $set(state, {
        regPassenger: $set(state.regPassenger, {
            phone: action.payload
        })
    });
};