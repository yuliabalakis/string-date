/* 1. Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches 
the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b' */
let str = "ahb acb aeb aeeb adcb axeb";
let result = /a.b/gi;
console.log(str.match(result));

/* 2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest */
let string = "2 + 3 223 2223";
let res = /2.\+.3/gi;
console.log(string.match(res));

/* 3. Get the day, month and year of the current date and output it to the console separately */
let now = new Date();
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getFullYear());