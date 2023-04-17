function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
 eat(); // undefined eats fish food


/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // nemo eats fish food
// Type error,   nemo.eat is not a function

/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
eat(); // undefined eats fish food


/********************************* Scenario 4 *********************************/
nemo.swim(); // nemo swimming in the water


/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;
swim(); // can not invoke on
// refrence error, swim is not defined
