// Create an array of objects which hold the denominations and their values
let denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

const checkCashRegister = (price, cash, cid) =>{
  let output = { status: null, change: [] }; //start an object that shows the status and the amount of change to give
  let change = cash - price;

  // we make an object out of cid array
  let register = cid.reduce(
    (acc, curr) => {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  // if there's exactly enough money in the register to give the change it closes and we give what's in cid
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  // if there's less we return that there's not enough money
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // initialise change_arr and make it loop to give the change
  let change_arr = denom.reduce((acc, curr) => {
    let value = 0;
    /*While we have notes or coins of greater value than the change we have to give we will substract the value of that
     note or coin from the change we have to give and from the register,while giving that value to the variable value
 */ 
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest two decimal points and continue looping
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc; // Return the value to the change_arr
  }, []); // Initial value of empty array for reduce

  // If there are no elements in change_arr or we have leftover change, return
  // the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Here is your change, ma'am.
  output.status = "OPEN";
  output.change = change_arr;
  return output;
}

// test here
checkCashRegister(19.5, 20.0, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90.0],
  ["FIVE", 55.0],
  ["TEN", 20.0],
  ["TWENTY", 60.0],
  ["ONE HUNDRED", 100.0]
])
