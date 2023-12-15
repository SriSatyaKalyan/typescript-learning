"use strict";
// console.log("Yayyay!");
// console.log("Working!");

class Player {
    static team = "UWA";

    #score = 0;
    numLives = 10;

    constructor(first, last){
        this.first = first;
        this.last = last;
    }

    get fullName() {
        return `${this.first} ${this.last}`;
    }
    set score(newScore){
        if(newScore < 0) throw new Error("Score must be +ve");
        this.#score = newScore
    }
    get score(){
        return this.#score;
    }

    static randomPlayer() {
        return new Player("Amy Michelle");
    }

    updateScore(newScore){
        this.#score = newScore;
    }
    taunt(){
        console.log("BOOYAH!")
    }
    loseLife() {
        this.numLives -= 1;
    }

}

const player1 = new Player("blue", "steele");
player1.taunt();

// console.log(player1.first)
// console.log(player1.last)
// console.log(player1.numLives)

// console.log("The score is: " + player1.score)
// player1.updateScore(28);
// console.log("The score is: " + player1.score)
// player1.score =  +3;
// console.log("The score is: " + player1.score)

// console.log(player1.fullName);

// player1.loseLife();
// console.log(player1.numLives)

//extends
class adminPlayer extends Player {
    constructor(first, last, powers){
        
        //super
        super(first, last);
        
        this.powers = powers;
    }
    isAdmin = true;
}

const admin = new adminPlayer("Mr.", "Shiyogi", ["teach", "punish"]);