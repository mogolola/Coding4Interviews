function left(i:number){
    return 2 * ++i - 1;
}

function right(i:number){
    return 2 * ++i
}

function swap(A:Array<number>, i:number, j:number){
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

function minHeapify(A:Array<number>, i:number){
    let p = A[i];
    let l = A[left(i)],r = A[right(i)];
    let smallest;
    if(p > l){
        smallest = left(i);
    }else{
        smallest = i;
    }
    if(r < A[smallest]){
        smallest = right(i);
    }
    if(smallest !== i){
        swap(A, smallest, i);
        minHeapify(A, smallest);
    }
}

function buildMinHeap(A:Array<number>){
    for(let i = Math.floor(A.length/2) ; i>=0; i--){
        minHeapify(A, i);
    }
}

function GetLeastNumbers_Solution(input:Array<number>, k:number)
{
    // write code here
    let result = [];
    buildMinHeap(input);
    while(k-->0){
        result.push(input.shift());
        minHeapify(input, 0);
    }
    return result;
}

import {Tester} from 'Tester';
let tester = new Tester(GetLeastNumbers_Solution);
tester.addTest([4,5,1,6,2,7,3,8],4,[1,2,3,4]);
tester.doTest();

