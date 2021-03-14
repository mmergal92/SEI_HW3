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
        console.log(this.price)
    }
}
const hamster1 = new Hamster ("steph", "rover")
console.log (hamster1)
hamster1.wheelRun()
hamster1.eatFood()
hamster1.getPrice()