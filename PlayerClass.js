module.exports = class Player{
    constructor(name){
        this.name = name;
        this.nextInst = 0; // prochaine instruction a executer
        this.instList = []; // liste d'instructions du joueur
    }
}