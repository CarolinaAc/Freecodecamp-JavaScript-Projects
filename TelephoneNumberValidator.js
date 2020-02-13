//declare the regex
 let regEx = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
 //^(1\s?)? checks if starts with zero or one 1 followed or not by space.
 //(\d{3}\)|\d{3}) checks if there're 3 digits surrounded by parenthesis or only 3 digits.
 //[\s\-]?\d{3} checks for zero or one space or - followed by 3 digits.
 //[\s\-]?\d{4}$ checks if there're zero or one space or - followed by the last 4 digits. 
const telephoneCheck = (str) => regEx.test(str);
 
telephoneCheck("555-555-5555");

//Note: will try building the same for Spanish and UK numbers, as this function works for US numbers
