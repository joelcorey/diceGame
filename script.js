// 7. Prime Numbers
// a. A prime number is a number that is only divisible by one and itself.
// b. Write a function that prints out all prime numbers between 1 and 100 
// Credit: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php

"use strict";

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

function doMasterFunction() {

    let imagePath = "img/enemy/";
    let monsterNumber;
    let monsterHealth;
    let damageTotal = 0;
    let damageDealt;
    let currentMonsterHealth;
    let action = 0;
    let gameState = 0;

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
        //setInnerHTML("main-title", "Those who wander here are lost");
    }
    commonStats.playerTurn += 1;

    
    if(gameState === 0) {
        if(action === 0) {
            clearScreen();
            setInterfaceNormal();
            //setInterfaceNormal();
            action = rollDie(commonStats.diceFour);
            console.log("Rolled, action = " + action);
        }
        if(action === 1) {
            gameState = 1;

             
        }
        if(action === 2) {
            action = 0;
        }
        if(action === 3) {
            action = 0;
        }
        if(action === 4) {
            action = 0;
        }
    }

    if(gameState === 1) {

        setInterfaceAttack();
        monsterNumber = rollDie(commonStats.diceEight);
        setDisplayMonster(monsterInfo, monsterNumber);

        document.getElementById("button-attack").addEventListener("click", function() {
            currentMonsterHealth = monsterInfo[monsterNumber].health - attackHandler(0);
            console.log(monsterInfo[monsterNumber].name + " health: " + currentMonsterHealth);
            if (currentMonsterHealth <= 0) {
                //commonStats.gameState = 0;
                //commonStats.action = 0;
            }
        });
    }

    // console.log('monsterNumber', monsterNumber);

    setInnerHTML("display-turns", commonStats.playerTurn);
    setInnerHTML("display-health", commonStats.playerHealth);

}

function attackHandler(totalDamage) {
    //console.log(monsterHealth);
    return totalDamage + 20;
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


doMasterFunction();