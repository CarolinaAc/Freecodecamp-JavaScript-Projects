
const palindrome = (str) => {
  let myReg = /[\W_]/g;
  let newStr = str.replace(myReg, "").toLowerCase();
  let invStr = newStr.split("").reverse().join("");
  if (newStr === invStr){
    return true;
  } else {
    return false;
  }  
}

palindrome("eye");
