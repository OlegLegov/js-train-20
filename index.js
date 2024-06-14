/*
 * Функція конструктор: Vehicle
 * Властивості:
 * --------------------------------------
 * | Аргументи  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 */

// Створюємо функцію конструктор Vehicle.
function Vehicle(brand, model, year, mileage) {
  //  Записуєм в this.brand значення аргументу brand, в this.model значення аргументу model і так далі зі всіми аргументами
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
}

// Рядковому представленю Vehicle призначаємо функцію яка повертає рядок: <brand> <model> <year>

// valueOf - це метод, який використовується JavaScript для конвертації об'єкта в примітивне значення.
// Ми перевизначаємо його тут, щоб він повертав this.mileage.

// Додаємо метод toString до прототипу Vehicle
Vehicle.prototype.toString = function () {
  return `${this.brand} ${this.model} ${this.year}`;
};

// Перевизначаємо метод valueOf для Vehicle, щоб він повертав пробіг
Vehicle.prototype.valueOf = function () {
  return this.mileage;
};

/*
 * Функція конструктор: Car
 * Властивості:
 * ----------------
 * | Властивість  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 * | fuelType     |
 * | speed        |
 */

//Створюємо Car - це ще один конструктор, який наслідує властивості і методи з Vehicle за допомогою функції apply.
function Car(brand, model, year, mileage, fuelType, speed) {
  // Викликаємо конструктор Vehicle за допомогою apply, передаємо в нього this, [brand, model, year, mileage].
  //  Записуєм в this.fuelType значення аргументу fuelType, в this.speed значення аргументу speed
  Vehicle.apply(this, [brand, model, year, mileage]);

  // Додаткові властивості для Car
  this.fuelType = fuelType;
  this.speed = speed;
}

// Ми можемо перевизначити методи з Vehicle в Car.
// Рядковому представленю прототипу Car призначаємо функцію яка повертає рядок: <brand> <model> <year> - <fuelType>.

// Cтворюємо метод accelerate для прискорення швидкості прототипу Car, збільшує this.speed на передане число та виводить рядок в консоль: Автомобіль <brand> <model> прискорився до швидкості <speed> км/год

// Метод brake для гальмування прототипу Car,зменшує this.speed на передане число та виводить рядок в консоль в консоль: Автомобіль <brand> <model> зменшив до швидкості <speed> км/год

// Створюємо новий екземпляр об'єкта Car
/*
 * Екземпляр об'єкту: Car
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Значення           |
 * |--------------|---------------------|
 * | brand        |  "Audi"             |
 * | model        |  "A6"               |
 * | year         |  2018               |
 * | mileage      |  30000              |
 * | fuelType     |  "Petrol"           |
 * | speed        |  0                  |
 */

// Викличемо функції toString та valueOf об'єкта car

// Використовуємо методи для прискорення та передаємо 50

// Використовуємо методи для гальмування та передаємо 20

// Наслідування прототипу Vehicle
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Перевизначення методу toString для Car
Car.prototype.toString = function () {
  return `${this.brand} ${this.model} ${this.year} - ${this.fuelType}`;
};

// Метод для прискорення
Car.prototype.accelerate = function (amount) {
  this.speed += amount;
  console.log(
    `Автомобіль ${this.brand} ${this.model} прискорився до швидкості ${this.speed} км/год`
  );
};

// Метод для гальмування
Car.prototype.brake = function (amount) {
  this.speed -= amount;
  console.log(
    `Автомобіль ${this.brand} ${this.model} зменшив швидкість до ${this.speed} км/год`
  );
};

// Створення нового екземпляра об'єкта Car
let myCar = new Car("Audi", "A6", 2018, 30000, "Petrol", 0);

// Викликати функції toString та valueOf об'єкта myCar
console.log(myCar.toString()); // Audi A6 2018 - Petrol
console.log(myCar.valueOf()); // 30000

// Використати методи для прискорення та передати 50
myCar.accelerate(50); // Автомобіль Audi A6 прискорився до швидкості 50 км/год

// Використати методи для гальмування та передати 20
myCar.brake(20); // Автомобіль Audi A6 зменшив швидкість до  30 км/год

/*
 * Функція конструктор Truck
 * Властивості:
 * --------------------
 * | Властивість      |
 * |------------------|
 * | brand            |
 * | model            |
 * | year             |
 * | mileage          |
 * | color            |
 * | engineType       |
 * | towingCapacity   |
 * | fuelType         |
 * | transmissionType |
 * | doors            |
 * | weight           |
 */

// Конструктор Truck наслідуємо Vehicle викликавши його в конструкторі з call
function Truck(
  brand,
  model,
  year,
  mileage,
  color,
  engineType,
  towingCapacity,
  fuelType,
  transmissionType,
  doors,
  weight
) {
  // Викликаємо Vehicle.call та передаємо в нього: this, brand, model, year, mileage
  Vehicle.call(this, brand, model, year, mileage);
  //  Записуєм в this.color значення аргументу color, в this.engineType значення аргументу engineType і так далі зі всіми аргументами
  // Додаткові властивості для Truck
  this.color = color;
  this.engineType = engineType;
  this.towingCapacity = towingCapacity;
  this.fuelType = fuelType;
  this.transmissionType = transmissionType;
  this.doors = doors;
  this.weight = weight;
}

// Додатковий метод specific для прототипу Trucks, примає число якщо воно більше towingCapacity виводить рядок в консоль: Навантаження занадто важке для буксирування, якщо ні то рядок Тягнення навантаження...

