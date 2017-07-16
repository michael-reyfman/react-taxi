/**
 * Created by michael on 15.07.17.
 */

class Driver {
    constructor(_username, _name, _password, _phone, _car, _carclass, _licenseNo) {
        this.username = _username;
        this.name = _name;
        this.password = _password;
        this.phone = _phone;
        this.car = _car;
        this.carclass = _carclass;
        this.licenseNo = _licenseNo;
        this.orders = [];
    }
}

export default Driver;