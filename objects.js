//Creating Classes
//Hamster
class Hamster{
    constructor (owner, name, price){
        this.owner = owner;
        this.name = name;
        this.price = 15;
    }
    wheelRun(){
        console.log('squeak squeak')
    }
    eatFood(){
        console.log('nibble nibble')
    }
    getPrice(){
        return this.price
    }
}
const hamster1 = new Hamster ("steph", "rover")
console.log (hamster1)
hamster1.wheelRun()
hamster1.eatFood()
hamster1.getPrice()

//Person
class Person{
    constructor (name, age, height, weight, mood, hamsters, bankAccount){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters =[];
        this.bankAccount = 0;
    }
    getName(){
        console.log(this.name)
    }
    getAge(){
        console.log(this.age)
    }
    getWeight(){
        console.log(this.weight)
    }
    greet(){
      console.log("hi! How are you " + this.name + " ?")
    }
    eat(){
        this.weight++
        this.mood++ 
    }
    exercise(){
        this.weight--
    }
    ageUp(){
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount = this.bankAccount + 10
    }
    buyHamster(Hamster){
        this.hamsters.push(hamster1)
        this.bankAccount = this.bankAccount - hamster1.getPrice()
    }
}

const Timmy = new Person ("timmy")
Timmy.age =5
console.log(Timmy)
Timmy.eat()
Timmy.eat()
Timmy.eat()
Timmy.eat()
Timmy.eat()
console.log(Timmy)
Timmy.exercise()
Timmy.exercise()
Timmy.exercise()
Timmy.exercise()
Timmy.exercise()
console.log(Timmy)
Timmy.ageUp()
Timmy.ageUp()
Timmy.ageUp()
Timmy.ageUp()
Timmy.ageUp()
Timmy.ageUp()
Timmy.ageUp()
Timmy.ageUp()
Timmy.ageUp()
console.log(Timmy)

class Gussy extends Hamster {
    constructor (owner, name, price){
    super(owner,name,price);
        this.owner = "Timmy"
        this.name = "Gus"
        this.price = 15
}
}   
const Gus = new Gussy ()

console.log(Gus);

Timmy.buyHamster(Gus)
console.log(Timmy)
//not getting Gus here and I think it's because the "buy Hamster" function is calling Hamster 1 inside the function. Not sure how to make it call the Gussy function.

Timmy.ageUp()
Timmy.ageUp()
Timmy.ageUp()
Timmy.ageUp()
Timmy.ageUp()
Timmy.ageUp()
Timmy.ageUp()
Timmy.ageUp()
Timmy.ageUp()
Timmy.ageUp()
Timmy.ageUp()
Timmy.ageUp()
Timmy.ageUp()
Timmy.ageUp()
Timmy.ageUp()
console.log (Timmy)

Timmy.eat()
Timmy.eat()
console.log(Timmy)
Timmy.exercise()
Timmy.exercise()
console.log(Timmy)