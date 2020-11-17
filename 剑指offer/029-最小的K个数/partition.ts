function swap(A: Array<number>, i:number, j:number){
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

function partition(input:Array<number>, low:number, high:number){
    var pivot = input[low];
    var x = low;
    for (var i = low; i <= high; i++) {
        if (input[i] > pivot) {
            swap(input, i, x+1);
            x++;
        }
    }
    swap(input, low, x);
    return x;
}



function GetLeastNumbers_Solution(input:Array<number>, k:number)
{
    if(k > input.length || k<=0)    return [];
    let idx = partition(input, 0, input.length-1);
    let low = 0;
    let high = input.length - 1;
    while( idx !== k-1){
        if(idx < k-1){
            low = idx + 1;
            idx = partition(input, low, high);
        }
        if(idx > k-1){
            high = idx - 1;
            idx = partition(input, low, high);
        }
    }
    return input.slice(k);
}

import {Tester} from 'Tester';
let tester = new Tester(GetLeastNumbers_Solution);
tester.addTest([4,5,1,6,2,7,3,8],4,[1,2,3,4]);
tester.doTest();