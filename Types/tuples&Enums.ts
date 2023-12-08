let myTuple: [number, string];
myTuple = [10, "tuplish"];
// myTuple = ["tuplish", 10];

//enums
enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus){
    return status === OrderStatus.DELIVERED;
}