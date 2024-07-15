const result = solve(5);
console.log(result);
function solve(n) {
    let result = [];
    let board = [];
    let skipColumn = [];
    for (let i = 0; i < n; i++) {
        board[i] = new Array(n).fill('.');
    }
    recursive(board, 0, n, skipColumn)


    // The recursive function always return false, so that result can store as much solutions as possible.
    
    function recursive(board, row, n) {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return false;
        }

        for (let column = 0; column < n; column++) {
            if (isValid(board, row, column)) {
                board[row][column] = 'Q';

                if (recursive(board, row + 1, n)) return true;

                board[row][column] = '.';
            }
        }
        return false;
    }

    function isValid(board, row, column) {
        for (let j = row; j >= 0; j--) {
            if (board[j][column] === 'Q') return false;
        }

        for (let i = row, j = column; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row, j = column; i >= 0 && j >= 0; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }

        return true;
    }

    return result;
}



