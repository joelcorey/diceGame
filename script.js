// 7. Prime Numbers
// a. A prime number is a number that is only divisible by one and itself.
// b. Write a function that prints out all prime numbers between 1 and 100 
// Credit: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php

"use strict";

let commonStats = {
    diceFour        : 4, //
    diceSix         : 6, //
    diceEight       : 8, //
    diceTen         : 10,
    diceTwelve      : 12, 
    diceTwenty      : 20, //
    playerTurn      : 0,
    playerHealth    : 100,
    monsterNumber   : 0,
    monsterHealth   : 0,
    action          : 0,
    gameState       : 0
}

function doMasterFunction() {

    let imagePath = "img/enemy/";
    let monsterNumber;
    let quoteNumber;
    let potionNumber;

    let dungeonSayings = [
        "This game is terrible.",
        "Lights, camera, action!",
        "Here's looking at you, kid",
        "Here monster, monster, monster",
        "Nothing flies over my head, I would surely catch it",
        "Click if you care.",
        "Show me the money!",
        "It smells like the undead in here",
        "Coffee is for closers.",
        "Where is all the loot?",
        "Rumor has it this dungeon is made of more than one image.",
        "There will be no arrow to the knee joke in this game.",
        "Where is the exit is this damned place?",
        "Text goes here.",
        "Boot to the head!",
        "Whoopsie!",
        "What is your quest?",
        "Nobody expects the Spanish inquisition!",
        "Another one bites the dust.",
        "Nods.",
        "Derp.",
        "TODO: Make game fun.",
        "20th saying right here, super original!"
    ]

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
       
    if(commonStats.playerTurn >= 1) {
        setImageSRC("main", "img/scenery/dungeon00.png");
        
    }
    commonStats.playerTurn += 1;

    if(commonStats.gameState === 0) {
        
        if(commonStats.action === 0) {
            setInnerHTML("main-title-subtext", "Those who wander here are lost");
            clearScreen();
            // setInterfaceNormal();
            commonStats.action = rollDie(commonStats.diceFour);
            console.log("Rolled, action = " + commonStats.action);
        }
        if(commonStats.action === 1) {
            monsterNumber = rollDie(commonStats.diceEight);
            
            console.log(monsterInfo[monsterNumber].name + " health: " + commonStats.monsterHealth);
            commonStats.monsterHealth = monsterInfo[monsterNumber].health;
            console.log("Health set/reset: " + commonStats.monsterHealth);

            setInterfaceAttack();
        
            setDisplayMonster(monsterInfo, monsterNumber);

            commonStats.gameState = 1;
        }
        if(commonStats.action === 2) {
            quoteNumber = rollDie(commonStats.diceTwenty);
            setInnerHTML("main-title-subtext", dungeonSayings[quoteNumber]);

            commonStats.action = 0;
        }
        if(commonStats.action === 3) {
            potionNumber = rollDie(commonStats.diceSix);
            commonStats.playerHealth += potionNumber;
            setInnerHTML("main-title-subtext", "Found health potion, gain " + potionNumber + " health");

            commonStats.action = 0;
        }
        if(commonStats.action === 4) {
            commonStats.action = 0;
        }
    }

    if(commonStats.gameState === 1) {      

        commonStats.monsterHealth -= 20;
        console.log("commonStats.monsterHealth: " + commonStats.monsterHealth);
        if (commonStats.monsterHealth <= 0) {
            console.log("Enemy killed");
            commonStats.gameState = 0;
            commonStats.action = 0;
            setInterfaceNormal();
        }

    }

    // console.log('monsterNumber', monsterNumber);

    setInnerHTML("display-turns", commonStats.playerTurn);
    setInnerHTML("display-health", commonStats.playerHealth);

}

function setInterfaceNormal() {
    delClass("button-forward", "d-none");
    addClass("button-attack", "d-none");
}

function setInterfaceAttack() {
    delClass("button-attack", "d-none");
    addClass("button-forward", "d-none");
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

function addClass(element, classToAdd) {
    document.getElementById(element).classList.add(classToAdd);
}

function delClass(element, classToDel) {
    document.getElementById(element).classList.remove(classToDel);
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

// let rollThis = diceFour;

// let rarity = determineRange(diceTwenty, diceTwenty);
// let durability = determineRange(diceTwenty, diceTwenty) + (10 * rarity);
// let damage = determineRange(diceTwenty, diceTwenty) * durability;

// console.log("Rarity: " + rarity);
// console.log("Durability: " + durability);
// console.log("Damage: " + damage);