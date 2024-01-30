class Car{
    constructor(name="", year=2024, km=0, price=100000){
        this.name = name
        this.year = year
        this.km = km
        this.price = price
    }
    getStats = () => {
      return [this.name, this.year, this.km, this.price]
    }
}

module.exports = Car