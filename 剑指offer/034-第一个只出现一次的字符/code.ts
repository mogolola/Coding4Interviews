function FirstNotRepeatingChar(str:string)
{
    // write code here
    let map:Array<number> = new Array(128);
    for(let i = 0; i<128; i++){
        map[i] = 0;
    }
    for(let i = 0; i<str.length; i++){
        map[str.charCodeAt(i)]+=1;
    }
    for(let i = 0; i<str.length; i++){
        if(map[str.charCodeAt(i)]===1){
            return i;
        }
    }
    return -1;
}