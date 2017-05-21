var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

var tileSheet = new Image();
tileSheet.src = "numberedTile.png";
tileSheet.addEventListener('load',()=>{
  draw()
})

function draw(){
    let x,y,index;
    let tilesOnARow = 16;
    let numberOfTiles = 16*16;
    for (var i = 0; i < numberOfTiles; i++) {

      x = i%tilesOnARow * 32;
      y = Math.floor(i/tilesOnARow) * 32;
      index = Math.floor(Math.random()*16)
      context.drawImage(tileSheet,indexToCoordinates(index).x,indexToCoordinates(index).y,32,32,x,y,32,32 );
    }
}

function indexToCoordinates(index){
  var tileWidth = 32;
  var tileHeight = 32;
  var tilesOnARow = 8;

  var x = index%tilesOnARow * tileWidth;
  var y = Math.floor(index/tilesOnARow)*tileHeight;
  var ans = {x:x,y:y};
  return ans;
}
