const carMakers: string[] = ["ford", "toyota", "cheverlot"];

const objectsArray: {} = [];

const otherObjectsArray = [{ name: "bob" }, { name: "bill" }];

// Help with inference when extracting values
const car = carMakers[1];
const myCar = carMakers.pop();
const myName = otherObjectsArray[0].name;

// Prevent incompatibles
carMakers.push(true);

// Help with 'map'

carMakers.map((car: string): string => car.toUpperCase());

// Flexible types

const importantDates: (Date | string)[] = [];
const otherDates = [new Date(), "2020-10-10"];

otherDates.pop();
importantDates.push(new Date().getDate().toString());
