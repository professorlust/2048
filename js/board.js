(function() {
  'use strict';
  if (typeof Game === 'undefined'){
    window.Game = {};
  }

  var Board = Game.Board = function(size){
    this.size = size || 4;
    this.newEmptyGrid();
    this.addStartingTiles();
  };

  Board.prototype.newEmptyGrid = function(){
    this.grid = [];
    for (var i = 0; i < this.size; i++) {
      var row = [];
      for (var j = 0; j < this.size; j++) {
        row.push([]);
      }
      this.grid.push(row);
    }
  };

  Board.prototype.isOnBoard = function (pos){
    if(pos[0] > 0 && pos[0] < this.size && pos[1] > 0 && pos[1] < this.size){
      return true;
    }else{
      return false;
    }
  };

  Board.prototype.isEmptySquare = function(pos){
    return !this.grid[pos[0]][pos[1]];
  };

  Board.prototype.randomPos = function(){
    var row = Math.floor(Math.random() * this.size);
    var col =  Math.floor(Math.random() * this.size);
    return [row, col];
  };

  Board.prototype.findEmpty = function(){
    var random = this.randomPos();
    while (!this.isEmptySquare(random)){
      random = this.randomPos();
    }
    return random;
  };

  Board.prototype.place = function(pos, tile){
    this.grid[pos[0]][pos[1]] = tile;
  };

  Board.prototype.clearSquare = function(pos){
    this.grid[pos[0]][pos[1]] = null;
  };

  Board.prototype.addStartingTiles = function(){
    var pos = this.randomPos();
    var tile = new Game.Tile(this, pos);
    this.place(pos, tile);

    pos = this.randomPos();
    tile = new Game.Tile(this, pos);
    this.place(pos, tile);
  };

}());
