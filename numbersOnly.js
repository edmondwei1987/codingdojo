function numbersOnly(arr){
    for(var i=0;i<arr.length;i++){
        if(typeof(arr[i])!=="number"){
            arr.pop(arr[i]);
        }
    }
    console.log(arr);
}
numbersOnly([1,3,4,"only"]);