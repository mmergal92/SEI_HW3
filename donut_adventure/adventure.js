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
        // console.log('I\'m ready to rumble')
         //access one weapon and console log its hitpoints
             //const random3 = Math.floor(Math.random()* this.weapons.length);
             //return this.weapons = this.weapons[random3]

        console.log ("You chose " + this.weapons + "which uses " + this.weapons.sprinkleSpray + " points")
     }
}
const Donut = new Hero ("Dougie")
console.log (Donut)
Donut.fight()


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

Donut.talkSass()
pizzaRat.talkSmack()
Donut.announceHealth()
pizzaRat.announceHealth()

//I couldn't figure out how to have Dougie and Pizza Rat fight. Pseudo code is below.
//Upgrade Donut.fight() to be able to randomly access one of the two weapons when it is called upon.
//upgrade Donut.fight() to take a parameter:
    //fight(enemy)
//Use hitpoints to subtract from enemy's health:
    //announceHealth(){
    //     if (fight.enemy === true){
    //         Hero.health -=1
    //         }else if (fight.hero == true){
    //             Enemy.health -=1
    //         }
    //     }
    // console.log (enemy.name + enemy.health)
    // }
// Be able to have Dougie and Pizza Rat fight multiple times.