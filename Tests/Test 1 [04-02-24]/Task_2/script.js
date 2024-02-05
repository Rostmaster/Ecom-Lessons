
let DB = {
    TVs: [
        {
            id: 1,
            icon: "https://source.unsplash.com/random/50×50/?TV",
            store: 'City Store',
            address: '123 Street',
            city: 'Haifa',
            price: 1000,
            link: 'https://www.desertcart.co.il/search/tvs',
            rate: 5
        },
        {
            id: 2,
            icon: "https://picsum.photos/50/50",
            store: 'X-Market',
            address: 'Bangor Street',
            city: 'Haifa',
            price: 1000,
            link: 'https://www.21.tv/cn-3303/שופ_אמריקה_בישראל',
            rate: 4
        },
        {
            id: 3,
            icon: "https://random.imagecdn.app/50/50",
            store: 'City Store',
            address: '123 Street',
            city: 'Haifa',
            price: 100,
            link: 'https://www.bestbuy.com/site/tv-home-theater/tvs/abcat0101000.c?id=abcat0101000',
            rate: 5
        },
        {
            id: 4,
            icon: "https://source.unsplash.com/random/50×51/?TV",
            store: 'X-Market',
            address: 'Bangor Street',
            city: 'Haifa',
            price: 100,
            link: 'https://zabilo.com/en/40-tvs-55-59',
            rate: 2
        },
        {
            id: 5,
            icon: "https://source.unsplash.com/random/51×50/?TV",
            store: 'City Store',
            address: '123 Street',
            city: 'Haifa',
            price: 1000,
            link: 'https://tv-shop.co.il/',
            rate: 1
        }, {
            id: 6,
            icon: "https://random.imagecdn.app/50/51",
            store: 'City Store',
            address: '123 Street',
            city: 'Haifa',
            price: 500,
            link: 'https://tv-shop.co.il/magazin/folder/vse-dlya-doma',
            rate: 5
        }
    ]
}

let displayItems = []

let openForm = () => $('#myForm').show()

let closeForm = () => {
    $('#myForm').hide()
    $('#cNumber').val('')
    $('#cDate').val('')
    $('#cvv').val('')
}

let initDB = () => {
    DB.TVs.forEach(item => displayItems.push({ ...item, selected: false }))
}

let addRow = (index, item) => {
    template = `
        <tr class="r${item.rate} ">
            <td class="r${item.rate}">${index}</td>
            <td class="r${item.rate}"><img src="${item.icon}"></img></td>
            <td class="r${item.rate}">${item.store}</td>
            <td class="r${item.rate}">${item.address}</td>
            <td class="r${item.rate}">${item.city}</td>
            <td class="r${item.rate}">$${item.price}</td>
            <td class="r${item.rate}"><a href = "${item.link}">View on site</a></td>
            <td class="r${item.rate}">${item.rate}</td>
            <td class="r${item.rate}">
                <div class="controls">
                    <div class="delete-btn" id="d-${item.id}">-</div>
                    <div class="buy-btn ${item.selected ? "selected" : ""}" id="b-${item.id}">$</div>
                </div>
            </td>
        </tr>
    `
    let $item = $(template);
    $("#tableBody").append($item)

    $(`#d-${item.id}`).on("click", () => {
        displayItems = displayItems.filter(product => product.id !== parseInt(item.id))
        updateRows()
    })
    $(`#b-${item.id}`).on("click", () => {
        //find item and set the selected key to true
        item = displayItems.find(product => product.id === parseInt(item.id))

        $('#storeL').text(`${item.store}`)
        $('#priceL').text(`$${item.price}`)
        openForm()
    })
}

let updateRows = () => {
    $("#tableBody").empty()
    displayItems.forEach((item, index) => addRow(index + 1, item))
}

let bestOption = () => {
    //the function that finds the highest rate item and then lowest price along with that rate inside displayItems
    let highestRate = displayItems.reduce((best, curr) => best.rate > curr.rate ? best : curr).rate
    let ratedItems = displayItems.filter(item => item.rate === highestRate)
    let bestItem = ratedItems.reduce((best, curr) => best.price < curr.price ? best : curr)
    return `#${bestItem.id} with price of ${bestItem.price} `
}

let updateInfo = () => {
    $('#average').text(`Average: $${Math.ceil(displayItems.reduce((a, b) => a + b.price, 0) / displayItems.length)}`)
    $('#best').text(`Best option: ${bestOption()}`)
}



let init = () => {
    initDB()
    updateRows()
    updateInfo()
}

let checkout = () => {
    closeForm()
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "You spent some money!",
        showConfirmButton: false,
        timer: 1500
    });
}
init()





