class Hero{
    constructor (name, health = 100, weapons, catchPhrases){
        this.name = name;
        this.health = health;
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
    fight(Enemy){
        const weapon = [this.weapons.sprinkleSpray, this.weapons.sugarShock]
        Enemy.health -= weapon[Math.round(Math.random())] 
        console.log(" health is now " + Enemy.health)
        }
        //console.log ("You chose " + this.weapons + "which uses " + this.weapons.sprinkleSpray + " points")
     }
const Dougie = new Hero ("Dougie Donut")
console.log (Dougie)


class Enemy{
    constructor (name, health = 100, weapons, catchPhrases){
        this.name = name;
        this.health = health;
        this.weapons = {
            pepperoniStars: 15,
            cheeseGrease: 20
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
    fight(Hero){
        //console.log('I\'m gonna flatten you like a slice of pepperoni!')
        const weapon = [this.weapons.pepperoniStars, this.weapons.cheeseGrease]
        Hero.health -= weapon[Math.round(Math.random())] 
        console.log(" health is now " + Hero.health)
        }
        //console.log ("You chose " + this.weapons + "which uses " + this.weapons.sprinkleSpray + " points") 
    }
const pizzaRat = new Enemy ("Pizza Rat")
console.log (pizzaRat)

Dougie.talkSass()
pizzaRat.talkSmack()
Dougie.announceHealth()
pizzaRat.announceHealth()
Dougie.fight(pizzaRat)
pizzaRat.fight(Dougie)
Dougie.announceHealth()
pizzaRat.announceHealth()

// Be able to have Dougie and Pizza Rat fight multiple times.