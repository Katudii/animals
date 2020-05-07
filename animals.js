class Animal {
    constructor(name) {
        this.name = name
    }

    eat(){
        console.log(`${this.name} eats`)
    }
}

class Dog extends Animal {
    constructor() {
        
    }

    sound() {
        console.log(`${this.name} barks`)
    }
}

class Cat extends Animal {
    constructor() {
        
    }

    sound() {
        console.log(`${this.name} meows`)
    }
}

class Home {
    #animals = []
    constructor(Animal){
        this.Animal = Animal
    }

    adoptPet(Animal){
        this.#animals.push[Animal]
    }

    makeAllSounds(){
        this.#animals.forEach((Animal , index)=>{
            console.log(Animal.sound)
        })

    }
}