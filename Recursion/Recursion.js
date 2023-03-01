function checkPalindrome(string) {

 
    const len = string.length;
    const secondChar = string.charAt(1);
if (string.length==""||secondChar ==""){
return 'error';
}
 
    for (let i = 0; i < len / 2; i++) {

       
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}


const string = prompt('Enter a string: ');


const result = checkPalindrome(string);

console.log(result);