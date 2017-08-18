/**
 * Created by michael on 15.07.17.
 */

class Order {
    calcPrice(distance, carclass) {
        switch(carclass) {
            case "economy":
                return 35 + 3 * distance;
            case "comfort":
                return 60 + 4.5 * distance;
            case "business":
                return 125 + 7 * distance;
            case "vip":
                return 300 + 15 * distance;
        }
    }
    constructor(_id, _user, _from, _to, _distance, _carclass) {
        this.id = _id;
        this.user = _user;
        this.from = _from;
        this.to = _to;
        this.ordertime = Date.now();
        this.driver = undefined;
        this.price = this.calcPrice(_distance, _carclass);
        this.status = "ADDED";
    }
}

export default Order;