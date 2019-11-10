const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3000;
const GameBoard = require('./GameBoardClass')
const Player = require('./PlayerClass')
const Instruction = require('./InstructionClass')
var timerRunning = false;

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

/* io.on('connection', (socket) => {
    console.log('user connected');
    
    socket.on('start timer', () => {
        if (timerRunning === true){
            return;
        }
        else{
            timerRunning = true;
        }
        let timer = 10;
        io.emit('timer update', timer);
        var interval = setInterval(() => {
            timer -= 1;
            io.emit('timer update', timer);
            if (timer === 0){
                timerRunning = false;
                clearInterval(interval);
            }
        }, 1000,);
    });
}); */


p1 = new Player("Billy");
p2 = new Player("Humphray");
p1List = [
    new Instruction("mov", 0, 1, p1.name, 0),
    new Instruction("dat", 0, 0, p1.name, 1),
    new Instruction("jmp", 0, -2, p1.name, 2),
    new Instruction("add", 1, 3, p1.name, 3)
];
p1.instList = p1List;
gb = new GameBoard(400, 1000, p1, p2);
gb.exec(p1);
console.log(gb);
console.log(p1);



http.listen(port, () => console.log(`Example app listening on port ${port}`));

