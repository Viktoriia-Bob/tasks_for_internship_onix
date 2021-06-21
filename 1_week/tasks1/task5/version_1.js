function fib(n) {
    let num1 = 0;
    let num2 = 1;
    while (num1 <= n) {
        console.log(num1);
        let mid = num2;
        num2 += num1;
        num1 = mid;
    }
}

fib(3416454622906707);