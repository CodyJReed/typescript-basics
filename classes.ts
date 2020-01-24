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
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vroom");
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "green");
car.startDriving();
car.beep();
console.log(car.color, car.wheels);
