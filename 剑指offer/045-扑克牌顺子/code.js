function merge(arr1, arr2){
    var j = 0;
    while(arr1.length){
        while(j < arr2.length && arr2[j]<arr1[0]){
            j++;
        }
        arr2.splice(j,0,arr1.shift());
        j++;
    }
    return arr2;
}

function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }else{
        var mid = Math.floor(arr.length/2)
        return merge(mergeSort(arr.slice(0,mid)), mergeSort(arr.slice(mid)))
    }
}

function IsContinuous(numbers)
{   
    if(!numbers.length) return false;
    numbers = mergeSort(numbers);
    var stack = [];
    while(numbers[0] === 0){
        stack.push(numbers.shift());
    }
    let flag = true;
    for(let i =0; i<numbers.length-1; i++){
        let diff = numbers[i+1] - numbers[i];
        if(!diff){
            flag = false;
            break;
        }else{
            while(--diff){
                if(!stack.length){
                    flag = false;
                    break;
                }
                stack.pop();
            }
        }
    }
    return flag;
}

console.log(IsContinuous([1,3,2,6,4]))