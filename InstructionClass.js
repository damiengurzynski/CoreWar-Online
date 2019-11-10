module.exports = class Instruction {
    constructor(name, aSide, bSide, owner, globalPos){
        this.name = name;
        this.arg1 = aSide; // A side de l'instruction
        this.arg2 = bSide; // B side de l'instruction
        this.globalInstPos = globalPos; // position de l'instruction dans le core
        this.owner = owner;
    }
}