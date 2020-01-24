class Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }

  beep(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.beep();
