//Creating Classes
//Hamster
class Hamster{
    constructor (owner, name, price){
        this.owner = " ";
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
    buyHamster(){
        this.hamsters.push(hamster1)
        this.bankAccount = this.bankAccount - hamster1.getPrice()
    }
}