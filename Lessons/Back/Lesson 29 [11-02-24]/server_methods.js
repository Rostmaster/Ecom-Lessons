const API = 'http://localhost:3000/users/';

//? Get all users
function get_users() {
    fetch('http://localhost:3000/users/')
        .then(response => {
            if (response.status === 404) {
                document.write('Not found')
                return null;
            }
            return response.json()
        })
        .then(users => {
            console.log(users);
            // getElementsByTagName returns array
            // therefor we use the first element in the array == [0]
            const tbody = document.getElementById('users_table').getElementsByTagName('tbody')[0]
            tbody.innerHTML = '';

            if (users == null)
                return;

            users.forEach(user => insert_row(user, tbody));
        })
}
function insert_row(user, table) {
    const new_row = document.createElement('tr')
    insert_cell(new_row, user.id)
    insert_cell(new_row, user.name)
    insert_cell(new_row, user.username)
    insert_cell(new_row, user.email)
    insert_cell(new_row, user.address.city)
    insert_cell(new_row, user.phone)
    insert_cell(new_row, user.website)
    table.appendChild(new_row)
}
function insert_cell(new_row, data) {
    const new_cell = document.createElement('td')
    new_cell.textContent = data
    new_row.appendChild(new_cell)
}

get_users();

//? get user

function get_user_by_id() {
    console.clear()
    let user_id = document.getElementById("get_id").value

    fetch(API + user_id)
        .then((response) => {
            if (response.status === 404) {
                return {
                    id: "No",
                    name: "Such",
                    username: "User",
                    email: "Was",
                    address: { city: "Found" },
                    phone: "In",
                    website: "Database",
                };
            }
            return response.json();
        })
        .then((user) => {
            console.log(user);
            if (user == null) return;

            const tbody = document
                .getElementById("users_table")
                .getElementsByTagName("tbody")[0];
            tbody.innerHTML = "";

            insert_row(user, tbody);
        });
}


//? update user 

function update_user() {
    event.preventDefault();

    const new_user = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        address: { city: document.getElementById("city").value },
        phone: document.getElementById("phone").value,
        website: document.getElementById("website").value,
    };

    const details = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(new_user),
    };

    fetch(API+ document.getElementById("id").value, details)
        .then((response) => response.json)
        .then((data) => console.log('user updated'))
        .catch((error) => console.log(error));
}

//? add user 
function add_user() {
    event.preventDefault();

    const new_user = {
        name: document.getElementById("name").value,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        address: { city: document.getElementById("city").value },
        phone: document.getElementById("phone").value,
        website: document.getElementById("website").value,
    };

    const details = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(new_user),
    };

    fetch(API, details)
        .then((response) => response.json)
        .then((data) => console.log(`new user created`))
        .catch((error) => console.log(error));
}


//? delete user 

function delete_user() {
    fetch(API + document.getElementById("delete_id").value, {
        method: 'DELETE',
    })
        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))
}