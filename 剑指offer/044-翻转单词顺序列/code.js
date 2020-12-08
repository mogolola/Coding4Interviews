function ReverseSentence(str)
{
    // write code here
    var arr = str.split(" ");
    var re = [];
    while(arr.length){
        re.push(arr.pop())
    }
    return re.join(" ")
}