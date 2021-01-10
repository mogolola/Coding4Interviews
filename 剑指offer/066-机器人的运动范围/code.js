function getSum(i,j){
    return [...i.toString().split(""),...j.toString().split("")].reduce((i,j)=>parseInt(i)+parseInt(j))
}

function genMatrix( rows, cols){
    let mat = [];
    for(let i=0; i<rows; i++){
        let arr = []
        for(let j=0; j<cols; j++){
            arr.push(getSum(i,j))
        }
        mat.push(arr)
    }
    return mat;
}

function dfs(matrix, row, col,threshold, visited, clb){
    let pos = [row, col].join(",");
    if(row<0 || row>=matrix.length || col<0 || col>=matrix[0].length || visited.indexOf(pos)>=0 || matrix[row][col]>threshold){
        return;
    }
    visited.push(pos);
    dfs(matrix, row+1, col, threshold, visited, clb);
    dfs(matrix, row-1, col, threshold, visited, clb);
    dfs(matrix, row, col+1, threshold, visited, clb);
    dfs(matrix, row, col-1, threshold, visited, clb);
    clb();

}

function movingCount(threshold, rows, cols)
{
    // write code here
    let matrix = genMatrix(rows, cols);
    let count = 0;
    let clb = function(){count++};
    let visited = [];
    dfs(matrix, 0, 0, threshold, visited, clb);
    return count;
}

console.log(movingCount(5,10,10));