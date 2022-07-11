/* 1. Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches 
the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b' */
const str = "ahb acb aeb aeeb adcb axeb";
const regexp = /a.b/gi;
console.log(str.match(regexp));

/* 2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest */
const string = "2 + 3 223 2223";
const res = /2.\+.3/gi;
console.log(string.match(res));

/* 3. Get the day, month and year of the current date and output it to the console separately */
const now = new Date();
console.log(now.getDate());
console.log(now.getMonth() + 1);
console.log(now.getFullYear());