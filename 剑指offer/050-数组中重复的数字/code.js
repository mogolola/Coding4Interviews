function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    numbers = numbers.split("");
    for (let i in numbers){
        if(numbers!=i){
            var tmp = numbers[i];
            if(numbers[tmp] == i){
                duplication[0] = tmp;
                return true;
            }
            numbers[tmp] = i;
            numbers[i] = tmp;
        }
    }
    return false;
}

console.log(duplicate("012341", []))


