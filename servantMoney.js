
function servantMoney(days){
  var initMoney = 0.01;
  while(days>=0){
    initMoney+=initMoney;
    days--;
  }
  return initMoney;
}
console.log(servantMoney(30));

function daysToReachAmount(amount){
  var initMoney = 0.01;
  var days=1;
  while(initMoney<amount){
    initMoney+=initMoney;
    days++;
  }
  return days;
}

console.log(daysToReachAmount(Infinity));