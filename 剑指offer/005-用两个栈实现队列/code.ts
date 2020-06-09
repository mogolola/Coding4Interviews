let stack_1: (number | undefined)[] = [], stack_2: (number | undefined)[] = [];

function push(node:number)
{
    stack_1.push(node);
}

function pop()
{
    while(stack_1.length>1){
        stack_2.push(stack_1.pop())
    }
    let re = stack_1.pop();
    while(stack_2.length>=1){
        stack_1.push(stack_2.pop())
    }
    return re
}



