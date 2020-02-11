
function palindrome(str) {
  // Good luck!
  
  var myReg = /[\W_]/g;
  var newStr = str.replace(myReg, "").toLowerCase();
  var invStr = newStr.split("").reverse().join("");
  if (newStr === invStr){
    return true;
  } else {
    return false;
  }  
}

palindrome("eye");
