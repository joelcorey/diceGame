// 7. Prime Numbers
// a. A prime number is a number that is only divisible by one and itself.
// b. Write a function that prints out all prime numbers between 1 and 100 
// Credit: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php

"use strict";

function doMasterFunction() {

    let commonStats = {
        diceFour        : 4,
        diceSix         : 6,
        diceEight       : 8,
        diceTen         : 10,
        diceTwelve      : 12,
        diceTwenty      : 20,
        playerTurn      : 0,
        playerHealth    : 100,
        monsterNumber   : 0,
    }

    let imagePath = "img/enemy/";
    let action,;

    let monsterInfo = [
        {
            "name"          : "Rat",
            "imagePath"     : imagePath + "rat.png",
            "health"        : 10
        },
        {
            "name"          : "Wanderer",
            "imagePath"     : imagePath + "wanderer.png",
            "health"        : 40
        },
        {
            "name"          : "Bandit",
            "imagePath"     : imagePath + "bandit.png",
            "health"        : 50
        },
        {
            "name"          : "Blob",
            "imagePath"     : imagePath + "blob.png",
            "health"        : 75
        },
        {
            "name"          : "Valkyrie",
            "imagePath"     : imagePath + "valkyrie.png",
            "health"        : 120
        },
        {
            "name"          : "Werewolf",
            "imagePath"     : imagePath + "werewolf.png",
            "health"        : 200
        },
        {
            "name"          : "Cosmic",
            "imagePath"     : imagePath + "cosmic.png",
            "health"        : 500
        },
        {
            "name"          : "Cleric",
            "imagePath"     : imagePath + "cleric.png",
            "health"        : 20
        }
    ];

       
    if(playerTurn >= 1) {
        setImageSRC("main", "img/scenery/dungeon00.png");
    }
    playerTurn += 1;

    action = rollDie(diceFour) 

    if (action !== 1) {
        clearScreen();
    }

    if (action === 1) {
        monsterNumber = rollDie(diceEight);
        setDisplayMonster(monsterInfo, monsterNumber);
    }

    setInnerHTML("display-turns", playerTurn);
    setInnerHTML("display-health", playerHealth);

    action = 0;
    //console.log(turn);
}

function setDisplayMonster(monsterArray, arrayIndex){
    setInnerHTML("main-title", monsterArray[arrayIndex].name);
    setImageSRC("main-monster", monsterArray[arrayIndex].imagePath);
}

function clearScreen() {
    setInnerHTML("main-title", "");
    setImageSRC("main-monster", "");
}

function rollDie(sides) {
    return Math.floor(Math.random() * sides);
    //return Math.floor(Math.random() * sides) + 1;
}

function determineRange(low, high) {
    let number = rollDie(high) - rollDie(low);
    if(number >= 0) {
        return number;
    }else{
        return number = 0;
    }
}

function setInnerHTML(id, value) {
    document.getElementById(id).innerHTML = value;
    return;
}

function setImageSRC(id, value) {
    let imgChange = document.getElementById(id);
    imgChange.src = value;
}

function setHiddenTrue(element) {
    let setThisHidden = document.getElementById(element);
    setThisHidden.style.display = "none";
}

function setHiddenFalse(element) {
    let setThisHidden = document.getElementById(element);
    setThisHidden.style.display = "block";
} 

let rollThis = diceFour;

let rarity = determineRange(diceTwenty, diceTwenty);
let durability = determineRange(diceTwenty, diceTwenty) + (10 * rarity);
let damage = determineRange(diceTwenty, diceTwenty) * durability;

// console.log("Rarity: " + rarity);
// console.log("Durability: " + durability);
// console.log("Damage: " + damage);


doMasterFunction();