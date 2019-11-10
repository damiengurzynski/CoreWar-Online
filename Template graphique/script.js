function pl1(){};
function pl2(){};
var core = [];

function rand(min,max)
{
  var mi=min;
  var ma=max;
  var random = Math.floor(Math.random() * (+ma - +mi)) + +min;
  return random;
}

function buildCore()
{
  for (i=0;i<400;i++)
  {
    core.push(null);
  };
}

function addPlayers()
{
  core[rand(0,399)] = pl1;
  core[rand(0,399)] = pl2;
}

function drawCore()
{
  core.forEach((x)=>
  {
    if (x == null)
    {
      var newDiv = document.createElement('div');
      newDiv.className = 'emp';
      document.getElementById('coreRep').appendChild(newDiv);
    };
    if (x == pl1)
    {
      var newDiv = document.createElement('div');
      newDiv.className = 'pl1';
      document.getElementById('coreRep').appendChild(newDiv);
    };
    if (x == pl2)
    {
      var newDiv = document.createElement('div');
      newDiv.className = 'pl2';
      document.getElementById('coreRep').appendChild(newDiv);
    };
  });
}

function newGame()
{
  buildCore();
  addPlayers();
  drawCore();
}

newGame();
