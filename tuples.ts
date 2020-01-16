const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number];
const coke: Drink = ["brown", true, 40];
coke[2] = 45;
