
/*
? ______ ______  _______    ______     _______         _          
?(_____ (______)(_______)  (_____ \   (_______)       | |         
? _____) )     _ _____       ____) )      _ _____  ___| |  _  ___ 
?|  ____/ |   | |  ___)     / ____/      | (____ |/___) |_/ )/___)
?| |    | |__/ /| |        | (_____      | / ___ |___ |  _ (|___ |
?|_|    |_____/ |_|        |_______)     |_\_____(___/|_| \_|___/ 
*/

let cartTotalSum = 0;
let cartItems = [];
let wishList = [];
function rowsInit() {
    car = {
        "id": 1,
        "name": "BMW",
        "price": 60000,
        "km": 2222222,
        "year": "2000",
        "type": "X5"
    }
    car2= {
        "id": 2,
        "name": "Porsche",
        "price": 60000,
        "km": 2222222,
        "year": "2000",
        "type": "GTR"
    }

    addOrderItem(car)
    addOrderItem(car2)
    addCartItem(car, 2)
    addCartItem(car2, 1)
    addWishItem(car)
    removeCartItem(car2.id)
}

let ordersUpdate = () => {}

let cartUpdate = () => {}

let wishlistUpdate = () => {}

let tableUpdate = () => {
    $("#buy-items").empty();
    rowsInit()
}

let click = (e) => {

}

let init = () => {
    rowsInit()
}

let addOrderItem = (car) => {
    let template = $("#order-item-template").html();
    let $item = $(template);
    $item.find(".order-item").attr("id", car.id)
    $item.find(".name").text(`${car.name}`)
    $item.find(".price").text(`$${car.price}`)
    $item.find(".km").text(`${car.km}`)
    $item.find(".year").text(`${car.year}`)
    $item.find(".type").text(`${car.type}`)

    $("#buy-items").append($item)
}

let addCartItem = (car, amount) => { 
    let template = $("#cart-item-template").html();
    let $item = $(template);
    $item.find(".cart-item").attr("id", car.id)
    $item.find(".name").text(`${car.name}`)
    $item.find(".price").text(`${car.price}`)
    $item.find(".amount").text(`${amount}`)

    cartTotalSum += car.price * amount;

    $("#cart-total").text(`Total: ${cartTotalSum}`)
    $("#cart-items").append($item)

    cartItems.push(car)
}

let removeCartItem = (id) => {
    price = $("#cart-items").find(`#${id}`).find(".amount").number();
    amount = $("#cart-items").find(`#${id}`).find(".price").number();
    cartTotalSum -= price * amount;    

    wishList = cartItems.filter(item => item.id!== id)
}

let addWishItem = (car) => { 
    let template = $("#wishlist-item-template").html();
    let $item = $(template);
    $item.find(".wish-item").attr("id", car.id)
    $item.find(".name").text(`${car.name}`)
    $item.find(".price").text(`$${car.price}`)

    $(".wishlist").append($item)

    wishList.push(car)
}

init()