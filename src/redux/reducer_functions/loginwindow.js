/**
 * Created by michael on 13.08.17.
 */

function $set(...objects) {
    return Object.assign({}, ...objects);
}

const validation = (username, password) => username.length >= 6 && password.length >= 6;

const isCorrectUser = (username, password, userlist) => {
    for(let tempUser of userlist) {
        if(tempUser.username === username && tempUser.password === password)
            return [true, tempUser.id];
    }
    return [false, -1];
};

export const username_fill_login = (state, action) => {
    return $set(state, {
        loginWindow: $set(state.loginWindow, {
            username: action.payload
        })
    });
};

export const password_fill_login = (state, action) => {
    return $set(state, {
        loginWindow: $set(state.loginWindow, {
            password: action.payload
        })
    });
};

export const login_press = (state) => {
    if(!validation(state.loginWindow.username, state.loginWindow.password))
        return $set(state, {
            loginWindow: $set(state.loginWindow, {
                valid: false,
                wrong: false
            })
        });
    const isCorrect = isCorrectUser(state.loginWindow.username, state.loginWindow.password, state.userList);
    if(isCorrect[0]) {
        return $set(state, {
            activeUserID: isCorrect[1],
            loginWindow: $set(state.loginWindow, {
                valid: true,
                wrong: false
            })
        });
    } else {
        return $set(state, {
            loginWindow: $set(state.loginWindow, {
                valid: true,
                wrong: true
            })
        });
    }
};

export const logout_press = (state) => {
   return $set(state, {
       activeUserID: -1,
       loginWindow: $set(state.loginWindow, {
           valid: undefined,
           wrong: undefined
       })
   });
};