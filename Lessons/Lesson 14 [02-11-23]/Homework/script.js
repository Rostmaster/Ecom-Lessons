console.clear()
let titleInsert = (tag, text) => {
    document.write("<" + tag + ">" + text + "</" + tag + ">")
}

let insertTag = (tag) => {
    document.write("<" + tag + ">")
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

// ===========================================================
titleInsert("h3", "Exersise 9:")

let insertMatrix = (matrix) => {
  insertTag("table")
  for(let row of matrix){
    insertTag("tr")
     for(let cell of row)
       titleInsert('td',cell)
       insertTag("/tr")
  }
    insertTag("/table")
}

let matrix = [
  [1,2,3,4],
  [1,2,3,4],
  [1,2,3,4],
]

insertMatrix(matrix)

// ===========================================================
titleInsert("h3", "Exersise 10:")

let countInMatrix = (value, matrix) =>{
  let count = 0
  for(let row of matrix)
     for(let cell of row)
        cell===value?count++:''
  titleInsert('h5', 'There are '+count+' of value '+value+' in :')
  insertMatrix(matrix)
}

countInMatrix(2, matrix)

// ===========================================================
titleInsert("h3", "Exersise 11:")

let insertRepeated = (arr) =>{
  let counter = []
  let count = 0
  
  for(let i = 0; i < arr.length; i++){
    for (let pointer = i; pointer < arr.length; pointer++){ 
       arr[i] === arr[pointer]?count++:''
     }
    count > 1 ?counter.push(arr[i]):''
    count = 0
  }
  counter = [... new Set(counter)]
  for(let el of counter)
    document.write(el + " ")
}
  
let repeatedArr = [1,1,1,2,3,4,2,5,6,6]

insertRepeated(repeatedArr)

// ===========================================================
titleInsert("h3", "Exersise 12:")

let insertReversedArr = (arr) =>{
  let reversed = []
  for(let i = arr.length-1; i >=0;i--)
    reversed.push(arr[i])
  
  for(let el of reversed)
    document.write(el+' ')
  document.write("<br>")
}

let array = [43,'what', 9 , true, "cannot", false, "be", 3, true]
insertReversedArr(array)

// ===========================================================
titleInsert("h3", "Exersise 13:")

let sumArr = (arr1, arr2) => {
  if(!arr1.length) return
  if(!arr2.length) return
  
  let shortest = arr1.length > arr2.lenght ? arr1.length : arr2.length
  let largest  = arr1.length > arr2.lenght ? arr2.length : arr1.length
  console.log(shortest)
  console.log(largest)

  let result = []
  for(let i = 0; i < shortest; i++)
     result[i] = arr1[i] + arr2[i]
  for(let i = shortest; i < largest; i++){
    result[i] = arr1.length === largest ? arr1[i] : arr2[i]
  }
  return result
}

let arr1 = [1,2,3,4,6]
let arr2 = [2,1,0,-1,5]


document.write(sumArr(arr1,arr2))


// ===========================================================

titleInsert("h3", "Exersise 14:")

let isPalindrome =  (str) => {
  for(let i = 0; i < str.length/2; i++)
    if(str[i] !== str[str.length-1-i]) return false
  return true
}

let str3 = "racecar"
let str4 = "Java"
let str5 = "okooko"

titleInsert("h5",str3 +" is palindrome?: "+ isPalindrome(str3))

titleInsert("h5",str4 +" is palindrome?: "+ isPalindrome(str4))

titleInsert("h5",str5 +" is palindrome?: "+ isPalindrome(str5))

// ===========================================================

titleInsert("h3", "Exersise 15:")

let counter = 1
while (counter < 100) {
  document.write(counter+" ")
  counter*=2
  
}


// ===========================================================
titleInsert("h3", "Exersise 16:")

counter = 900000; while (counter > 50) { 
  document.write(counter+'<br>')
  counter /= 2
}



// ===========================================================

titleInsert("h3", "Exersise 17:")

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor']
let copiedNames = []
let index = 0
while (index < names.length) { 
  copiedNames[index] = names[index]
  index++
} 

document.write(copiedNames)
// => ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor']
// ===========================================================

titleInsert("h3", "Exersise 18:")

names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor']
copiedNames = []
index = 0

while (index < names.length) { 

  if(names[index] === 'Pete') break
  copiedNames[index] = names[index]

  index++

} 

document.write(copiedNames)

// => ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor']

// 

// ===========================================================

titleInsert("h3", "Exersise 19:")

let successiveValues = (arr) => {
  for (let i = 1; i < arr.length; i++)
    if(arr[i] === arr[i-1]) 
      return i
  return -1
}

let checkarr = [true, false, true, false, false]
document.write("<b>"+checkarr+"</b>  successive values check is "+ successiveValues(checkarr))

