"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function DFS(matrix, row, col, path, visited) {
    let pos = [row, col].join(",");
    if (row < 0 || row > matrix.length || col < 0 || col > matrix[0].length || visited.indexOf(pos) >= 0)
        return false;
    if (path[0] == matrix[row][col]) {
        if (path.length === 1)
            return true;
        visited.push(pos);
        return DFS(matrix, row + 1, col, path.slice(1), visited) || DFS(matrix, row - 1, col, path.slice(1), visited) || DFS(matrix, row, col - 1, path.slice(1), visited) || DFS(matrix, row, col + 1, path.slice(1), visited) || false;
    }
    return false;
}
function hasPath(matrix, rows, cols, path) {
    // write code here
    let mat = [];
    let arr = matrix.split("");
    for (let i = 0; i < cols; i++) {
        mat.push(arr.slice(i * cols, (i + 1) * cols));
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let visited = [];
            if (DFS(mat, i, j, path, visited))
                return true;
        }
    }
    return false;
}
console.log(hasPath("ABCESFCSADEE", 3, 4, "BCCED"));
