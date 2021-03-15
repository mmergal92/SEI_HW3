class Hero{
    constructor (name, health, weapons, catchPhrases){
        this.name = name;
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        }
        this.catchPhrases = ['i\'m fresher than day old pizza', 'you can\'t count my calories']
    }
    talkSass(){
        //log one of the catchPhrases randomly
            const random = Math.floor(Math.random()* this.catchPhrases.length);
            console.log(this.catchPhrases[random]);
    }
    announceHealth(){
        console.log('Your current health levels are at ' + this.health)
    }
    fight(){
        console.log('I\'m ready to rumble')
    }
}
const Donut = new Hero ("Dougie")
console.log (Donut)

class Enemy{
    constructor (name, health, weapons, catchPhrases){
        this.name = name;
        this.health = 100;
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10
        }
        this.catchPhrases = ['i\'m Youtube famous', 'i\'m more dangerous than an uncovered sewer']
    }
    talkSmack(){
            const random = Math.floor(Math.random()* this.catchPhrases.length);
            console.log(this.catchPhrases[random]);
    }
    announceHealth(){
        console.log('Your current health levels are at ' + this.health)
    }
    fight(){
        console.log('I\'m gonna flatten you like a slice of pepperoni!')
    }
}
const pizzaRat = new Enemy ("Pizza Rat")
console.log (pizzaRat)
pizzaRat.talkSmack()
