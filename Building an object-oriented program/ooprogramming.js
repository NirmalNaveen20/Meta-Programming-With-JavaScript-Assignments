// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100){
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep(){
        this.energy += 10;
        console.log('Energy increasing currently at: ', this.energy);
    }
    doSomethingFun(){
        this.energy -= 10;
        console.log('Energy decreasing currently at: ', this.energy);
    }
}


// Task 2: Code a Worker class

// Task 3: Code an intern object, run methods
function intern() {

}

// Task 4: Code a manager object, methods
function manager() {
    
}