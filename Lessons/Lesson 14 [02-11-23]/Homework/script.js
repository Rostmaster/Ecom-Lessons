console.clear()
let titleInsert = (tag, text) => {
    document.write("<" + tag + ">" + text + "</" + tag + ">")
}


// ===========================================================
titleInsert("h3", "Exersises 1-3 :")
//The requested result
let printRangeFor = (start, stop, step = 1) => {
    for (let i = start;
        start < stop ? i <= stop : i >= stop;
        start < stop ? i += step : i -= step)
        document.write(i, " ")
    document.write("<br><br>")
}

titleInsert("h4", "Using for loop:")

printRangeFor(12, 24)
printRangeFor(24, 10)
printRangeFor(17, 31, 2)
printRangeFor(10, 20, 2)

//Bonus
let printRangeWhile = (start, stop, step = 1) => {
    let i = start
    while (start < stop ? i <= stop : i >= stop) {
        document.write(i, " ")
        start < stop ? i += step : i -= step
    }
    document.write("<br><br>")
}
titleInsert("h4", "Using while loop:")
printRangeWhile(12, 24)
printRangeWhile(24, 10)
printRangeWhile(17, 31, 2)
printRangeWhile(10, 20, 2)


// ===========================================================
titleInsert("h3", "Exersise 4 \"FizzBuzz\":")

let FizzBuzz = (end = 45) => {
    document.write("<ul>")
    for (let i = 1; i <= end; i++) {
        if (i % 3 === 0 || i % 5 == 0) {
            document.write("<li>" + i + ": ")
            i % 3 === 0 ? document.write("Fizz") : ''
            i % 5 === 0 ? document.write("Buzz") : ''
            document.write("</li>")
        }
    }
    document.write("</ul>")
}

FizzBuzz()


// ===========================================================
titleInsert("h3", "Exersise 5:")

//requested result
let sum = (arr) => {
    sum = 0
    for (let element of arr)
        sum += element
    return sum
}

let arr = [1, 13, 22, 123, 49, 34, 5, 24, 57, 45]

document.write("Sum of [" + arr + "] = " + sum(arr))
document.write("<br>")

//bonus
document.write("Sum of [" + arr + "] = " + arr.reduce((acc, elem) => acc + elem))

// ===========================================================
titleInsert("h3", "Exersise 6:")

//requested result
let deleteProperty = (object, property) => {
    delete object[property];
}

let printObject = (obj) => {
    document.write('<ul>')
    for (const [key, value] of Object.entries(obj)) {
        document.write(`<li>${key}: ${value} </li>`);
    }
    document.write('</ul>')

}

let person = {
    id: 123,
    firstName: "Name",
    lastName: "Last Name",
    age: 55,
    country: "US",
    city: "Texas"
}

printObject(person)

deleteProperty(person, "id")

printObject(person)


// ===========================================================
titleInsert("h3", "Exersise 7:")

let isIterable = obj => {
    if (obj == null) {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}

let insertList = arr => {
    for (element of arr)
        document.write('<li>' + element + "</li>")
}

//requested result

let displayProperty = (arr, property) => {
    document.write("<ul>")
    for (let element of arr) {
        for (const [key, value] of Object.entries(element)) {
            if (key === property) {
                isIterable(value) && typeof value !== 'string'
                    ? insertList(value)
                    : document.write('<li>' + value + '</li>')
            }
        }
    }
    document.write("</ul>")
}

const ourPets = [
    {
        animalType: "cat",
        names: [
            "Meowzes",
            "Fluffy",
            "kit=Cat"
        ]
    },
    {
        animalType: "dog",
        names: [
            "Spot",
            "Bowser",
            "Frankie"
        ]
    }
]

displayProperty(ourPets, "animalType")
displayProperty(ourPets, "names")

// ===========================================================
titleInsert("h3", "Exersise 8:")

// 1
let printStudent = (obj) => {
    document.write("<ul>")
    for (const [key, value] of Object.entries(obj)) {
        document.write("<li>" + key + ": " + value + "</li>")
    }
    document.write("</ul>")
}

// 2
let addHobby = (obj, hobby) => {
    obj.hobbies.push(hobby)
}

// 3
let haveHobby = (obj, hobby) => {
    obj.hobbies.includes(hobby)
        ? document.write("Student " + obj.name + " has hobby " + hobby + "<br>")
        : document.write("Student " + obj.name + " does not have hobby " + hobby+"<br>")
}

// 4
let deleteHobby = (obj, hobby) => {
    obj.hobbies.splice(obj.hobbies.indexOf(hobby), 1)
    document.write(hobby + " deleted from student's hobbies " + obj.name + "<br>")
}

// 5
//NOT CLEAR!!!


// 6
let addLastName = (obj, lastName) => {
    obj.lastName = lastName
}

const student = {
    name: "John",
    age: 25,
    hobbies: ["reading", "coding", "games"]
}

printStudent(student)

addHobby(student, "golf")
printStudent(student)

haveHobby(student, "golf")

deleteHobby(student, "golf")
haveHobby(student, "golf")

addLastName(student,"Doe")
printStudent(student)