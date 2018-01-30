function redomChance(leaveQuarters){
    var totalWinQuarters=0;
    var myQuarters=Math.floor(Math.random()*50+50);
    while(myQuarters<0){
        if(myQuarters<leaveQuarters){
            return totalWinQuarters+myQuarters;
        }
        winQuarter=Math.floor(Math.random()*50+50);
        if(myQuarters===winQuarter){
            totalWinQuarters+=winQuarter;
            if(myQuarters>=40&&(myQuarters+totalWinQuarters)<200){
                continue
            }else{
                break;
            }
        }
        myQuarters--;
    }
    return totalWinQuarters+myQuarters;
}
console.log(redomChance(30));