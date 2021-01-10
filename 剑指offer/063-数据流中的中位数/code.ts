
let regis:Array<number> = [];

function findIndex(num:number){
    let low = 0, high = regis.length;
    while(high >= low){
        let mid = Math.floor((low+high)/2);
        if(regis[mid] == num){
            return mid;
        }
        if(regis[mid]>num){
            if(mid==low){
                return mid;
            }else{
                high = mid-1;
            }
        }else{
            if(mid == high){
                return mid+1;
            }else{
                low = mid+1;
            }
        }
    }
    return low;
}

function Insert(num:number)
{
    // write code here
    let idx = findIndex(num);
    regis.splice(idx, 0, num);
}

function GetMedian(){
    // write code here
    if(regis.length%2){
        return regis[(regis.length-1)/2]
    }else{
        let mid = regis.length/2;
        return (regis[mid-1]+regis[mid])/2;
    }
}

let a = [5,2,3,4,1,6,7,0,8];
for (let i of a){
    Insert(i);
    console.log(GetMedian())
}


