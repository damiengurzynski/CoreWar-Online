const Player = require('./PlayerClass')
module.exports = class GameBoard {
    constructor(size, speed, p1, p2){
        this.coreSize = size;
        this.speed = speed;
        this.core = [];
        this.state = ""; //ex: waiting, finished, ingame, ...
        this.p1 = p1;
        this.p2 = p2;
        this.activePlayer = 1;
    }

    search(dst) {
        let res = null;
        this.p1.instList.forEach (inst => {
            if (inst.globalInstPos === dst) {
                res = inst;
            }
        });
        if (res !== null) {
            this.p2.instList.forEach (inst => {
                if (inst.globalInstPos === dst) {
                    res = inst;
                }
            });
        }
        return res;
    }

    exec(player) {
        switch (player.instList[player.nextInst].name) {
            case 'mov' :
                var aSide = player.instList[player.nextInst].arg1;
                var bSide = player.instList[player.nextInst].arg2;
                let dst = bSide + player.instList[player.nextInst].globalInstPos;
                var res = this.search(dst);
                if (res !== null) {
                    player.instList[bSide] = player.instList[aSide];
                    res.owner = player.name;
                }
                else {
                    console.log(dst);
                }

            case 'dat' :
                break;

            case 'jmp' :
                break;
        }
        
    }

    turn() {
        if (this.activePlayer == 1) {
            this.exec(this.p1)
            this.p1.nextInst += 1;
            this.activePlayer = 2;
        }
        else {
            this.exec(this.p2);
            this.p2.nextInst += 1;
            this.activePlayer = 1;
        }
    }
}