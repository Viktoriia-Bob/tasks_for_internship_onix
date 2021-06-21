function fib(n) {
    let num1 = 0;
    let num2 = 1;
    while (num1 <= n) {
        console.log(num1);
        if (num2 <= n) console.log(num2);
        else break;
        num1 += num2;
        num2 += num1;
    }
}

fib(3416454622906707);