
/*
? ______ ______  _______    ______     _______         _          
?(_____ (______)(_______)  (_____ \   (_______)       | |         
? _____) )     _ _____       ____) )      _ _____  ___| |  _  ___ 
?|  ____/ |   | |  ___)     / ____/      | (____ |/___) |_/ )/___)
?| |    | |__/ /| |        | (_____      | / ___ |___ |  _ (|___ |
?|_|    |_____/ |_|        |_______)     |_\_____(___/|_| \_|___/ 
*/
let DB = {
    cars: [

        //contain 20 different car objects with id, name, price, km, year and type
        {
            id: 1,
            name: 'Volvo',
            price: 10000,
            km: 0,
            year: 2020,
            type: 'Sedan'
        },
        {
            id: 2,
            name: 'BMW',
            price: 20000,
            km: 0,
            year: 2020,
            type: 'Cabriolet'
        },
        {
            id: 3,
            name: 'Audi',
            price: 30000,
            km: 0,
            year: 2023,
            type: 'Sport'
        },
        {
            id: 4,
            name: 'Mercedes',
            price: 40000,
            km: 0,
            year: 2020,
            type: 'Pickup'
        },
        {
            id: 5,
            name: 'Volkswagen',
            price: 10000,
            km: 0,
            year: 2020,
            type: 'Sedan'
        },
        {
            id: 6,
            name: 'Lamborghini',
            price: 100000,
            km: 0,
            year: 2020,
            type: 'Sport'
        },
        {
            id: 7,
            name: 'Skoda',
            price: 10000,
            km: 0,
            year: 2020,
            type: 'Sedan'
        }


    ]
}

let buyItems = [{ ...DB.cars[0] }, { ...DB.cars[1] }];
let cartItems = [];
let wishListItems = [];

let cartTotalSum = 0;

let getBuyItems = () => buyItems
let getCartItems = () => cartItems
let getWishList = () => wishListItems

let runAlert = (msg, param) => {
    alert(msg + ' received:' + param)
}

let buyItemsUpdate = () => {
    $('#buy-items').empty()
    getBuyItems().forEach(item => addOrderItem(item))
}

let cartUpdate = () => {
    cartTotalSum = 0;
    $('#cart-items').empty()
    getCartItems().forEach(item => addCartItem(item))
}

let wishlistUpdate = () => {
    $('.wishlist').empty()
    getWishList().forEach(item => addWishItem(item))
}
let rowsInit = () => {
    buyItemsUpdate()
    cartUpdate()
    wishlistUpdate()
}

let tableUpdate = () => {
    rowsInit()
}

let click = (e) => {

}

let init = () => {
    buyItems = DB.cars
    rowsInit()
}

let addOrderItem = (car) => {

    let template = `
        <div class="order-item ${car.id}" id="bi-${car.id}"> 
            <div class="oi-info">
                <div class="oii name">${car.name}</div>
                <div class="oii type">${car.type}</div>
                <div class="oii year">${car.year}</div>
                <div class="oii km">${car.km} km</div>
                <div class="oii price">$${car.price}</div>
            </div>
            <div class="oi-controls"> 
                <input class="oic amount" type="number"id="ba-${car.id}"
                value="1" min="1" max="100" step="1"/>
                <div class="oic add-cart"id="bc-${car.id}">To cart</div>
                <div class="oic add-wish"id="bw-${car.id}">To wishlist</div>
            </div>
        </div>
  `
    let $item = $(template);
    $("#buy-items").append($item)

    $("#bc-" + car.id).on("click", () => {

        let amount = parseInt($(`#ba-${car.id}`).val())
        if (!amount > 0 && !amount <= 100) {
            runAlert("The amount must be between 0 and 100", car.amount)
            return
        }

        let cartItem = cartItems.find(item => item.id === car.id)

        if (cartItem) cartItem.amount += amount
        else cartItems.push({ ...car, amount })

        cartUpdate()

    })

    $("#bw-" + car.id).on("click", () => {
        let wishItem = wishListItems.find(item => item.id === car.id)
        if (wishItem) return;
        wishListItems.push(car)
        wishlistUpdate()
    })
}

let removeCartItem = (id) => {
    cartItems = cartItems.filter(item => item.id !== id)
    cartUpdate()
}

let addCartItem = (car) => {

    let template = `
        <div div class="cart-item ${car.id}" id="ci-${car.id}"> 
            <div class="ci-info">
                <div class="cii name">${car.name}</div>
                <div class="cii price">$${car.price}</div>
                <div class="cii amount">${car.amount} pieces</div>
            </div>
            <div class="ci-controls"> 
                <div class="ci remove-cart"id="cr-${car.id}">Remove</div>
            </div>
        </div >
        `

    let $item = $(template);
    let amount = parseInt(car.amount)
    cartTotalSum += car.price * amount

    $("#cart-items").append($item)

    $("#cart-total").text(`Total: $${cartTotalSum}`)

    $("#cr-" + car.id).on("click", () => {
        removeCartItem(car.id)
    })
}

let removeWishListItem = (id) => {
    wishListItems = wishListItems.filter(item => item.id !== id)
    wishlistUpdate()
}

let addWishItem = (car) => {

    let template = `
        <div class="wish-item ${car.id}"id="wi-${car.id}"> 
                <div class="wi-info">
                <div class="wii name">${car.name}</div>
                <div class="wii price">$${car.price}</div>
            </div>
            <div class="wi-controls"> 
                <div class="wi remove-cart"id="wr-${car.id}">Remove</div>
            </div>
        </div>
    `
    let $item = $(template);
    wishListItems.some(item => "wi-" + item.id === car.id)
        ? ''
        : $(".wishlist").append($item)

    $("#wr-" + car.id).on("click", () => {
        removeWishListItem(car.id)
    })

}

$("#checkout").on("click", () => {
    alert(`Your spent total of $${cartTotalSum}`)
    cartItems = []
    cartUpdate()
})


init()