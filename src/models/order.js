/**
 * Created by michael on 15.07.17.
 */

class Order {
    constructor(_id, _user, _from, _to) {
        this.id = _id;
        this.user = _user;
        this.from = _from;
        this.to = _to;
        this.ordertime = Date.now();
        this.driver = undefined;
        this.status = "ADDED";
    }
}

export default Order;