// Створюємо новий екземпляр об'єкта Truck
/*
 * Екземпляр об'єкту: myTruck
 * Властивості:
 * ---------------------------------------------------
 * | Властивість      | Значення                     |
 * |------------------|------------------------------|
 * | brand            | "Toyota"                     |
 * | model            | "Tundra"                     |
 * | year             | 2019                         |
 * | mileage          | 20000                        |
 * | color            | "Red"                        |
 * | engineType       | "V8"                         |
 * | towingCapacity   | 10000                        |
 * | fuelType         | "Gasoline"                   |
 * | transmissionType | "Automatic"                  |
 * | doors            | 4                            |
 * | weight           | 5600                         |
 */

// Викликаємо метод tow з вагою меншою за towingCapacity

// Викликаємо метод tow з вагою більшою за towingCapacity

// Додаємо метод drive для прототипу Car, який збільшує kilometers на передане число, та виводить Подорожуємо <kilometers> кілометрів у <brand> <model>.

// Використовуємо bind для зв'язування методу drive з конкретним об'єктом car.
// Це створює нову функцію, в якій this постійно встановлено на car, незалежно від того, як функцію викликають.
// Викликаємо функцію зі значенням 100,

// Наслідування прототипу Vehicle
Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

// Додання методу tow до прототипу Truck
Truck.prototype.tow = function (weight) {
  if (weight > this.towingCapacity) {
    console.log(`Навантаження занадто важке для буксирування`);
  } else {
    console.log(`Тягнення навантаження...`);
  }
};

// Створення нового екземпляра об'єкта Truck
let myTruck = new Truck(
  "Toyota",
  "Tundra",
  2019,
  20000,
  "Red",
  "V8",
  10000,
  "Gasoline",
  "Automatic",
  4,
  5600
);

// Викликати метод tow з вагою меншою за towingCapacity
myTruck.tow(5000); // Тягнення навантаження...

// Викликати метод tow з вагою більшою за towingCapacity
myTruck.tow(15000); // Навантаження занадто важке для буксирування

// Створити новий екземпляр об'єкта Car
let myNewCar = new Car("Audi", "A6", 2018, 30000, "Petrol", 0);

// Викликати функції toString та valueOf об'єкта myCar
console.log(myNewCar.toString()); // Audi A6 2018 - Petrol
console.log(myNewCar.valueOf()); // 30000

// Використати методи для прискорення та передати 50
myNewCar.accelerate(50); // Автомобіль Audi A6 прискорився до швидкості 50 км/год

// Використати методи для гальмування та передати 20
myNewCar.brake(20); // Автомобіль Audi A6 зменшив до швидкості 30 км/год

// Додати метод drive для прототипу Car, який збільшує kilometers на передане число
Car.prototype.drive = function (kilometers) {
  this.mileage += kilometers;
  console.log(
    `Подорожуємо ${kilometers} кілометрів у ${this.brand} ${this.model}`
  );
};

// Використати bind для зв'язування методу drive з конкретним об'єктом car
let driveMyNewCar = myNewCar.drive.bind(myNewCar);

// Викликати функцію зі значенням 100
driveMyNewCar(100); // Подорожуємо 100 кілометрів у Audi A6

// Перевірити нове значення пробігу
console.log(myNewCar.mileage); // 30100

/*
 * Функція конструктор: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість   |
 * |---------------|
 * | brand         |
 * | model         |
 * | year          |
 * | mileage       |
 * | batteryCapacity|
 */

function ElectricCar(brand, model, year, mileage, batteryCapacity) {
  // Перевіряємо, чи функцію було викликано з new, якщо ні виволимо помилку "Конструктор має бути викликаний з 'new'"
  // Викликаємо Car.call та передаємо в нього this, brand, model, year, mileage
  //  Записуєм в this.batteryCapacity значення аргументу batteryCapacity
  // Перевірка чи функцію було викликано з new
  if (!(this instanceof ElectricCar)) {
    throw new Error("Конструктор має бути викликаний з 'new'");
  }

  // Викликати конструктор Car за допомогою call
  Car.call(this, brand, model, year, mileage, "Electric", 0);

  // Додаткова властивість для ElectricCar
  this.batteryCapacity = batteryCapacity;
}

// Перевизначаємо toString для прототипу ElectricCar він має повертати <brand> <model> <year> - Батарея: <batteryCapacity> kWh

// Створюємо новий екземпляр ElectricCar
/*
 * Екземпляр об'єкту: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість     | Значення          |
 * |-----------------|-------------------|
 * | brand           | Tesla             |
 * | model           | Model S           |
 * | year            | 2020              |
 * | mileage         | 10000             |
 * | batteryCapacity | 100               |
 */

// Викликаємо метод toString об'єкту tesla та виводимо в консоль
// Наслідування прототипу Car
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

// Перевизначення методу toString для ElectricCar
ElectricCar.prototype.toString = function () {
  return `${this.brand} ${this.model} ${this.year} - Батарея: ${this.batteryCapacity} kWh`;
};

// Створення нового екземпляра об'єкта ElectricCar
let tesla = new ElectricCar("Tesla", "Model S", 2020, 10000, 100);

// Викликати метод toString об'єкта tesla та вивести в консоль
console.log(tesla.toString()); // Tesla Model S 2020 - Батарея: 100 kWh
