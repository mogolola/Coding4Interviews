"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var matrix = [[1],[2],[3],[4],[5]];
function printMatrix(matrix) {
    let r = [];
    var yMin = 0, xMin = 0, yMax = matrix.length - 1, xMax = matrix[0].length - 1;
    var round = 0, dir = 0;
    var x = 0 , y = 0;
    r.push(matrix[y][x]);
    let deltas = [[1,0],[0,1],[-1,0],[0,-1]];
    let delta = deltas[dir];
    do{
        switch (dir){
            case 0:
                while(x < xMax){
                    x++;
                    r.push(matrix[y][x]);
                }
                yMin++;
                break;
            case 1:
                while(y<yMax){
                    y++;
                    r.push(matrix[y][x]);
                }
                xMax--;
                break;
            case 2:
                while(x>xMin){
                    x--;
                    r.push(matrix[y][x]);
                }
                yMax--;
                break;
            case 3:
                while(y>yMin){
                    y--;
                    r.push(matrix[y][x]);
                }
                xMin++;
        }
        round++;
        dir = round % 4;
        delta = deltas[dir];
    }while((x+delta[0]>=xMin) && (x+delta[0]<=xMax) && y+delta[1]>=yMin && y+delta[1]<=yMax)
    return r;
    
}
console.log(printMatrix(matrix));
