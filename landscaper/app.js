//landscaping business, all you have are teeth
//using your teeth, can make $1
let bankAccount = 0
const tools = ["teeth"]
function useTeeth(){
    bankAccount++
} 
function printBalance(){
    console.log("You have $" + bankAccount + " in your bank account.")
}
function buyScissors(){
    if (bankAccount >= 5){
        tools.push("scissors")
        bankAccount = bankAccount - 5
        console.log ("You just bought scissors.")
    } else {
        console.log("You don't have enough money to buy scissors.")
    }
}
for (let i= 0; i < 10; i++){
    useTeeth()
}

//At any point, if you are currently using your teeth, you can buy a pair of rusty scissors for $5. You can do this once, assuming you have enough money.
buyScissors()
printBalance()

//Using the rusty scissors, you can spend the day cutting lawns and make $5. You can do this as much as you want.
function useScissors(){
    bankAccount=bankAccount + 5
    printBalance();
}
for (let i= 0; i < 5; i++){
    useScissors()
}
useScissors()

//At any point, if you are currently using rusty scissors, you can buy an old-timey push lawnmower for $25. You can do this once, assuming you have enough money.
function buyLawnMower(){
    if (bankAccount >= 25){
        tools.push("lawn mower")
        bankAccount = bankAccount - 25
        console.log ("You just bought a lawn mower.")
    } else {
        console.log("You don't have enough money to buy a lawn mower.")
    }
    printBalance();
}
buyLawnMower();
//Using the old-timey push lawnmower, you can spend the day cutting lawns and make $50. You can do this as much as you want.
function useLawnMower(){
    bankAccount=bankAccount + 50
    printBalance();
}
for (let i= 0; i < 4; i++){
    useLawnMower()
}
useLawnMower()
//At any point, if you are currently using the old-timey push lawnmower, you can buy a fancy battery-powered lawnmower for $250. You can do this once, assuming you have enough money.
function buyFancyLawnMower(){
    if (bankAccount >= 250){
        tools.push("fancy lawn mower")
        bankAccount = bankAccount - 250
        console.log ("You just bought a fancy lawn mower.")
    } else {
        console.log("You don't have enough money to buy a fancy lawn mower.")
    }
    printBalance();
}
buyFancyLawnMower();
//Using the the fancy battery-powered lawnmower, you can spend the day cutting lawns and make $100. You can do this as much as you want.
function useFancyLawnMower(){
    bankAccount=bankAccount + 100
    printBalance();
}
for (let i= 0; i < 4; i++){
    useFancyLawnMower()
}
useFancyLawnMower()
//At any point, if you are currently using the fancy battery-powered lawnmower, you can hire a team of starving students for $500. You can do this once, assuming you have enough money.
function buyTeam(){
    if (bankAccount >= 500){
        tools.push("Team")
        bankAccount = bankAccount - 500
        console.log ("You just bought a team.")
    } else {
        console.log("You don't have enough money to buy a team.")
    }
    printBalance();
}
buyTeam();
//Using the the team of starving students, you can spend the day cutting lawns and make $250. You can do this as much as you want.
function useTeam(){
    bankAccount=bankAccount + 250
    printBalance();
}
for (let i= 0; i < 3; i++){
    useTeam()
}
useTeam()
//You win the game when you have a team of starving students and $1000. In this situation, send a message to the user telling them, they've won.
console.log(tools)
console.log(tools.includes("Team"))
if (tools.includes("Team") && bankAccount > 1000){
    console.log("You won!")
}
//I'm not sure how to edit this to account for user input and make it work on chrome.