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
        //randomly log catchphrases with Math.random function
        console.log()
    }
    announcHealth(){
        console.log('Your current health levels are at ' + this.health)
    }
    fight(){
        console.log('I\'m ready to rumble')
    }
}
const Donut = new Hero ("Dougie")
console.log (Donut)
