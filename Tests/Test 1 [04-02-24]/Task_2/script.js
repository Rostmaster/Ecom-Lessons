let DB = {
    TVs: [
        {
            id: 1,
            icon: "https://via.placeholder.com/50x50",
            store: 'City Store',
            address: '123 Street',
            city: 'Haifa',
            price: 1000,
            link: 'https://www.google.com',
            rate: 5
        },
        {
            id: 2,
            icon: "https://via.placeholder.com/50x50",
            store: 'X-Market',
            address: 'Bangor Street',
            city: 'Haifa',
            price: 1000,
            link: 'https://www.google.com',
            rate: 4
        },
        {
            id: 3,
            icon: "https://via.placeholder.com/50x50",
            store: 'City Store',
            address: '123 Street',
            city: 'Haifa',
            price: 1000,
            link: 'https://www.google.com',
            rate: 3
        },
        {
            id: 4,
            icon: "https://via.placeholder.com/50x50",
            store: 'X-Market',
            address: 'Bangor Street',
            city: 'Haifa',
            price: 1000,
            link: 'https://www.google.com',
            rate: 2
        },
        {
            id: 5,
            icon: "https://via.placeholder.com/50x50",
            store: 'City Store',
            address: '123 Street',
            city: 'Haifa',
            price: 1000,
            link: 'https://www.google.com',
            rate: 1
        }, {
            id: 5,
            icon: "https://via.placeholder.com/50x50",
            store: 'City Store',
            address: '123 Street',
            city: 'Haifa',
            price: 100,
            link: 'https://www.google.com',
            rate: 5
        }
    ]
}

let displayItems = []

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
            <td class="r${item.rate}"><a link = "${item.link}">View on site</a></td>
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

    })
}

let updateRows = () => {
    $("#tableBody").empty()
    displayItems.forEach((item, index) => addRow(index + 1, item))
}

let bestOption = () => {
    let bestRate = displayItems.reduce((a, b) => a.rate > b.rate ? a : b)
    let bestItems = bestRate.filter(product => product.rate === bestRate.rate)
    let bestItem = bestItems.reduce((a, b) => a.price < b.price ? a : b)
}

let updateInfo = () => {
    $('#average').text(`Average: $${displayItems.reduce((a, b) => a + b.price, 0) / displayItems.length}`)
    $('#best').text(`Best option: ${bestOption()}`)
}

let init = () => {
    initDB()
    updateRows()
    updateInfo()
}

init()





