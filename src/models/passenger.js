/**
 * Created by michael on 15.07.17.
 */


class Passenger {
    constructor(_id, _username, _name, _password, _phone) {
        this.id = _id;
        this.username = _username;
        this.name = _name;
        this.password = _password;
        this.phone = _phone;
        this.orders = [];
        this.usertype = "PASSENGER"
    }
}

export default Passenger;