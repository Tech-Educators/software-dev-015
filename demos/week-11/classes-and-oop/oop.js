
// Object Oriented Programming.

// 'functional' vs Object Oriented

// especially popular in games dev

// I don't really use this day to day. 

// methods are functions that are properties of an object

class Animal {
    // constructor functions are run when we first 'create' a new instance of a class. 
    // a constructor function is used to 'build' objects

    // 'this' referes to the object currently being made.
    // this.legs = means I'm setting a property
    // this.legs = legs - I mean 'make the property 'legs' on the object = to the argument i gave to the constructor.
    constructor(colourArg, legsArg, nameArg) {
        // primative properties
        this.colour = colourArg,
        this.legs = legsArg,
        this.name = nameArg
    }

    // when you want to make a method, you do it outside the constructor
    sleep() {
        console.log(`${this.name} cuddles up to bed! Their ${this.colour} ${this.legs} legs curled up beneath them`)
    }
}

// we're instantiating a new object -> I'm going to use the animal template I made to make a new object
const dog = new Animal('brown', '4', 'Darcy')
const cat = new Animal('orange', '4', 'Fluffies')

console.log(dog.sleep())


class Birds extends Animal {
    // always give a constructor
    constructor(colourArg, legsArg, nameArg, numberOfWingsArg, beakColourArg) {
        // super function - calls the constructor function of the class this class is extending
        // so here, super goes and call the Animal constructor function
        super(colourArg, legsArg, nameArg)
        // can overwrite args
        this.colour = 'purple'
        this.numberOfWings = numberOfWingsArg,
        this.beakColour = beakColourArg
    }
    fly() {
        console.log(`${this.name} soars in the sky with their ${this.numberOfWings} wings and beautiful ${this.beakColour} beak.`)
    }
}

const steve = new Birds('grey', 2, 'steve', 2, 'orange')

steve.fly()
// steve inherites the methods/properties of the previous classes.
steve.sleep()

console.log(steve)