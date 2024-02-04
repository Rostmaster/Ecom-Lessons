let write = (message, result) => {
    console.log(
        `%c⁍ ${message}\n\t%c` + result,//console output
        'background: #222; color: #bada55',// message style
        'background: #222; color: #bada')// result style
}

//=================================Task 1======================================
let numbers = [1, 2, 3, 4, 5, 6]
let mult5numbers = numbers.map(item => item * 5)
write(`Numbers: ${numbers} `, `multiplied by 5: ${mult5numbers}`)

//=================================Task 2======================================
numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55,]
let indexOfBiggerThan12 = numbers.findIndex(item => item > 12)
write(`Numbers: ${numbers}`, `index of the first num bigger than 12: ${indexOfBiggerThan12}`)

//=================================Task 3======================================
numbers = [6, 12, 18, 24, 30, 36, 42]
let divBy6 = numbers.every(item => item % 6 === 0)
write(`Numbers: ${numbers}`, `Is every item divisible by 6?: ${divBy6 ? 'Yes' : 'No'}`)

//=================================Task 4======================================
numbers = [-1, -2, -3, -4, -5, -6, -7, 21]
let biggerThan20 = numbers.some(item => item > 20)
write(`Numbers: ${numbers}`, `Is any item bigger than 20?: ${biggerThan20 ? 'Yes' : 'No'}`)

//=================================Task 5======================================
let arr = ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5, 'f', 6, 'g', 7, 'h', 8, 'i', 9, 'j', 10, 'k', 11]
let chars = arr.filter(item => typeof item === 'string')
write(`Array: ${chars}`, `The chars are: ${chars}`)

//=================================Task 6======================================
arr = ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5, 'f', 6, 'g', 7, 'h', 8, 'i', 9, 'j', 10, 'k', 11]
let firstNumberBiggerThan5 = arr.find(item => typeof item !== 'string' && item > 5)
write(`Array: ${arr}`, `The first number bigger than 5: ${firstNumberBiggerThan5}`)

//=================================Task 7======================================
numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
let mult2numbers = numbers.map(item => item * 2)
write(`Numbers: ${numbers}`, `multiplied by 2: ${mult2numbers}`)

//=================================Task 8======================================
numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
let everyNumberLessThan9 = numbers.every(item => item < 9)
write(`Numbers: ${numbers}`, `All the numbers less than 9?: ${everyNumberLessThan9 ? 'Yes' : 'No'}`)

//=================================Task 9======================================
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
let oddNumbers = numbers.filter(item => item % 2 === 1)
write(`Numbers: ${numbers}`, `The odd numbers: ${oddNumbers}`)

//=================================Task 10======================================
let fruits = ['apple', 'banana', 'cherry', 'grape', 'mango']
let javaFruits = fruits.map(item => `${item}-java`)
write(`Fruits: ${fruits}`, `Java fruits: ${javaFruits}`)

//=================================Task 11======================================
let animals = ['I', 'Ox', 'Cat', 'Goat', 'Tiger']
let longThan2 = animals.findIndex(item => item.length > 2)
write(`Animals: ${animals}`, `Index of first animal longer than 2 letters: ${longThan2}`)

//=================================Task 12======================================
animals = ['I', 'Ox', 'Cat', 'Goat', 'Tiger', 'Lion', 'Zebra']
let everyLongerThan3 = animals.every(item => item.length >= 4)
write(`Animals: ${animals}`,
    `Is every animal longer or equal to 4 letters?: ${everyLongerThan3 ? 'Yes' : 'No'}`)

//=================================Task 13======================================
let berries = ['strawberry', 'blueberry', 'cherry', 'grape', 'watermelon']
let includesB = berries.some(item => item.includes('b'))
write(`Berries: ${berries}`, `At least one item includes b?: ${includesB ? 'Yes' : 'No'}`)

//=================================Task 14======================================
fruits = ['apple', 'banana', 'cherry', 'grape', 'mango']
let endWithE = fruits.filter(item => item.endsWith('e'))
write(`Fruits: ${fruits}`, `End with e: ${endWithE}`)

//=================================Task 15======================================
berries = ['strawberry', 'blueberry', 'cherry', 'grape', 'watermelon']
let firstIncludesB = berries.find(item => item.includes('b'))
write(`Berries: ${berries}`, `First item includes b: ${firstIncludesB}`)

//=================================JSON object======================================
let prisoner = {
    id: crypto.randomUUID(),
    name: 'John',
    familyName: 'Doe',
    age: 30,
    isMarried: true,
    address: {
        street: '123 Main Street',
        building: 1486,
        apartment: 5,
        city: 'London',
        country: 'United Kingdom',
        zipCode: 2588,
    },
    crimes: ['robbery', 'assault', 'fraud'],
    sentences: {
        robbery: { victims: 25, years: 5, earlyConditionalRelease: false },
        assault: { victims: 2, years: 15, earlyConditionalRelease: false },
        fraud: { victims: 150, years: 25, earlyConditionalRelease: true },
    },
    get yearsPenalty() { return Object.keys(this.sentences).reduce((years, crime) => years + this.sentences[crime].years, 0) }

}

document.getElementById('json').innerHTML = JSON.stringify(prisoner, undefined, 4);
