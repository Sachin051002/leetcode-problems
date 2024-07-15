/*
Backtracking algorithms are like problem-solving strategies that help explore different options to find the best solution. They work by trying out different paths and if one doesn’t work, they backtrack and try another until they find the right one. It’s like solving a puzzle by testing different pieces until they fit together perfectly.


In short:
1. Try a option
2. if option id Valid: Move to the next problem -> step 1 again
3. if option is not valid: Undo the option -> try another option.

*/
board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

let result = solve(board);
console.log(JSON.stringify(result));

function solve(board) {
    recursive(board, 0, 0);  //backtracking function called.
    return board;
}

function recursive(board, row, column) {
    if (row === 9) return true; // Adding base condition to exit recursive function.
    if (column === 9) return recursive(board, row + 1, 0); // Adding base condition to move to the next row.
    if (board[row][column] !== ".") return recursive(board, row, column + 1); // Adding base condition to move to the next column.

    for (let i = 1; i < 10; i++) {
        if (isValid(board, row, column, i.toString())) { // Checking if the option is valid or not.
            board[row][column] = i.toString();
            if (recursive(board, row, column + 1)) return true;
            board[row][column] = ".";
        }
    }
}

function isValid(board, row, column, number) {
    if (board[row].includes(number)) return false;

    for (let i = 0; i < 9; i++) {
        if (board[i][column] === number) {
            return false;
        }
    }

    let x = Math.floor(row / 3) * 3;
    let y = Math.floor(column / 3) * 3;

    for (let i = x; i < x + 3; i++) {
        for (let j = y; j < y + 3; j++) {
            if (board[i][j] === number) {
                return false;
            }
        }
    }
    return true;
}

// Output is :
// [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]