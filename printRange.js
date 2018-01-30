
function printRange(start,end,skipAmount){
  if(skipAmount<=0){
    return null;
  }
  if(typeof(skipAmount)==="undefined"&&typeof(end)==="undefined"){
    end=start;
    start=0;
  }
  if(typeof(skipAmount)==="undefined"){
    skipAmount=1;
  }

  while(start<end){
    console.log(start);
    start+=skipAmount;
  }
}

printRange(10);