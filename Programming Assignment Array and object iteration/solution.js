// Task 1
console.log('Task 1');

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (prop of dairy) {
        console.log(prop)
    }
}

logDairy();

// Task 2
console.log('Task 2');

function birdCan() {
  const animal = {
    canJump: true
  };
    

  const bird = Object.create(animal);

  bird.canFly = true;

  bird.hasFeathers = true;

  for (prop of Object.keys(bird)) {
    console.log(prop + ":" + " " + bird[prop])
  }
}
birdCan();


// Task 3 
console.log('Task 3');

function animalCan() {
    const animal = {
        canJump: true
    };

    const bird = Object.create(animal);

    bird.canFly = true;

    bird.hasFeathers = true;
    
    for (const prop in bird) {//loops over all properties in the object,  including the prototype's properties.
        console.log(prop + ":" + " " + bird[prop]);
    }
}

animalCan();
