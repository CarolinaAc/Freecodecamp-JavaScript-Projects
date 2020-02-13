const rot13 = (str)=> { // LBH QVQ VG!
  let charArr = [];
  let regEx = /[A-Z]/;
  str = str.split("");
  for (let x in str){
    if (regEx.test(str[x])){
      charArr.push(((str[x].charCodeAt() - 65 +13)%26)+65);
/*charCodeAt() translates plain text to ASCII, then the distance between uppercase and lower case is 65 
then we are adding 13 as that's the key for caesar. Afterwards we do module 26 to ensure we haven gone over the 26 
letters of the alphabet and return it in upper case by adding 65. Then fromCharCode will do the oposit and translate it from ASCII.
I first learnt this in C when I started challenges in CS50 course*/
    }else {
      charArr.push(str[x].charCodeAt()); 
      /*if it is not an alphabetical character we just transform it to ASCII to make it easier later to translate */
    }
  }
  str = String.fromCharCode.apply(String, charArr);
  return str;

}
// Change the inputs below to test
rot13("SERR PBQR PNZC");
