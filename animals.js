class Animal {
    constructor(name) {
        this.name = name
    }

    eat() {
        console.log(`${this.name} eats`)
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    sounds() {
        console.log(`${this.name} barks`)
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
    }

    sounds() {
        console.log(`${this.name} meows`)
    }
}

class Home {
    #animals = []
    constructor() {

    }

    adoptPet(Animal) {
        this.#animals.push(Animal)
    }

    makeAllSounds() {
        this.#animals.forEach((Animal, index) => {
            console.log(Animal.sounds())
        })

    }
}

var dog = new Dog("Snoopy")

dog.eat()
dog.sounds()

var cat = new Cat("Catty Purry")

cat.eat()
cat.sounds()

var home = new Home()
var dog1 = new Dog("Bobby")
var dog2 = new Dog("Rex")
var cat1 = new Cat("Doja cat")

home.makeAllSounds() //outputs nothing
home.adoptPet(dog1)
home.makeAllSounds()

home.adoptPet(cat1)
home.makeAllSounds()

home.adoptPet(dog2)
home.makeAllSounds()