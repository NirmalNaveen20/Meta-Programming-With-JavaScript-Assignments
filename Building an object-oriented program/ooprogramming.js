// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep() {
        this.energy += 10;
        console.log('Energy increasing currently at: ', this.energy);
    }
    doSomethingFun() {
        this.energy -= 10;
        console.log('Energy decreasing currently at: ', this.energy);
    }
}


// Task 2: Code a Worker class
class Worker extends Person {
    constructor(xp = 0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    goToWork() {
        this.xp += 10;
        console.log('Energy increasing currently at: ', this.energy);
    }
}
// Task 3: Code an intern object, run methods
function intern() {
    interOne = new Worker(0, 10, "Bob", 21, 110);
    interOne.goToWork();
    return interOne;
}
intern();

// Task 4: Code a manager object, methods
function manager() {
    managerOne = new Worker(100, 30, "Alice", 30, 120);
    managerOne.doSomethingFun();
    return managerOne;
}
manager();