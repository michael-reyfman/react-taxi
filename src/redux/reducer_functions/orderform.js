/**
 * Created by michael on 15.08.17.
 */

function $set(...objects) {
    return Object.assign({}, ...objects);
}

export const name_fill_order = (state, action) => {
    return $set(state, {
        orderForm: $set(state.orderForm, {
            name: action.payload
        })
    });
};

export const from_fill_order = (state, action) => {
    return $set(state, {
        orderForm: $set(state.orderForm, {
            from: action.payload
        })
    });
};

export const to_fill_order = (state, action) => {
    return $set(state, {
        orderForm: $set(state.orderForm, {
            to: action.payload
        })
    });
};

export const phone_fill_order = (state, action) => {
    return $set(state, {
        orderForm: $set(state.orderForm, {
            phone: action.payload
        })
    });
};

export const carclass_change_order = (state, action) => {
    return $set(state, {
        orderForm: $set(state.orderForm, {
            from: action.payload
        })
    });
};
//
// export const create_order = (state, action) => {
//
// };