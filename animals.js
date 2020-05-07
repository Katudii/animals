class Animal {
    constructor(name) {
        this.name = name
    }

    eat(){
        console.log(`${this.name} eats`)
    }
}

class Dog extends animal {
    constructor() {
        
    }

    sound() {
        console.log(`${this.name} barks`)
    }
}

class Cat extends animal {
    constructor() {
        
    }

    sound() {
        console.log(`${this.name} meows`)
    }
}

class Home {
    #animals = []
    constructor(animal){
        this.animal = animal
    }

    adoptPet(animal){
        this.#animals.push[animal]
    }

    makeAllSounds(){
        this.#animals.forEach((animal , index)=>{
            console.log(animal.sound)
        })

    }
}