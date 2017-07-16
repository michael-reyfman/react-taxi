/**
 * Created by michael on 15.07.17.
 */


class Passenger {
    constructor(_username, _name, _password, _phone) {
        this.username = _username;
        this.name = _name;
        this.password = _password;
        this.phone = _phone;
        this.orders = [];
    }
}

export default Passenger;