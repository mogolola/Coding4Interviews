import {Tester} from "Tester";

function minNumberInRotateArray(rotateArray:Array<number>):number
{
    if (rotateArray.length === 0)
        return 0;
    if (rotateArray.length === 1){
        return rotateArray[0];
    }
    if (rotateArray.length === 2){
        let [x,y] = rotateArray
        return x<y?x:y;
    }
    var low = 0, high = rotateArray.length - 1;
    var mid = Math.round((low + high) / 2);
    if (rotateArray[mid] > rotateArray[high]) {
        return minNumberInRotateArray(rotateArray.slice(mid, high + 1));
    }
    else{
        return minNumberInRotateArray(rotateArray.slice(low, mid + 1));
    }

}

let tester = new Tester(minNumberInRotateArray);
tester.addTest([3, 4, 5, 1, 2], 1);
tester.addTest([], 0);
tester.addTest([5, 8, 10, 11, 12, 1, 2, 4], 1);
tester.addTest([5, 7, 1, 2, 3, 4], 1);
tester.addTest([5, 6, 1, 2, 3], 1);
tester.addTest([1,2,3,4,5,6,7],1);

tester.doTest();