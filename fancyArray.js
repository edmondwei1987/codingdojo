function fancyArray(arr,symbol,reversed){
  var temp;
  if(typeof(symbol)!="string"){
    symbol="-->";
  }
  if(reversed){
    for(var i=0;i<arr.length/2;i++){
      temp=arr[i];
      arr[i]=arr[arr.length-i-1];
      arr[arr.length-i-1]=temp;
    }
  }
  for(var i=0;i<arr.length;i++){
    console.log(i+symbol+arr[i]);
  }
}

fancyArray(["Jonny","sabrina"],"::",true);