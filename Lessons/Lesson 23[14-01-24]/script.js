let write = (message, result) => {
    console.log(
        `%c⁍ ${message}\n\t%c` + result,//console output
        'background: #222; color: #bada55',// message style
        'background: #222; color: #bada')// result style
}

//==========================Task 1===========================
let celsiusT = [-60, -40, -20, 0, 20, 40, 60, 80, 100, 120, 140, 160]
let fahrenheitT = celsiusT.map(temp => (temp * 9 / 5) + 32)
write(`Celsius [${celsiusT}] converted to Fahrenheit:`, fahrenheitT)

//==========================Task 2===========================
const names = ["Alice", "Bob", "Charlie"]
let newNames = names.map(name => `Hello ${name}`)
write(`Names [${names}]with hello addition:`, newNames)

//==========================Task 3===========================
let numbers = [2, -4, 5, -8]
let invertedNumbers = numbers.map(number => number * -1)
write(`Inverted [${numbers}]:`, invertedNumbers)

//==========================Task 4===========================
numbers = [10, 20, 30, 40]
let sum = numbers.reduce((a, b) => a + b, 0)
write(`Sum of array [${numbers}]:`, sum)

//==========================Task 5===========================
const words = ['JavaScript', 'is', 'awesome']
let sentence = words.join(' ')
write(`Sentence from array [${words}]:`, sentence)

//==========================Task 6===========================
numbers = [2, 4, 6, 8, 10]
let areAllEven = numbers.every(number => number % 2 === 0)
write(`Array [${numbers}]:`, areAllEven ? "All numbers are even" : "Not all numbers are even")

//==========================Task 7===========================
let complexNumbers = [[1, 2, 3], [4, 5, 6]]
let flattenedNumbers = complexNumbers.reduce((a, b) => a.concat(b), [])
write(`Flattened array [${complexNumbers}]:`, flattenedNumbers)