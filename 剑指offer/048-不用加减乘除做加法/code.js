function Add(num1, num2)
{
    // write code here
    while(num2 != 0){
        var c = (num1 & num2) << 1;
        num1 ^= num2;
        num2 = c;
    }
    return num1;
}

console.log(Add(-1,2))