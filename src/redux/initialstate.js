/**
 * Created by michael on 13.08.17.
 */
export const initialState = {
    userList: [],
    activeUserID: -1,
    avalId: 0,
    loginWindow: {
        username: "",
        password: "",
        wrong: undefined,
        valid: undefined,
    },
    orderForm: {
        name: "",
        from: "",
        to: "",
        phone: "",
        carclass: "economy",
        distance: 0,
        price: 0
    },
    regPassenger: {
        username: "",
        password: "",
        name: "",
        phone: "",
        valid: undefined
    },
    regDriver: {
        username: "",
        password: "",
        name: "",
        phone: "",
        car: "",
        carclass: "economy",
        licenseNo: "",
        valid: undefined
    },
};
