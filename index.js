// Write code that defines an E6 class called Car that creates a new object using a constructor with the following properties: make, model, and year.
// Add a method called getDescription to the Car class, which returns a string containing information about the car.
class Car{
  constructor(year, make, model){
    this.year = year;
    this.make = make;
    this.model = model;
  }
  getDescription(){
    return `This car is a ${this.year} ${this.make} ${this.model}`;
  }
}

// Define the ElectricCar class as a subclass of Car. Include an additional property called range that represents the range of 
//the electric car in miles.
// Have the ElectricCar class override the getDescription method of the Car class with a new implementation that includes information 
//about the range of the electric car.

class ElectricCar extends Car{
  constructor(year, make, model, range){
    super(year, make, model)
    this.range = range || `300 mile`
  }
  getDescription(){
    return `${super.getDescription()}, and has a ${this.range} range`
  }
}
// Create an instance of ElectricCar with the make "Tesla", model "Model S", year 2019, and range 300, and the getDescription method is 
//called on the instance. The output will be a string containing the make, model, year, and range of the electric car.

const car1 = new Car(`Jeep`, `Trackhawk`, `2018`);
console.log(car1.getDescription());

const elecCar = new ElectricCar(`Tesla`, `Model S`, `2019`);
console.log(elecCar.getDescription());




