/**
 * Created by michael on 15.08.17.
 */

function $set(...objects) {
    return Object.assign({}, ...objects);
}

export const username_fill_driver = (state, action) => {
    return $set(state, {
        regDriver: $set(state.regDriver, {
            username: action.payload
        })
    });
};

export const password_fill_driver = (state, action) => {
    return $set(state, {
        regDriver: $set(state.regDriver, {
            password: action.payload
        })
    });
};

export const name_fill_driver = (state, action) => {
    return $set(state, {
        regDriver: $set(state.regDriver, {
            name: action.payload
        })
    });
};

export const phone_fill_driver = (state, action) => {
    return $set(state, {
        regDriver: $set(state.regDriver, {
            phone: action.payload
        })
    });
};

export const car_fill_driver = (state, action) => {
    return $set(state, {
        regDriver: $set(state.regDriver, {
            car: action.payload
        })
    });
};

export const carclass_set_driver = (state, action) => {
    return $set(state, {
        regDriver: $set(state.regDriver, {
            carclass: action.payload
        })
    });
};

export const licenseNo_fill_driver = (state, action) => {
    return $set(state, {
        regDriver: $set(state.regDriver, {
            licenseNo: action.payload
        })
    });
};
