const convertToRoman = (num) =>{
 let decVals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 let romVals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    
    var roman ="";

    for (var i =0; i<=decVals.length; i++){
        while(decVals[i] <= num){
            roman += romVals[i];
            num -= decVals[i];
        }
    }
    return roman;
}

convertToRoman(36);
