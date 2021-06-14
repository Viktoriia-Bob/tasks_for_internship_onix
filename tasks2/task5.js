function isPalindrome(str) {
    str = str.toLowerCase().replace(/\W/g, '');
    let reverse = str.split('').reverse().join('');
    return str == reverse;
}
console.log(isPalindrome('sator arepo tenet opera rotas'));
console.log(isPalindrome('No lemon, no melon'));
console.log(isPalindrome('a, b. c/ d, cb - a'));
console.log(isPalindrome('addfdda'));