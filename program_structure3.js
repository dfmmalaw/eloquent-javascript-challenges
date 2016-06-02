// Chess board

// Write a program that creates a string that represents an 8×8 grid, using newline
// characters to separate lines. At each position of the grid there is either a 
// space or a “#” character. The characters should form a chess board.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a variable size = 8 
// and change the program so that it works for any size, outputting a grid of the 
// given width and height.


// this variable sets the dimensions of the rows and columns
var size = 8;

// set a variable to empty string so that it has a place to start
var board = "";

// this outer loop is for rows
for (var y = 0; y < size; y++) {
// this inner loop is for columns and outer loop will not incrment until row is
// completely finished looping through each column (x)
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
// this will make output go to the next row after inner loop is done because loop
// will start all over again and y will increment up from 0 to 1. This will repeat
// until outer loop finally meets its termination condition (y = size)
  board += "\n";
}

console.log(board);