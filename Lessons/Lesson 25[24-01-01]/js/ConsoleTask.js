/*
? ______ ______  _______    ___      _______         _          
?(_____ (______)(_______)  (___)    (_______)       | |         
? _____) )     _ _____        _         _ _____  ___| |  _  ___ 
?|  ____/ |   | |  ___)      | |       | (____ |/___) |_/ )/___)
?| |    | |__/ /| |         _| |_      | / ___ |___ |  _ (|___ |
?|_|    |_____/ |_|        (_____)     |_\_____(___/|_| \_|___/ 
*/


let write = (message, result) => {
    console.log(
        `%c⁍ ${message}\n\t%c` + result,//console output
        'background: #222; color: #bada55',// message style
        'background: #222; color: #bada')// result style
}

//==========================Task 1===========================
let numbers = [2, 4, 6, 8, 10]
let mult3numbers = numbers.map(number => number * 3)
write(`Numbers [${numbers}] multiplied by 3:`, mult3numbers)

//==========================Task 2===========================
numbers = [2, 4, 6, 8]
let indexOfBiggerThan10 = numbers.findIndex(number => number > 10)
indexOfBiggerThan10 = indexOfBiggerThan10 === -1 ? false : indexOfBiggerThan10
write(`Index of first bigger than 10 in [${numbers}]:`, indexOfBiggerThan10)

//==========================Task 3===========================
numbers = [3, 6, 9, 12, 15, 18, 21, 24, 27]
let arrayIsMode3 = numbers.every(number => number % 3 === 0)
write(`Array [${numbers}]:`, arrayIsMode3? "All numbers are mode 3": "Not all numbers are mode 3")

//==========================Task 4===========================
numbers = [3, 6, 9, 12, 15, 1]
let containBiggerThan10 = numbers.some(number => number > 10)
write(`Array [${numbers}]:`, containBiggerThan10? "Contain bigger than : 10": "Does not contain bigger than 10")

//==========================Task 5===========================
let array = [1, 'a', 2, 'b', 3, 'c', 4, 'd']
let onlyStrings = array.filter(item => typeof item ==='string')
write(`Strings of the array [${array}]:`, onlyStrings)

//==========================Task 6===========================
numbers = [2, 4, 6, 8]
let firstBiggerThan5 = numbers.findIndex(number => number > 5)
firstBiggerThan5 = firstBiggerThan5 === -1 
? write(`Array [${numbers}]:`, 'No bigger than 6 in array')
: write(`First bigger than 6 in [${numbers}]:`, numbers[firstBiggerThan5])

//==========================Task 7============================
numbers = [2, 4, 6, 8, 10]
let mult2numbers = numbers.map(number => number * 2)
write(`Numbers [${numbers}] multiplied by 2:`, mult2numbers)

//============================Task 8===========================
numbers = [3, 6, 9, 12, 15, 1]
let ifSmallerThan10 = !numbers.some(number => number > 10)
write(`Array [${numbers}]:`, ifSmallerThan10? "All the numbers are smaller than 10": "Not all the numbers are smaller than 10")

//==========================Task 9===========================
numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let evenNumbers = numbers.filter(number => number % 2 === 0)
write(`Even numbers of the array [${numbers}]:`, evenNumbers)

//==========================Task 10===========================
let fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Pineapple']
let extendedFruits = fruits.map(fruit => `${fruit}-extended`.toUpperCase())
write(`Fruits [${fruits}] extended to uppercase:`, extendedFruits)

//==========================Task 11===========================
let words = ['hello','world', 'programming', 'is', 'awesome']
let firstWordBiggerThan5 = words.findIndex(word => word.length > 5)
write(`Array [${words}] index of the first word longer than 5 letters:`, firstWordBiggerThan5)

//==========================Task 12===========================
let animals = ['Dog', 'Cat', 'Horse', 'Cow', 'Sheep']
let atLeast3Letters = animals.every(animal => animal.length >= 3)
write(`Animals [${animals}] longer than 3 letters:`, atLeast3Letters)

//==========================Task 13===========================
fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Pineapple']
let containELetter = fruits.filter(fruit => fruit.includes('e'))
write(`Fruits [${fruits}] containing 'e':`, containELetter)

//==========================Task 14===========================
fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Pineapple']
let firstContainsB = fruits.findIndex(fruits => fruits.toLowerCase().includes('b'))
firstContainsB == -1
? write(`Fruits [${fruits}] first element containing 'b':`, "there is no 'b' in fruits")
: write(`Fruits [${fruits}] first element containing 'b':`, fruits[firstContainsB])
