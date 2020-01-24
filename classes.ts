class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log("bizzow");
  }

  beep(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log("vroom");
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car("green");
car.startDriving();
car.beep();
console.log(car.color);
