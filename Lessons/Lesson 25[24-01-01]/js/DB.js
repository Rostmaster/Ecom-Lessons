import { Car } from './car.js'

let DB = {
    cars : [],
}

DB.cars.push(new Car('Audi', 2019, 15678, 60000))
DB.cars.push(new Car('BMW', 2019, 186653, 220000))
DB.cars.push(new Car('Mercedes', 2019, 751568, 100000))
DB.cars.push(new Car('Volvo', 2019, 11480, 1520))

module.exports = DB